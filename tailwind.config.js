module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    extend: {},
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fontFamily: {
      sans: ['Roboto', 'Noto Sans JP'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
