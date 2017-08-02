function debounce(func, time) {
  let timeout;

  return function() {
    var funcRef = () => {
      timeout = null;
      func.apply(this, arguments);
      started = false;
    };

    clearTimeout(timeout);
    timeout = setTimeout(funcRef, time);
  };
}

module.exports = debounce;
