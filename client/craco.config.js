const path = require('path');
const Dotenv = require('dotenv-webpack');

const appRoot = path.resolve(__dirname, './');

const envPath = `${appRoot}/env/${process.env.SERVER}.env`;

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [new Dotenv({ path: envPath })]
  }
};
