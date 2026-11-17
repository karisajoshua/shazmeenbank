import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type SiteContent = { heading?: string; body?: string; image_url?: string; button_label?: string; button_url?: string };
const db = supabase as any;
export function useSiteContent(page: string, section: string) {
  const [content, setContent] = useState<SiteContent>({});
  useEffect(() => {
    let active = true;
    db.from('site_content').select('content').eq('page_key',page).eq('section_key',section).maybeSingle()
      .then(({data}: any) => { if(active && data?.content) setContent(data.content); });
    return () => { active = false; };
  }, [page,section]);
  return content;
}
