// @flow
import path from 'path';
import globby from 'globby';
import imagemin from 'imagemin';
import { DEFAULT_PLUGINS, DEFAULT_PATTERN } from './constants';
import { type CliArguments } from './type.flow';
import log from './log';

const imageminSimple = async ({ pattern }: CliArguments) => {
  try {
    const imagePaths = await globby([pattern, ...DEFAULT_PATTERN]);
    log(JSON.stringify(imagePaths, null, 2));
    const imageminPromise = imagePaths.map(imagePath =>
      imagemin([imagePath], path.dirname(imagePath), {
        plugins: DEFAULT_PLUGINS,
      }),
    );
    const files = await Promise.all(imageminPromise);
    log(`> Minify ${files.length} images successfully.`);
  } catch (error) {
    log(error);
    process.exit(1);
  }
};

export default imageminSimple;
