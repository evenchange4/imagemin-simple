// @flow
import yargs from 'yargs';
import chalk from 'chalk';
import { type ImageminArguments } from '../utils/type.flow';
import { DEFAULT_PLUGIN } from '../utils/constants';

const imagemin = (): ImageminArguments => {
  const {
    _: [, pattern],
    plugin,
  } = yargs
    .usage(
      `Usage: ${chalk.green(
        '$0',
      )} imagemin <pattern> [options]\n<pattern>\t Glob pattern to specify files.`,
    )
    .demandCommand(2, 'Error: Missing <pattern>')
    .strict()
    .options({
      plugin: {
        describe: `The list of plugins to use.`,
        type: 'array',
        default: DEFAULT_PLUGIN,
      },
    })
    .example(`$0 imagemin '**/*.{jpg,png,JPG,PNG,svg,gif}'`)
    .example(`$0 imagemin '**/*.png' --plugin pngquant`)
    .version(false)
    .alias('h', 'help')
    .locale('en')
    .fail((msg, err) => {
      if (err) throw err; // preserve stack
      console.error(chalk.red(msg)); // eslint-disable-line
      yargs.showHelp();
      process.exit(1);
    }).argv;

  return { pattern, plugin };
};

export default imagemin;
