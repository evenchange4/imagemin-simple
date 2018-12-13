// @flow
import { help, imagemin as imageminCli } from './clis/index';
import { imageminSimple } from './index';

const run = async () => {
  const subCommand: ?string = process.argv[2];

  try {
    switch (subCommand) {
      case 'imagemin': {
        const cliArguments = imageminCli();
        await imageminSimple(cliArguments);

        break;
      }

      case 'help':
      default: {
        help();
        break;
      }
    }
  } catch (error) {
    console.error(error); // eslint-disable-line
    process.exit(1);
  }
};

export default run;
