export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('switch-theme.js')

  return {
    dir: {
      input: 'site',
      layouts: '../_layouts',
    },
  }
}
