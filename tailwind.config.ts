import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '374px',
  		md: '799px',
  		lg: '1199px'
  	},
  	extend: {
  		colors: {
  			main: '#F5F4F0',
  			sub: '#ECECEC',
  			green: '#99FFCC',
  			orange: '#FFCC99',
  			pink: '#FF99CC',
  			blue: '#7BBBFF',
  			dark: {
  				'50': '#dbdbdb',
  				'100': '#cfcfcf',
  				'200': '#b8b8b8',
  				'300': '#969696',
  				'400': '#6e6e6e',
  				'500': '#545454',
  				'600': '#424242',
  				'700': '#363636',
  				'800': '#2b2b2b',
  				'900': '#1a1a1a',
  				'950': '#0d0d0d'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			'5xl': '50px',
  			'6xl': '75px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			float1: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			float2: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-15px)'
  				}
  			},
  			float3: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			float4: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-25px)'
  				}
  			},
  			rotate: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'rotate-float': {
  				'0%': {
  					transform: 'rotate(0deg) translateY(0)'
  				},
  				'50%': {
  					transform: 'rotate(180deg) translateY(-20px)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(0)'
  				}
  			}
  		},
  		animation: {
  			float1: 'float1 4s ease-in-out infinite',
  			float2: 'float2 3s ease-in-out infinite',
  			float3: 'float3 5s ease-in-out infinite',
  			float4: 'float4 6s ease-in-out infinite',
  			rotate: 'rotate 5s linear infinite',
  			'rotate-float': 'rotate-float 5s linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
