[![Build Status](https://travis-ci.org/hi-ogawa/typescript_kopt.svg?branch=master)](https://travis-ci.org/hi-ogawa/typescript_kopt)

# Kopt algorithm written in Typescript

Sub goal:

- javascript library development with typescript, testing, linting, debugging

# Usage

```
$ npm install --save kopt
```

```
var Kopt = require('Kopt');

// verteces
var vs = [
  [0, 0],
  [1, 4],
  [2, 2],
  [3, 2],
  [3, 4],
  [6, 0],
  [7, 3],
  [8, 4],
  [9, 0]
];

// distance function
function f(u, v) {
  return Math.sqrt(Math.pow(u[0] - v[0], 2) + Math.pow(u[1] - v[1], 2));
}

console.log(Kopt.two(Kopt.mkMatrix(vs, f)))
  // => [ 0, 1, 4, 6, 7, 8, 5, 3, 2, 0 ]
```

# Development

```
$ npm install
$ node_modules/.bin/typings install
$ npm start # run tsc, tslint, mocha (normal and debug), node-inspector from node-foreman
```

Debugger is available at http://127.0.0.1:8080/debug?port=5858.

# Release

```
$ npm run release
```
