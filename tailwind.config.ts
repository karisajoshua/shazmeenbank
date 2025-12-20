
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated colors for Shazmeen Bank based on client's palette
				shazmeen: {
					dark: "#000000",     // Black
					red: "#FD0061",      // Deep pink/magenta
					blush: "#F1888E",    // Light pink
					gray: "#DBCABD",     // Light beige
					white: "#FFFFFF",     // Keeping white
					secondary: "#FAAAAE" // Medium pink
				}
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Playfair Display", "serif"],
			},
			backgroundImage: {
				'gradient-soft': 'linear-gradient(180deg, rgb(254,100,121) 0%, rgb(251,221,186) 100%)',
				'gradient-pink': 'linear-gradient(to right, #ee9ca7, #ffdde1)',
			},
			boxShadow: {
				'premium': '0 4px 20px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.03)',
				'premium-hover': '0 10px 30px rgba(0, 0, 0, 0.08), 0 15px 25px rgba(0, 0, 0, 0.05)',
				'button': '0 4px 10px rgba(253, 0, 97, 0.25)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'scrolling': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'scale-subtle': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.03)' }
				},
				// Modified animation for fading in and scrolling logos with slower movement
				'fade-and-scroll': {
					'0%': { opacity: '0.3', transform: 'translateX(0)' },
					'10%': { opacity: '0.8' },
					'100%': { opacity: '0.8', transform: 'translateX(-50%)' }
				},
				// New slower animation for the logo carousel
				'slow-scroll': {
					'0%': { opacity: '0.3', transform: 'translateX(0)' },
					'10%': { opacity: '0.8' },
					'100%': { opacity: '0.8', transform: 'translateX(-50%)' }
				},
				// Marquee animations for podcast image gallery
				'marquee-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'marquee-right': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'scrolling-logos': 'scrolling 20s linear infinite',
				'hover-scale': 'scale-subtle 0.3s ease-out forwards',
				// Updated animation duration from 25s to 60s to make it slower
				'fade-and-scroll': 'fade-and-scroll 60s linear infinite',
				// New slower animation with a 90s duration
				'slow-scroll': 'slow-scroll 90s linear infinite',
				// Marquee animations
				'marquee-left': 'marquee-left 30s linear infinite',
				'marquee-right': 'marquee-right 30s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
