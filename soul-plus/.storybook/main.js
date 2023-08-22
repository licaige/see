const path = require('path');
const resolve = dir => path.join(__dirname, dir);

const BaseUrl = process.env.SBK_URL;

module.exports = {
  stories: [
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    // customize the Vite config here
    if (BaseUrl) config.base = BaseUrl;

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve('../src'),
      assets: resolve('../src/assets'),
      style: resolve('../src/style'),
      packages: resolve('../packages'),
    };

    // return the customized config
    return config;
  },

  async managerVite(config) {
    // customize the Vite config here
    if (BaseUrl) config.base = BaseUrl;

    // return the customized config
    return config;
  },

  // async managerWebpack(config) {
  //   // customize the Vite config here
  //   if (BaseUrl) config.output.publicPath = BaseUrl;

  //   // return the customized config
  //   return config;
  // },
};
