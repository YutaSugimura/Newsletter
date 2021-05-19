module.exports = {
  purge: ['./pages/**/*.js', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fontFamily: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
