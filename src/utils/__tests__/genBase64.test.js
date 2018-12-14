// @flow
import path from 'path';
import fsJson from 'fs-extra/lib/json';
import genBase64 from '../genBase64';

jest.mock('../readBase64Image', () => async () => ({
  base64: 'mock-readBase64Image-return-base64',
  imagePath: 'mock-readBase64Image-return-imagePath',
}));

it('should return base64 json correctly', async () => {
  const pattern = path.resolve(process.cwd(), '**/*.{jpg,png,JPG,PNG}');
  const outputFile = path.resolve(
    process.cwd(),
    'node_modules/.cache/geBase64.test.json',
  );
  const spy = jest.spyOn(fsJson, 'writeJson');

  await genBase64({ pattern, outputFile });
  expect(spy.mock.calls).toMatchSnapshot();
});
