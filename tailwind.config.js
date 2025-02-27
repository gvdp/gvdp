module.exports = {
  theme: {
    extend: {
      typography: ({ theme }) => ({
        themed: {
          css: {
            '--tw-prose-body': 'var(--theme-color-prose)',
            '--tw-prose-headings': 'var(--theme-color-prose-secondary)',
            '--tw-prose-bold': 'var(--theme-color-prose-secondary)',
          },
        },
      }),
    },
  },
}
