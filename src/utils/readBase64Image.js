// @flow

import sharp from 'sharp';
import { type Metadata, type Base64Image } from './type.flow';

const RESIZE_WIDTH = 30;

const readBase64Image = async (imagePath: string): Promise<Base64Image> => {
  const image = sharp(imagePath);
  const { format, width, height }: Metadata = await image.metadata();
  const buffer = await image.resize(RESIZE_WIDTH).toBuffer();

  return {
    imagePath,
    width,
    height,
    format,
    base64: `data:image/${format};base64,${buffer.toString('base64')}`,
  };
};

export default readBase64Image;
