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
            // '--tw-prose-lead': theme('colors.pink[700]'),
            // '--tw-prose-links': theme('colors.pink[900]'),
            '--tw-prose-bold': "theme('colors.proseSecondary')",
            // '--tw-prose-counters': theme('colors.pink[600]'),
            // '--tw-prose-bullets': theme('colors.pink[400]'),
            // '--tw-prose-hr': theme('colors.pink[300]'),
            // '--tw-prose-quotes': theme('colors.pink[900]'),
            // '--tw-prose-quote-borders': theme('colors.pink[300]'),
            // '--tw-prose-captions': theme('colors.pink[700]'),
            // '--tw-prose-code': theme('colors.pink[900]'),
            // '--tw-prose-pre-code': theme('colors.pink[100]'),
            // '--tw-prose-pre-bg': theme('colors.pink[900]'),
            // '--tw-prose-th-borders': theme('colors.pink[300]'),
            // '--tw-prose-td-borders': theme('colors.pink[200]'),
            // '--tw-prose-invert-body': theme('colors.pink[200]'),
            // '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.pink[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
            // '--tw-prose-invert-bold': theme('colors.white'),
            // '--tw-prose-invert-counters': theme('colors.pink[400]'),
            // '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            // '--tw-prose-invert-hr': theme('colors.pink[700]'),
            // '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            // '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            // '--tw-prose-invert-captions': theme('colors.pink[400]'),
            // '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            // '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
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
