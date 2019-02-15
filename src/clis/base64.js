// @flow
import yargs from 'yargs';
import chalk from 'chalk';
import { type Base64Arguments } from '../utils/type.flow';
import { DEFAULT_OUTPUT_FILE } from '../utils/constants';

const base64 = (): Base64Arguments => {
  const {
    _: [, pattern],
    outputFile,
    cwd,
  } = yargs
    .usage(
      `Usage: ${chalk.green(
        '$0',
      )} base64 <pattern> [options]\n<pattern>\t Glob pattern to specify files.`,
    )
    .demandCommand(2, 'Error: Missing <pattern>')
    .strict()
    .options({
      'output-file': {
        describe: `The output json file.`,
        nargs: 1,
        type: 'string',
        default: DEFAULT_OUTPUT_FILE,
      },
      cwd: {
        describe: `Set current working directory.`,
        type: 'string',
      },
    })
    .example(`$0 base64 '**/*.{jpg,png,JPG,PNG}'`)
    .example(`$0 base64 '**/*.{jpg,png,JPG,PNG}' --output-file results.json`)
    .example(`$0 base64 '**/*.png' --cwd './docs'`)
    .version(false)
    .alias('h', 'help')
    .locale('en')
    .fail((msg, err) => {
      if (err) throw err; // preserve stack
      console.error(chalk.red(msg)); // eslint-disable-line
      yargs.showHelp();
      process.exit(1);
    }).argv;

  return { pattern, outputFile, cwd };
};

export default base64;
