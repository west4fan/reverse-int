module.exports = function reverse (n) {
  let num = Math.sign(n)*parseInt(n.toString().split('').reverse().join(''));

  return Math.abs(num);
}
