/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

const startsWith = function (str = '', search, pos) {
  return str.substr((!pos || pos < 0) ? 0 : +pos, search.length) === search
}

const insertResolveUrl = (loader) => {
  if (loader.constructor === Array) {
    // Loader is an array

    // clone loader array
    const temp = [...loader]

    // insert resolve-url-loader just before sass loader
    const sassIndex = temp.findIndex(x => startsWith(x, 'sass'))

    // insert 'resolve-url-loader' just before sass-loader
    temp.splice(sassIndex, 0, 'resolve-url-loader')

    // return the new array
    return temp
  } else if (loader.constructor === String) {
    return loader.replace('!sass', '!resolve-url-loader!sass')
  }

  return loader
}

exports.modifyWebpackConfig = ({
  config,
  stage
}) => {
  switch (stage) {
    case 'develop':
    case 'build-css':
    case 'develop-html':
    case 'build-html':
    case 'build-javascript':
      config.loader('sass', (config) => {
        config[config.loaders ? 'loaders' : 'loader'] = insertResolveUrl(config[config.loaders ? 'loaders' : 'loader'])
        return config
      })

      config.loader('sassModules', (config) => {
        config[config.loaders ? 'loaders' : 'loader'] = insertResolveUrl(config[config.loaders ? 'loaders' : 'loader'])
        return config
      })

      break
  }

  return config
}
