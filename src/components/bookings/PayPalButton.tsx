import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        style?: {
          layout?: string;
          color?: string;
          shape?: string;
          label?: string;
        };
        createOrder: (data: unknown, actions: {
          order: {
            create: (orderData: {
              purchase_units: Array<{
                amount: {
                  value: string;
                  currency_code: string;
                };
                description?: string;
              }>;
            }) => Promise<string>;
          };
        }) => Promise<string>;
        onApprove: (data: { orderID: string }, actions: {
          order: {
            capture: () => Promise<{
              id: string;
              status: string;
              payer: {
                email_address: string;
                name: { given_name: string; surname: string };
              };
            }>;
          };
        }) => Promise<void>;
        onError: (err: Error) => void;
        onCancel: () => void;
      }) => {
        render: (container: HTMLElement) => void;
      };
    };
  }
}

type PayPalButtonProps = {
  amount: string;
  description: string;
  onSuccess: (details: { orderId: string; payerEmail: string; payerName: string }) => void;
  onError: (error: string) => void;
  onCancel: () => void;
};

const PayPalButton = ({ amount, description, onSuccess, onError, onCancel }: PayPalButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadPayPal = async () => {
      try {
        // Fetch PayPal client ID from edge function
        const { data, error: fetchError } = await supabase.functions.invoke('get-paypal-client-id');
        
        if (fetchError || !data?.clientId) {
          throw new Error('Failed to load PayPal configuration');
        }

        const clientId = data.clientId;

        // Check if PayPal SDK is already loaded
        if (!window.paypal) {
          // Load PayPal SDK
          const script = document.createElement('script');
          script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
          script.async = true;
          
          await new Promise<void>((resolve, reject) => {
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load PayPal SDK'));
            document.head.appendChild(script);
          });
        }

        if (!isMounted || !containerRef.current) return;

        // Render PayPal button
        window.paypal?.Buttons({
          style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
          },
          createOrder: async (_data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                    currency_code: 'USD',
                  },
                  description: description,
                },
              ],
            });
          },
          onApprove: async (_data, actions) => {
            const details = await actions.order.capture();
            onSuccess({
              orderId: details.id,
              payerEmail: details.payer.email_address,
              payerName: `${details.payer.name.given_name} ${details.payer.name.surname}`,
            });
          },
          onError: (err) => {
            console.error('PayPal error:', err);
            onError('Payment failed. Please try again.');
          },
          onCancel: () => {
            onCancel();
          },
        }).render(containerRef.current);

        if (isMounted) {
          setIsLoading(false);
        }
      } catch (err) {
        console.error('PayPal load error:', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load payment');
          setIsLoading(false);
        }
      }
    };

    loadPayPal();

    return () => {
      isMounted = false;
    };
  }, [amount, description, onSuccess, onError, onCancel]);

  if (error) {
    return (
      <div className="text-center py-4">
        <p className="text-red-400 mb-2">{error}</p>
        <p className="text-sm text-gray-400">Please try refreshing the page or contact support.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-[#FD0061] mr-2" />
          <span className="text-gray-300">Loading payment options...</span>
        </div>
      )}
      <div ref={containerRef} className={isLoading ? 'hidden' : ''} />
    </div>
  );
};

export default PayPalButton;
