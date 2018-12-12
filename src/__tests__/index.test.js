// @flow
import * as Modules from '../index';

it('should expose main functions', () => {
  expect(Modules).toHaveProperty('main');
});

it('should expose utils functions', () => {
  expect(Modules).toHaveProperty('imageminSimple');
});
