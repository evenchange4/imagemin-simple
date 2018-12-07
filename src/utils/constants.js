// @flow
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminGifsicle from 'imagemin-gifsicle';

export const DEFAULT_PLUGINS = [
  imageminJpegtran(),
  imageminPngquant({ quality: '65-80' }),
  imageminSvgo(),
  imageminGifsicle(),
];
export const DEFAULT_PATTERN = ['!node_modules'];
