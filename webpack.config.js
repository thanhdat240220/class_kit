const path = require("path");
// const webpack = require("webpack");

module.exports = function () {
    return {
        mode: "development",
        entry: path.resolve(__dirname, "index.js"),
        output: {
            path: path.resolve(__dirname, "public/dist"),
            filename: "index.bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    // include: [path.resolve(__dirname, "src")],
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    "@babel/preset-env",
                                    "@babel/preset-react",
                                ],
                                plugins: [
                                    [
                                        path.resolve(
                                            __dirname,
                                            "bundling/babel-plugin-jsx-classname"
                                        ),
                                        {
                                            classPrefix: "dat-",
                                        },
                                    ],
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        devServer: {
            hot: true,
            port: 9000,
            client: {
                overlay: false,
            },
        },
        // plugins: [
        //     new webpack.DefinePlugin({
        //         __DEV__: isDev,
        //     }),
        // ],
    };
};
