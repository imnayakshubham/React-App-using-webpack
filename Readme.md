# React App using webpack

This repository contains the source code for a React application built using webpack. webpack is a powerful module bundler for JavaScript applications.

## Installation
To run this React app locally, follow these steps:

Clone the repository to your local machine.

Install the required dependencies by running the following command:

```
npm install
```

## Usage
After completing the installation, you can use the following npm scripts:

- `npm start`: Starts the development server and opens the application in your default browser.
- `npm run build:dev`: Builds the project for production, generating the bundled files in the build directory.

## Configuration
The webpack configuration file (webpack.config.js) is responsible for configuring the build process. Here are some key features of the configuration:

- Entry point: src/index.js
- Output file: build/index.js
- Plugins:
  - HTMLWebpackPlugin: Generates an HTML file as the base template for the application.
  - ProvidePlugin: Provides the React module globally.
  - MiniCssExtractPlugin: Extracts CSS into a separate file.

- Module rules:
  - Babel-loader: Transpiles JavaScript and JSX files using Babel presets.
  - CSS-loader: Loads CSS files.
  - Sass-loader: Compiles Sass to CSS.
  - Asset/resource: Treats various file types as resources and emits them to the output directory.

- Development server:
  - Port: 3000
  - Static files directory: build
  - Auto-open browser: Enabled