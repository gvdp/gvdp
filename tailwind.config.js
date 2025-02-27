module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // todo: these are all system fonts, possibly add another local or web font
      serif: 'ui-serif, "Times New Roman", serif',
      mono: '"Nimbus Mono PS", "Courier New", monospace',
      sans: 'Optima, Candara, "Noto Sans", source-sans-pro, sans-serif',
    },
    colors: {},
    extend: {
      animation: {
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1)',
      },
      typography: ({ theme }) => ({
        themed: {
          css: {
            '--tw-prose-body': "theme('colors.prose')",
            '--tw-prose-headings': "theme('colors.proseSecondary')",
            '--tw-prose-bold': "theme('colors.proseSecondary')",
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          colors: {
            primary: '#0d9488',
            secondary: '#bae6fd',
            prose: '#475569',
            proseSecondary: '#0f172a',
          },
        },
      },
      themes: [
        {
          name: 'doenker',
          selectors: ['.theme-doenker'],
          extend: {
            colors: {
              primary: '#e0f2fe',
              secondary: '#155e75',
              prose: '#e2e8f0',
              proseSecondary: '#1f2937',
            },
          },
        },
      ],
    }),
  ],
}
