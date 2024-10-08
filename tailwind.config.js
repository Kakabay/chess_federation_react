/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        BLACK: '#262626',
        GREEN: '#01815E',
        BROWN: '#401D09',
        DGRAY2: '#595959',
        HEADER_BG: '#EDEBE4',
        PAGE_BG: '#F6F4EC',
        LBROWN: '#A6785E',
        LBROWN2: '#D6C2B4',
        GRAY1: '#999999',
        RED_PASTEL: '#BF3030',
        IMAGE_GRADIENT: '',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        IMAGE_GRADIENT: 'linear-gradient(rgba(3, 5, 29, 0.85) 0%, rgba(255, 0, 0, 0.85) 100%)',
        SLIDER_IMAGE_GRADIENT: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
      },
      boxShadow: {
        HEADER_SHADOW: '0 1px 14px rgba(0, 0, 0, 0.25)',
      },
      transitionTimingFunction: {
        TRANSITIOM_ONE: 'cubic-bezier(0.55, 0, 0.1, 1)',
      },
      margin: {
        // SLIDER_MARGIN: 'calc(29vw - 260px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
