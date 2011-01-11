function getGlobal() {
  return this;
}

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

  var global = getGlobal();
  global.noop = noop;
  global.throwop = throwop;
  global.doop = doop;
  /*
  module.exports = {
    noop: noop,
    throwop: throwop,
    doop: doop
  };
  */
  
  if ('undefined' === typeof provide) { provide = function() {}; }
  provide('noop');
}());
