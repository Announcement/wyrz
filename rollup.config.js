import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';
// import builtins from 'rollup-plugin-node-builtins';
import * as path from 'path';

export default {
  entry: 'src/main.js',
  format: 'cjs',
  moduleName: 'Wyrz',
  sourceMap: true,
  external: [
    // "fs",
    // "http",
    // "path",
    // "readline",
    // "chalk",
    // "commander",
    // "highland",
    // "cluster"
  ],
  plugins: [
    sourcemaps(),
    json(),
    // builtins(),
    babel({
      babelrc: false,
      "presets": [
        [
          "env",
          {
            "modules": false,
            "targets": {
              "node": "current"
            }
          }
        ]
      ],
      "plugins": ["external-helpers"]
    })
  ],
  dest: 'bin/main.js'
};
