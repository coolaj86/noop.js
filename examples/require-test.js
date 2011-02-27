(function () {
  "use strict";

  require('noop');

  noop();
  throwop(null);
  doop();

  try {
    throwop(new Error('error'));
  } catch(e) {
    console.log('Pass: thrown');
  }

  doop(function (word) {
    console.log(word);
  }, ['Pass: hi']);
}());
