/* eslint no-unused-expressions: 0 */
// @flow
import yargs from 'yargs';
import chalk from 'chalk';
import { version } from '../../package.json';
import { type CliArguments } from '../utils/type.flow';

const main = (): CliArguments => {
  const {
    _: [, pattern],
  } = yargs
    .usage(
      `Usage: ${chalk.green(
        '$0',
      )} <pattern> [options]\n<pattern>\t Glob pattern to specify files.`,
    )
    .demandCommand(1, 1, 'Error: Missing <command>')
    .strict()
    .example(`$0 '**/*.{jpg,png,JPG,PNG,svg,gif}'`, 'Simple example')
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

  return { pattern };
};

export default main;
