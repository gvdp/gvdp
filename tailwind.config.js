module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { 
      // todo: these are all system fonts, possibly add another local or web font
      serif: 'ui-serif, "Times New Roman", serif' ,
      mono: '"Nimbus Mono PS", "Courier New", monospace' ,
      sans: 'Optima, Candara, "Noto Sans", source-sans-pro, sans-serif'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
