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
