// @flow

export const DEFAULT_PLUGIN = ['jpegtran', 'pngquant', 'svgo', 'gifsicle'];
export const DEFAULT_PATTERN = [
  '!**/node_modules',
  '!**/coverage',
  '!**/es',
  '!**/lib',
  '!**/storybook-static',
  '!**/lib',
  '!**/.next',
];
export const DEFAULT_OUTPUT_FILE = './base64.json';
