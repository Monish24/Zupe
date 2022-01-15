/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin"); // for moment tree shaking locales
const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')

module.exports = {
  publicPath: "/",
  runtimeCompiler: true,
  productionSourceMap: process.env.NODE_ENV !== "production",
  crossorigin: "use-credentials",
  lintOnSave: true,

  configureWebpack: (config) => {
    // config.plugins.push(HtmlWebpackPluginInstance, PreloadPluginInstance)

    if (process.env.NODE_ENV === "development") {
      config.devtool = "source-map";
    } else if (process.env.NODE_ENV === "test") {
      config.devtool = "cheap-module-eval-source-map";
    }
  },

  chainWebpack: (config) => {
    // for moment tree shaking locales
    config.resolve.alias.set("moment", "moment/moment.js");
    config.optimization.set("runtimeChunk", true);

    if (process.env.NODE_ENV === "production") {
      // for moment tree shaking locales
      // Include only 'en-us' (which is always included) and 'es-us' locales
      config
        .plugin("moment")
        .use(MomentLocalesPlugin, [
          {
            localesToKeep: ["es-us"],
          },
        ])
        .use(
          new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
          })
        )
    }

    config.plugin("auto-routing").use(
      new VueAutoRoutingPlugin({
        pages: 'src/pages',
        importPrefix: '@/pages/'
      })
    )
  },
};
