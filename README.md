Daplie is Taking Back the Internet!
--------------

[![](https://daplie.github.com/igg/images/ad-developer-rpi-white-890x275.jpg?v2)](https://daplie.com/preorder/)

Stop serving the empire and join the rebel alliance!

* [Invest in Daplie on Wefunder](https://daplie.com/invest/)
* [Pre-order Cloud](https://daplie.com/preorder/), The World's First Home Server for Everyone

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
