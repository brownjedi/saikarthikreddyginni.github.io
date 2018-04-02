const autoPrefixer = require('autoprefixer')

module.exports = {
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-typescript',
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        sourceMap: true,
        precision: 8,
        postCssPlugins: [autoPrefixer()],
        data: "@import 'src/sass/global';",
        includePaths: ['src/sass/_global.scss']
      }
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        filetypes: {
          '.scss': {
            syntax: `postcss-scss`
          },
        },

        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
      }
    }
  ],
}
