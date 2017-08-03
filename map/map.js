'use strict';

const map = (arr, cb) => {
  if (arr.length === 0) {
    return arr;
  }

  var final = [...arr];

  for (let i = 0; i < arr.length; i++) {
    final[i] = cb.call(this, arr[i], i, arr);
  }

  return final;
};

var ctx;
var arr = [5];

map(
  arr,
  function() {
    ctx = this;
  },
  3
);

console.log(ctx);

module.exports = map;
