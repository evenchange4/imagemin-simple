// @flow
import * as constants from '../constants';

it('should return constants correctly', () => {
  expect(constants).toMatchSnapshot();
});
