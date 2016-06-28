module.exports = {
  entry: "./src/kopt.ts",
  output: {
    filename: "./dist/kopt.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".ts"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts" }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map" },
      { test: /\.ts$/, loader: "tslint" }
    ]
  }
}
