module.exports = {
  add
};

function add(a, b) {
  if (a && b) {
    return a + b;
  } else if (a || b) {
    if (a) {
      return a;
    } else {
      return b;
    }
  } else {
    return 0;
  }
}
