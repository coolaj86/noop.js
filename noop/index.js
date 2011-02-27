var provide = provide || function () {},
  global = this;
(function () {
  "use strict";

  function noop() {
    // do nothing
  }

  function throwop(err) {
    if (err) {
      throw err;
    }
  }

  function doop(cb, args, context) {
    if('function' === typeof cb) {
      return cb.apply(context, args);
    }
  }

  global.noop = noop;
  global.throwop = throwop;
  global.doop = doop;
  
  provide('noop');
}());
