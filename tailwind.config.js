/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    animation: {
      blink: 'blink 0.8s ease-in-out infinite',
    },
    extend: {
      backgroundImage: {
        heroBackground: "url('./src/assets/images/Home/Header/HeroImage.png')",
        dotOverlay: "url('./src/assets/images/Home/Agents/DotOverlay.png')",
        linearAgent: 'linear-gradient(225deg,rgba(246,251,253,1),rgba(244,248,253,0))',
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        primary: '#0056D6',
        lightPrimary: '#0D5FD8',
        gray: '#F1F1F1',
        lightGray: '#717A72',
        milk: '#F2F4F9',
        navText: '#6C768D',
        featureText: '#5F5F5F',
        lightText: '#757575',
        lightText2: '#5B5B5B',
        boldText: '#424242',
        greenText: '#153F3F',
        title: '#2E2E2E',
        subTitle: '#2C3847',
        button2: '#161C28',
        primaryVariant: 'rgba(77, 181, 255, .4)',
        transparentDark: 'rgba(0, 0, 0, .3)',
        transparentDark1: 'rgba(0, 0, 0, .05)',
        transparentDark2: 'rgba(255, 255, 255, .5)',
        transparentDark3: 'rgba(0, 0, 0, .7)',
        light: 'rgba(255, 255, 255, .6)',
      },
      gridTemplateColumns: {
        footer: '35% 60%',
      },
      inset: {
        15: '3.7rem',
        18: '4.2rem',
      },
      height: {
        110: '28rem',
        128: '32rem',
      },
      maxWidth: {
        maxWidth1: '1232px',
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0 },
        },
      },
      margin: {
        halfScreen: '-50vw',
      },
      screens: {
        otherPhone: '360px',
        phone: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
