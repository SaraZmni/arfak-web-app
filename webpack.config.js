const path = require("path");
const webpack = require('webpack');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const stylesHandler = 'style-loader';
const wsServerAddress = 'ws://localhost:' + process.env.DEV_SERVER_PORT + process.env.BASE_URL;

module.exports = [
    {
        entry:"./src/index.tsx",
        mode:"development",
        target:"web",
        output:{
            path:path.resolve(__dirname,"dist"),
            filename:"bundle.js",
        },
        resolve: {
            extensions:[".js",".ts",".tsx","jsx"],
            plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
        },
        module:{
            rules:[
                {
                    test:/\.(ts|tsx)$/,
                    exclude:/node_modules/,
                    use: 'ts-loader'
                },
                {
                    test:/\.(js|jsx)$/,
                    exclude:/node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options:{
                            presets:['@babel/preset-env','@babel/preset-react','@babel/preset-typescript'],
                            plugins: [
                               require('react-refresh/babel'),
                              ].filter(Boolean),
                        }
                    }
                },
                {
                    test:/\.css$/,
                    exclude:/node_modules/,
                    use: [stylesHandler, 'css-loader', 'postcss-loader'],
                },
              
            ]
        },
        devServer: {
            historyApiFallback: true,
          },
        plugins:[
            new HtmlWebpackPlugin({
                template:'./src/index.html',
                favicon: './src/static/images/favicon.png',
            }),
            new ReactRefreshWebpackPlugin({
                overlay: false,
              }),
            new webpack.ProvidePlugin({
                React: 'react',
            }),
        ],

    }
]