import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const buildPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ];
};

export default buildPlugins;