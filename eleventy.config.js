import { HtmlBasePlugin } from '@11ty/eleventy'

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('switch-theme.js')
  eleventyConfig.addPlugin(HtmlBasePlugin)

  return {
    dir: {
      input: 'site',
      layouts: '../_layouts',
    },
  }
}
