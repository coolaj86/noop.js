# node-noop

Provides a few global functions such as `noop`, `throwop`, and `doop`

```bash
npm install noop@v1
```

```js
require("noop");
```

# Features

- [x] Works with Promises and Thunks
- [x] Faster than `Object` (always `true`-y)
- [x] More predictable than `Boolean` (sometimes `false`-y)
- [x] Linted with TypeScript, JSHint, and Prettier

# API

## `global.noop`

Does nothing

```js
function noop() {}
```

## `global.throwop(err)`

Throws if `err` is `true`-y

```js
function throwop(err) {
  if (err) {
    throw err;
  }
}
```

## `global.doop(callback)`

Calls `callback` or `noop`

```js
function doop(callback, args, context) {
  if ("function" === typeof callback) {
    callback.apply(context, args);
  }
}
```

Similar function signature to `setTimeout`.

# LICENSE

MIT OR CC0-1.0 (Public Domain)

Written in 2011 by AJ ONeal <coolaj86@gmail.com> \
To the extent possible under law, the author(s) have dedicated all copyright \
and related and neighboring rights to this software to the public domain \
worldwide. This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with \
this software. If not, see <https://creativecommons.org/publicdomain/zero/1.0/>.
