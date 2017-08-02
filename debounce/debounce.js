function debounce(func, time) {
  let timeout;

  return function() {
    // var context = this;
    // var args = arguments;

    var funcRef = () => {
      timeout = null;
      func.apply(this, arguments);
      started = false;
    };

    clearTimeout(timeout);
    timeout = setTimeout(funcRef, time);
  };
}

// function debounce(func, wait) {
//   var timeout;
//   return function() {
//     var context = this,
//       args = arguments;
//
//     var later = function() {
//       timeout = null;
//       func.apply(context, args);
//     };
//     // var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     // if (callNow) func.apply(context, args);
//   };
// }

module.exports = debounce;
