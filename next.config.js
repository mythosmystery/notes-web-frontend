const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
   images: {
      loader: 'imgix',
      path: 'https://mythosmystery.github.io/notes-web-frontend',
   },
   assetPrefix: isProd ? '/notes-web-frontend/' : '',
   basePath: isProd ? '/notes-web-frontend' : '',
};
