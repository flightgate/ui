import path from 'node:path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import webpack from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-webpack5-compiler-babel', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: { autodocs: 'tag' },
  webpackFinal(config) {
    config.resolve ??= {};

    // Forces a single instance of React/ReactDOM — without this, the pnpm virtual
    // store generates separate copies (.pnpm/react-dom@x_react@x) and the webpack
    // bundles multiple versions, causing "ReactCurrentDispatcher" undefined at runtime.
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      'react-native': 'react-native-web',
      react: path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
    };

    // __DEV__ is used internally by React Native; it does not exist in the browser.
    config.plugins ??= [];
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      }),
    );

    return config;
  },
};

export default config;
