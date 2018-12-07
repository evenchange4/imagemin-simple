# Imagemin-simple

> Replace images with minified one.

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Usage

```bash
$ npx imagemin-simple '**/*.{jpg,png,JPG,PNG,svg,gif}'
```

## API

```bash
$ npx imagemin-simple -h

Usage: imagemin-simple <pattern> [options]
<pattern> Glob pattern to specify files.

Options:
  --plugin       The list of plugins to use.                   [array] [default:
  ["imagemin-jpegtran","imagemin-pngquant","imagemin-svgo","imagemin-gifsicle"]]
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

Examples:
  imagemin-simple '**/*.{jpg,png,JPG,PNG,svg,gif}'
  imagemin-simple '**/*.png' --plugin imagemin-pngquant

For more information go to https://github.com/evenchange4/imagemin-simple
```

## Development

- node 11.3.0
- yarn 1.12.3
- react >= 16

```bash
$ yarn install --pure-lockfile
```

## Test

```bash
$ yarn run build
$ yarn run flow-coverage
$ yarn run format
$ yarn run eslint
```

## Publish

```bash
$ npm version patch
$ git push
$ npm run changelog
```

---

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.
- Pull requests must be accompanied by passing automated tests.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

[build-badge]: https://travis-ci.com/evenchange4/imagemin-simple.svg?branch=master
[build]: https://travis-ci.com/evenchange4/imagemin-simple
[npm-badge]: https://img.shields.io/npm/v/imagemin-simple.svg?style=flat-square
[npm]: https://www.npmjs.org/package/imagemin-simple
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/imagemin-simple.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/imagemin-simple?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/imagemin-simple.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/imagemin-simple.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
