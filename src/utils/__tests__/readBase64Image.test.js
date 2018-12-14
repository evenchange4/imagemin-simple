// @flow
import * as R from 'ramda';
import path from 'path';
import readBase64Image from '../readBase64Image';

jest.mock('sharp', () => () => ({
  metadata: async () => ({ format: 'png', width: 300, height: 200 }),
  resize: () => ({
    toBuffer: async () => ({
      toString: () => 'mock-toString',
    }),
  }),
}));

it('should return base64Image correctly', async () => {
  expect.assertions(2);

  const imagePath = path.resolve(
    process.cwd(),
    './test-content1/project1/images/ai-image.jpg',
  );
  const base64Image = await readBase64Image(imagePath);

  expect(R.omit(['imagePath'], base64Image)).toMatchSnapshot();
  expect(base64Image.imagePath).toContain(
    'test-content1/project1/images/ai-image.jpg',
  );
});
