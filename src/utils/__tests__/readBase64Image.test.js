// @flow
import path from 'path';
import readBase64Image from '../readBase64Image';

it('should return base64Image correctly', async () => {
  const imagePath = path.resolve(
    process.cwd(),
    './test-content1/project1/images/ai-image.jpg',
  );
  const base64Image = await readBase64Image(imagePath);
  expect(base64Image).toMatchSnapshot();
});
