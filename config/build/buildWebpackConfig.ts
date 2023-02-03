import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types/config';
import webpack from 'webpack';
import path from 'path';
import buildLoaders from './buildLoaders';
import buildResolve from './buildResolve';
import buildPlugins from './buildPlugins';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {

  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev ? 'inline-source-map' : undefined, 
    resolve: buildResolve(),
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}