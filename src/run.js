// @flow
import main from './interfaces/main';
import { imageminSimple } from './index';

const run = async () => {
  try {
    const cliArguments = main();
    await imageminSimple(cliArguments);
  } catch (error) {
    console.error(error); // eslint-disable-line
    process.exit(1);
  }
};

export default run;
