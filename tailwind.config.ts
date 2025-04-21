
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
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
        electric: {
          DEFAULT: '#4F6BFF', // Неоновый синий
          light: '#6B81FF',
          dark: '#0D3BD0',
          yellow: '#FFFC00', // Яркий неоновый желтый
          pink: '#FF00E4', // Неоновый розовый
          green: '#39FF14', // Неоновый зеленый
          purple: '#9D00FF', // Неоновый фиолетовый
          cyan: '#00FFFF', // Неоновый голубой
        },
        neon: {
          DEFAULT: '#4F6BFF',
          blue: '#4F6BFF',
          yellow: '#FFFC00',
          pink: '#FF00E4',
          green: '#39FF14',
          purple: '#9D00FF',
          cyan: '#00FFFF',
        },
        dark: {
          DEFAULT: '#121212',
          deeper: '#0A0A0A',
          lighter: '#1F1F1F',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'lightning-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.2)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'slide-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'neon-pulse': {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 5px #4F6BFF) drop-shadow(0 0 10px #4F6BFF)',
            textShadow: '0 0 5px #4F6BFF, 0 0 10px #4F6BFF, 0 0 15px #4F6BFF, 0 0 20px #4F6BFF'
          },
          '50%': { 
            filter: 'drop-shadow(0 0 10px #4F6BFF) drop-shadow(0 0 20px #4F6BFF) drop-shadow(0 0 30px #4F6BFF)',
            textShadow: '0 0 10px #4F6BFF, 0 0 20px #4F6BFF, 0 0 30px #4F6BFF, 0 0 40px #4F6BFF'
          }
        },
        'neon-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 5px #4F6BFF) drop-shadow(0 0 10px #4F6BFF)'
          },
          '20%, 24%, 55%': {
            opacity: '0.7',
            filter: 'none'
          }
        },
        'neon-yellow-pulse': {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 5px #FFFC00) drop-shadow(0 0 10px #FFFC00)',
            textShadow: '0 0 5px #FFFC00, 0 0 10px #FFFC00, 0 0 15px #FFFC00'
          },
          '50%': { 
            filter: 'drop-shadow(0 0 10px #FFFC00) drop-shadow(0 0 20px #FFFC00) drop-shadow(0 0 30px #FFFC00)',
            textShadow: '0 0 10px #FFFC00, 0 0 20px #FFFC00, 0 0 30px #FFFC00'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'lightning-pulse': 'lightning-pulse 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'neon-pulse': 'neon-pulse 2s infinite',
        'neon-flicker': 'neon-flicker 3s infinite',
        'neon-yellow-pulse': 'neon-yellow-pulse 2s infinite'
      },
      boxShadow: {
        'neon-blue': '0 0 5px #4F6BFF, 0 0 10px #4F6BFF, 0 0 15px #4F6BFF, 0 0 20px #4F6BFF',
        'neon-yellow': '0 0 5px #FFFC00, 0 0 10px #FFFC00, 0 0 15px #FFFC00, 0 0 20px #FFFC00',
        'neon-pink': '0 0 5px #FF00E4, 0 0 10px #FF00E4, 0 0 15px #FF00E4, 0 0 20px #FF00E4',
        'neon-cyan': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF, 0 0 20px #00FFFF',
      },
      textShadow: {
        'neon-blue': '0 0 5px #4F6BFF, 0 0 10px #4F6BFF, 0 0 15px #4F6BFF, 0 0 20px #4F6BFF',
        'neon-yellow': '0 0 5px #FFFC00, 0 0 10px #FFFC00, 0 0 15px #FFFC00, 0 0 20px #FFFC00',
        'neon-pink': '0 0 5px #FF00E4, 0 0 10px #FF00E4, 0 0 15px #FF00E4, 0 0 20px #FF00E4',
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon-blue': {
          textShadow: '0 0 5px #4F6BFF, 0 0 10px #4F6BFF, 0 0 15px #4F6BFF, 0 0 20px #4F6BFF',
        },
        '.text-shadow-neon-yellow': {
          textShadow: '0 0 5px #FFFC00, 0 0 10px #FFFC00, 0 0 15px #FFFC00, 0 0 20px #FFFC00',
        },
        '.text-shadow-neon-pink': {
          textShadow: '0 0 5px #FF00E4, 0 0 10px #FF00E4, 0 0 15px #FF00E4, 0 0 20px #FF00E4',
        },
        '.text-shadow-neon-green': {
          textShadow: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14, 0 0 20px #39FF14',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
