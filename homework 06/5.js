function repeat(f, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(f());
  }
  return result;
}
function random() {
  return Math.floor(Math.random() * 10)
}
console.log(repeat(random, 10));