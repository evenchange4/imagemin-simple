// @flow
import fs from 'fs';
import * as R from 'ramda';
import globby from 'globby';
import { DEFAULT_PATTERN } from './constants';
import { type Base64Arguments, type Base64Image } from './type.flow';
import log from './log';
import readBase64Image from './readBase64Image';

const genBase64 = async ({ pattern, outputFile }: Base64Arguments) => {
  try {
    const imagePaths = await globby([pattern, ...DEFAULT_PATTERN]);
    if (imagePaths.length > 0) log(JSON.stringify(imagePaths, null, 2));

    // Note: 1. gen base64 images and metadata
    const base64Imgs: Base64Image = await Promise.all(
      imagePaths.map(readBase64Image),
    );

    // Note: 2. output json format
    const results: { [string]: Base64Image } = R.indexBy(
      R.prop('imagePath'),
      base64Imgs,
    );
    fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
    log(
      `> Generate ${imagePaths.length} images in base64 format successfully.`,
    );
  } catch (error) {
    throw error;
  }
};

export default genBase64;