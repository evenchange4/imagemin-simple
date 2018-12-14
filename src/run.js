// @flow
import { help, imagemin, base64 } from './clis/index';
import { toImagemin, genBase64 } from './index';

const run = async () => {
  const subCommand: ?string = process.argv[2];

  try {
    switch (subCommand) {
      case 'imagemin': {
        const cliArguments = imagemin();
        await toImagemin(cliArguments);

        break;
      }

      case 'base64': {
        const cliArguments = base64();
        await genBase64(cliArguments);

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
