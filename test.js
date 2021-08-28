"use strict";

//@ts-ignore
require("./");

var fs = require("fs");

fs.readFile("--doesntexist--", "utf8", noop);
console.info("PASS: noop exists globally and... wait for it... does nothing");

fs.promises
  .readFile("--doesntexist--", "utf8")
  .catch(throwop)
  .catch(function (err) {
    if (!(err instanceof Error)) {
      throw new Error("throwop didn't throw!");
    }
  })
  //@ts-ignore
  .then(throwop)
  .catch(throwop)
  .catch(function (err) {
    throw new Error("throwop threw... nothing! why!?");
  });
console.info("PASS: throwop throws errors (but not false-y things)");

/** @type {?any} */
var bomb = {};
doop(
  /**
   * @param {string} bar
   * @param {string} baz
   */
  function (bar, baz) {
    //@ts-ignore
    var me = this;
    if (me !== bomb || "bar" !== bar || "baz" !== baz) {
      throw new Error(
        "doop didn't apply thisness / didn't have the right args"
      );
    }
    bomb = null;
    console.info(
      "PASS: doop calls the first arg, if it's a function, with thisness and args"
    );
  },
  ["bar", "baz"],
  bomb
);
if (bomb) {
  throw new Error("doop didn't disarm the bomb");
}

console.info("PASS");
