module.exports = function (config) {
  config.set({
    // NOTE: choose browser from cli option
    // browsers: [ 'Chrome', 'PhantomJS' ],
    files: [ './src/kopt.spec.ts' ],
    frameworks: [ 'jasmine' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-webpack'
    ],
    preprocessors: {
      './src/kopt.spec.ts': [ 'webpack' ]
    },
    reporters: [ 'dots' ],
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ["", ".ts"]
      },
      module: {
        loaders: [
          { test: /\.ts$/, loader: "ts-loader" }
        ],
        preLoaders: [
          { test: /\.ts$/, loader: "tslint" }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true,
    }
  });
};
