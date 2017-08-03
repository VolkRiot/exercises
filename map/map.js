function map(arr, cb) {
  var scope = this;

  if (arr.length === 0) {
    return arr;
  }

  var final = [];

  arr.forEach((elm, i, array) => {
    final.push(cb.call(scope, elm, i, array));
  });
  return final;
}

// var ctx;
// var arr = [5];
//
// map(
//   arr,
//   function() {
//     ctx = this;
//   },
//   3
// );
//
// assert.equal(ctx, 3);

module.exports = map;
