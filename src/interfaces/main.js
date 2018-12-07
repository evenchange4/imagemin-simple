// @flow
import yargs from 'yargs';
import chalk from 'chalk';
import { version } from '../../package.json';
import { type CliArguments } from '../utils/type.flow';
import { DEFAULT_PLUGIN } from '../utils/constants';

const main = (): CliArguments => {
  const {
    _: [pattern],
    plugin,
  } = yargs
    .usage(
      `Usage: ${chalk.green(
        '$0',
      )} <pattern> [options]\n<pattern>\t Glob pattern to specify files.`,
    )
    .demandCommand(1, 1, 'Error: Missing <command>')
    .strict()
    .options({
      plugin: {
        describe: `The list of plugins to use.`,
        type: 'array',
        default: DEFAULT_PLUGIN,
      },
    })
    .example(`$0 '**/*.{jpg,png,JPG,PNG,svg,gif}'`)
    .example(`$0 '**/*.png' --plugin imagemin-pngquant`)
    .alias('v', 'version')
    .alias('h', 'help')
    .version(version)
    .locale('en')
    .epilogue(
      'For more information go to https://github.com/evenchange4/imagemin-simple',
    )
    .fail((msg, err) => {
      if (err) throw err; // preserve stack
      yargs.showHelp();
    }).argv;

  return { pattern, plugin };
};

export default main;
