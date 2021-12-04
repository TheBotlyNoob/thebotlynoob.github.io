// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

/** @type {import('astro').AstroUserConfig} */
module.exports = {
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
    site: 'https://jj.is-a.dev/',
    sitemap: true
  }
};
