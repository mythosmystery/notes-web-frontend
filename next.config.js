const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
   images: {
      loader: 'imgix',
      path: 'https://mythosmystery.github.io/tailwind-portfolio',
   },
   assetPrefix: isProd ? '/tailwind-portfolio/' : '',
   basePath: isProd ? '/tailwind-portfolio' : '',
};
