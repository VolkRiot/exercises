const binary = (arr, string) => {
  if (arr.length < 2) {
    return arr[0] === string ? 0 : -1;
  }

  let array = arr.sort();
  let midVal = Math.floor(array.length / 2);

  while (array.length > 1) {
    if (string < array[midVal]) {
      array = array.slice(0, midVal);
      midVal = Math.floor(array.length / 2);
    } else {
      array = array.slice(midVal + 1, array.length);
      midVal = Math.floor(array.length / 2);
    }

    if (array[midVal] === string) {
      return arr.indexOf(string);
    }
  }

  return -1;
};

module.exports = binary;
