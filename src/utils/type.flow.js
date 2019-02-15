// @flow

export type ImageminArguments = {
  pattern: string,
  plugin: Array<string>,
};

export type Base64Arguments = {
  pattern: string,
  outputFile: string,
  cwd?: string,
};

export type Base64Image = {
  imagePath: string,
  width: number,
  height: number,
  format: string,
  base64: string,
};

export type Metadata = {
  format: string, // 'jpeg',
  width: number, // 1000,
  height: number, // 449,
  space: string, // 'srgb',
  channels: number, // 3,
  depth: string, // 'uchar',
  chromaSubsampling: string, // '4:2:0',
  isProgressive: boolean, //  false,
  hasProfile: boolean, // false,
  hasAlpha: boolean, // false
};
