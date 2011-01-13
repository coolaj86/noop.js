node-noop
====

Provides a few global functions such as `noop`, `throwop`, and `doop`

    npm install noop
    require('noop');

API
====

`global.noop`
----

Does nothing

    function noop() {}

`global.throwop(err)`
----

Throws if `err` is defined

    function throwop(err) {
      if (err) {
        throw err;
      }
    }

`global.doop(callback)`
----

Calls `callback` or `noop`

    function doop(callback, args, context) {
      if ('function' === typeof callback) {
        callback.apply(context, args);
      }
    }
