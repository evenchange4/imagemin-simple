# Imagemin-simple

> Replace images with minified one.

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Usage

### imagemin

```bash
$ npx imagemin-simple imagemin '**/*.{jpg,png,JPG,PNG,svg,gif}'
```

### base64

```bash
$ npx imagemin-simple base64 '**/*.{jpg,png,JPG,PNG}' --output-file base64.json
```

<details>
<summary>output</summary>

```json
{
  "test-content1/project1/images/ai-image.jpg": {
    "imagePath": "test-content1/project1/images/ai-image.jpg",
    "width": 1000,
    "height": 449,
    "format": "jpeg",
    "base64": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANAB4DASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAQYEBQcI/8QAJhAAAgEDAQcFAAAAAAAAAAAAAQIDAAQRBQYSExQxQVEhUpHB8P/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGxEBAAICAwAAAAAAAAAAAAAAAQACAyESIjH/2gAMAwEAAhEDEQA/AOfo7aQIjvjhsxXI81ZPFHDDGzMDxBld3xQtMSo0AAXcQEP1J7/dSb6AchGSSRGhKgeg64pldSPc5ewaPcRW2qWdxMhliimSRo/cAwJFOW3OoW9/rIutMjaOFkwyFcFWJzj93pCsXIniYdVYH4rQNubjltH0iZYoTLcRJK7lBvElT4pGN0sn5zsAT//Z"
  },
  ...
}

```

</details>

## API

### `imagemin-simple -h`

```bash
imagemin-simple <command>

Commands:
  imagemin-simple imagemin  The imagemin command.
  imagemin-simple base64    Turn image into base64.

Options:
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

For more information go to https://github.com/evenchange4/hsu-scripts
```

### `imagemin-simple imagemin -h`

```bash
Usage: imagemin-simple imagemin <pattern> [options]
<pattern> Glob pattern to specify files.

Options:
  --plugin    The list of plugins to use.
                    [array] [default: ["jpegtran","pngquant","svgo","gifsicle"]]
  -h, --help  Show help                                                [boolean]
                                       [boolean]

Examples:
  imagemin-simple imagemin '**/*.{jpg,png,JPG,PNG,svg,gif}'
  imagemin-simple imagemin '**/*.png' --plugin pngquant
```

### `imagemin-simple base64 -h`

```bash
Usage: imagemin-simple base64 <pattern> [options]
<pattern> Glob pattern to specify files.

Options:
  --output-file  The output json file.       [string] [default: "./base64.json"]
  -h, --help     Show help                                             [boolean]

Examples:
  imagemin-simple base64 '**/*.{jpg,png,JPG,PNG}'
  imagemin-simple base64 '**/*.{jpg,png,JPG,PNG}' --output-file results.json
```

## Development

- node 11.4.0
- yarn 1.12.3

```bash
$ yarn install --pure-lockfile
```

## Test

```bash
$ yarn run build
$ yarn run flow-coverage
$ yarn run test:watch
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
