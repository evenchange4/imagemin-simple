// @flow
import * as Modules from '../index';

it('should expose help functions', () => {
  expect(Modules).toHaveProperty('help');
});

it('should expose utils functions', () => {
  expect(Modules).toHaveProperty('imageminSimple');
});
