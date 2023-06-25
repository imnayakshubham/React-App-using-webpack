const path = require("path");
const webpack = require("webpack");
const htmlWebPackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development", // Set the mode to development
    entry: "./src/index.js", // Entry point of the application
    output: {
        filename: "index.js", // Output file name after bundling
        path: path.join(__dirname, "build"), // Output directory path for bundled files
        clean: true, // Clean the build folder before generating new output
        assetModuleFilename: `assets/[hash][ext][query]` // Customize the asset file name and path
    },
    plugins: [
        new htmlWebPackPlugin({
            template: "./public/index.html" // Specify the base HTML file used by webpack
        }),
        new webpack.ProvidePlugin({
            React: 'react', // Provide the React module globally
        }),
        new miniCssExtractPlugin({
            filename: "index.css" // Output CSS file name
        })
    ],
    module: { // Configuration for handling different file types in the application
        rules: [
            {
                test: /\.jsx?|\.tsx?|\.js|\.ts$/, // Match files with these extensions
                exclude: /node_modules/, // Exclude files from this directory
                use: {
                    loader: "babel-loader", // Use babel-loader for transpiling JavaScript and JSX files
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"] // Babel presets for JavaScript and React
                    }
                }
            },
            {
                test: /\.css$/, // Match CSS files
                use: [
                    { loader: miniCssExtractPlugin.loader }, // Extract CSS into separate files
                    { loader: "css-loader" }, // Load CSS files
                ]
            },
            {
                test: /\.s[ac]ss$/, // Match Sass files
                use: [
                    { loader: miniCssExtractPlugin.loader }, // Extract CSS into separate files
                    { loader: "css-loader" }, // Load CSS files
                    { loader: "sass-loader" } // Compile Sass to CSS
                ]
            },
            {
                test: /\.(jpe?g|png|gif|bmp|tiff|ico|webp|svg|mp4|webm|ogg|ogv|mov|avi|wmv|mpg|mpeg)$/, // Match various file extensions
                type: 'asset/resource', // Treat these files as resources and emit them to the output directory
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build') // Specify the static files directory for the development server
        },
        port: 3000, // Port number for the development server
        open: true // Open the default browser when the development server starts
    },
    resolve: {
        extensions: ['*', '.tsx', '.jsx', ".js", ".ts", ".json"], // Specify the file extensions to resolve during imports
    }
}
