// @flow
import path from 'path';
import * as fs from 'fs-extra';
import fsJson from 'fs-extra/lib/json';
import * as R from 'ramda';
import globby from 'globby';
import { DEFAULT_PATTERN } from './constants';
import { type Base64Arguments, type Base64Image } from './type.flow';
import log from './log';
import readBase64Image from './readBase64Image';

const genBase64 = async ({
  pattern,
  outputFile,
  cwd = process.cwd(),
}: Base64Arguments) => {
  try {
    const imagePaths = await globby([pattern, ...DEFAULT_PATTERN], {
      absolute: true,
      cwd,
    });
    if (imagePaths.length > 0) log(JSON.stringify(imagePaths, null, 2));

    // Note: 1. gen base64 images and metadata
    const base64Images: Array<Base64Image> = await Promise.all(
      imagePaths.map(readBase64Image),
    );
    // Note: resolve path relative to cwd
    const base64ImagesWithCWD = base64Images.map(base64Image => ({
      ...base64Image,
      imagePath: path.relative(cwd, base64Image.imagePath),
    }));

    // Note: 2. output json format $FlowFixMe
    const results: { [string]: Base64Image } = R.indexBy(
      R.prop('imagePath'),
      base64ImagesWithCWD,
    );
    fs.ensureFileSync(outputFile);
    fsJson.writeJson(outputFile, results);
    log(
      `> Generate ${imagePaths.length} images in base64 format successfully.`,
    );
  } catch (error) {
    throw error;
  }
};

export default genBase64;
