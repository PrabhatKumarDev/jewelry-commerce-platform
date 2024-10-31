/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '1.2rem',     // 12px
        'sm': '1.4rem',     // 14px
        'base': '1.6rem',   // 16px
        'lg': '1.8rem',     // 18px
        'xl': '2rem',       // 20px
        '2xl': '2.4rem',    // 24px
        '3xl': '3rem',      // 30px
        '4xl': '3.6rem',    // 36px
        '5xl': '4.8rem',    // 48px
        '6xl': '6rem',      // 60px
      },
      padding: {
        'xs': '0.4rem',    // 4px
        'sm': '0.8rem',    // 8px
        'md': '1.6rem',    // 16px
        'lg': '2.4rem',    // 24px
        'xl': '3.2rem',    // 32px
        '2xl': '4.8rem',   // 48px
      },
      borderRadius: {
        'none': '0',
        'sm': '0.2rem',    // 2px
        'md': '0.4rem',    // 4px
        'lg': '0.8rem',    // 8px
        'xl': '1.2rem',    // 12px
        '2xl': '1.6rem',   // 16px
        'full': '9999px',
      },
      colors: {
        ivory: '#FFFFF0',
        charcoal: '#36454F',
        gold: '#D4AF37',
        roseGold: '#B76E79',
        softGray: '#E5E5E5',
        deepTeal: '#008080',
      },
    },
  },
  plugins: [],
}

