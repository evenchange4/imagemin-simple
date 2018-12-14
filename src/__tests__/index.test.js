// @flow
import * as Modules from '../index';

it('should expose clis functions', () => {
  expect(Modules).toHaveProperty('help');
  expect(Modules).toHaveProperty('base64');
});

it('should expose utils functions', () => {
  expect(Modules).toHaveProperty('toImagemin');
  expect(Modules).toHaveProperty('genBase64');
  expect(Modules).toHaveProperty('readBase64Image');
});
