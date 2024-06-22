import path from "path";

const webpackConfig = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            projectReferences: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "datr_tech_comps.js",
    path: path.resolve(path.dirname("./"), "dist"),
    library: "datr_tech_comps",
  },
};

export default webpackConfig;
