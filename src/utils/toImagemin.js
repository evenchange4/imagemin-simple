// @flow
import path from 'path';
import globby from 'globby';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminGifsicle from 'imagemin-gifsicle';
import { DEFAULT_PATTERN } from './constants';
import { type ImageminArguments } from './type.flow';
import log from './log';

const toImagemin = async ({ pattern, plugin }: ImageminArguments) => {
  try {
    const imagePaths = await globby([pattern, ...DEFAULT_PATTERN]);
    if (imagePaths.length > 0) log(JSON.stringify(imagePaths, null, 2));

    const plugins = [
      plugin.includes('imagemin-jpegtran') && imageminJpegtran(),
      plugin.includes('imagemin-pngquant') &&
        imageminPngquant({ quality: '65-80' }),
      plugin.includes('imagemin-svgo') && imageminSvgo(),
      plugin.includes('imagemin-gifsicle') && imageminGifsicle(),
    ].filter(Boolean);

    const imageminPromises = imagePaths.map(imagePath =>
      imagemin([imagePath], path.dirname(imagePath), { plugins }),
    );
    const files = await Promise.all(imageminPromises);
    log(`> Minify ${files.length} images successfully.`);
  } catch (error) {
    throw error;
  }
};

export default toImagemin;
