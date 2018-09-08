# webpack-comment-import.macro

[![Build Status](https://travis-ci.org/stereobooster/webpack-comment-import.macro.svg?branch=master)](https://travis-ci.org/stereobooster/webpack-comment-import.macro) [![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square)](https://github.com/kentcdodds/babel-plugin-macros)

## Problem

When you use dynamic `import` in Webpack it will generate hard readable names for chunks (at least this is what it does in CRA), like `1.chunk.js`, `2.chunk.js`. To fix this you can use the magic comment `/* webpackChunkName: MyComponent */`, so you will get `MyComponent.chunk.js`, but this annoying to put this comment by hand every time. This babel macro exactly to fix this.

## Usage

Similar to dynamic `import` call:

```js
import wcImport from "webpack-comment-import.macro";

const asyncModule = wcImport("./MyComponent");
```

Will be converted to

```js
const asyncModule = import(/* webpackChunkName: MyComponent */ "./MyComponent");
```

## Credits

Based on [pveyes/raw.macro](https://github.com/pveyes/raw.macro).

## License

MIT
