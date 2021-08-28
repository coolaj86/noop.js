function noop() {
  // do nothing
}

/**
 * @param {Error} err
 */
function throwop(err) {
  if (err) {
    throw err;
  }
}

/**
 * @param {function} cb
 * @param {Array<any>} [args]
 * @param {any} [context]
 */
function doop(cb, args, context) {
  if ("function" === typeof cb) {
    return cb.apply(context, args);
  }
}

(function () {
  "use strict";

  var _myGlobal;
  if ("undefined" !== typeof globalThis) {
    _myGlobal = globalThis;
  } else if ("undefined" !== typeof global) {
    _myGlobal = global;
  } else {
    _myGlobal = window;
  }
  _myGlobal.noop = noop;
  _myGlobal.throwop = throwop;
  _myGlobal.doop = doop;
})();
