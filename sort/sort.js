const sort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = Math.floor(Math.random() * arr.length);
  const pivVal = arr[pivot];
  const rest = [...arr.slice(0, pivot), ...arr.slice(pivot + 1, arr.length)];

  let lower = [];
  let higher = [];

  for (let i = 0; i < rest.length; i++) {
    rest[i] > pivVal ? higher.push(rest[i]) : lower.push(rest[i]);
  }

  return [...sort(lower), pivVal, ...sort(higher)];
};

module.exports = sort;
