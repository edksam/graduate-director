const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#f5222d",
              "@success-color": "#fa541c",
              "@info-color": "#d67375",
              "@warning-color": "#722ed1",
              "@error-color": "#fa541c",
              "@text-color": "#241d1d",
              "@layout-header-background": "#cf1322",
              "@layout-header-height": "70px",
              "@layout-trigger-height": "60px",
              "@layout-trigger-background": "#f02b3c",
              "@menu-item-height": "69px",
              "@menu-dark-submenu-bg": "#5c0011",
              "@menu-dark-item-active-bg": "#ff7875",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
