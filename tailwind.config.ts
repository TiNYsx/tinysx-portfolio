
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
				// Custom hacker theme colors
				'hacker-green': {
					50: '#f0fff0',
					100: '#dcffdc',
					400: '#39ff14',
					500: '#00ff00',
					600: '#00d900',
					700: '#00b300',
					800: '#008000',
					900: '#004000',
				},
				'dark-bg': {
					50: '#2a2a2a',
					100: '#1f1f1f',
					900: '#1a1a1a',
					950: '#0d0d0d',
				}
			},
			fontFamily: {
				'mono': ['Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
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
				'typing': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: '100%'
					}
				},
				'blink': {
					'0%, 50%': {
						'border-color': 'transparent'
					},
					'51%, 100%': {
						'border-color': '#39ff14'
					}
				},
				'matrix-rain': {
					'0%': {
						transform: 'translateY(-100vh)'
					},
					'100%': {
						transform: 'translateY(100vh)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px #39ff14'
					},
					'50%': {
						boxShadow: '0 0 20px #39ff14, 0 0 30px #39ff14'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typing': 'typing 3s steps(20) 1s both',
				'blink': 'blink 1s step-end infinite',
				'matrix-rain': 'matrix-rain 3s linear infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
