/* eslint global-require: 0 */
// @flow
const mockCliArguments = {
  pattern: 'pattern',
  plugin: [
    'imagemin-jpegtran',
    'imagemin-pngquant',
    'imagemin-svgo',
    'imagemin-gifsicle',
  ],
};

it('should exec imageminSimple correctly', async () => {
  expect.assertions(1);

  const spy = jest.spyOn(global.console, 'log');
  // Note: Mock override
  jest.doMock('globby', () => async () => []);
  const imageminSimple = require('../imageminSimple').default;

  try {
    await imageminSimple(mockCliArguments);
  } catch (error) {
    expect(error.message).toBeUndefined();
  } finally {
    expect(spy.mock.calls[0][0]).toContain(`Minify 0 images successfully.`);
    spy.mockRestore();
  }
});

it('should exec imageminSimple correctly with files', async () => {
  expect.assertions(3);

  const spy = jest.spyOn(global.console, 'log');
  // Note: Mock override
  jest.doMock('globby', () => async () => ['file1.png', 'file2.gif']);
  const imageminSimple = require('../imageminSimple').default;

  try {
    await imageminSimple(mockCliArguments);
  } catch (error) {
    expect(error.message).toBeUndefined();
  } finally {
    expect(spy.mock.calls[0][0]).toContain(`file1.png`);
    expect(spy.mock.calls[0][0]).toContain(`file2.gif`);
    expect(spy.mock.calls[1][0]).toContain(`Minify 2 images successfully.`);
    spy.mockRestore();
  }
});

it('should exec imageminSimple with errors', async () => {
  expect.assertions(1);

  // Note: Mock override
  jest.doMock('globby', () => async () => {
    throw new Error('error');
  });
  const imageminSimple = require('../imageminSimple').default;

  try {
    await imageminSimple(mockCliArguments);
  } catch (error) {
    expect(error.message).toContain(`error`);
  }
});
