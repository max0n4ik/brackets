// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
module.exports = function check(str, brack) {
  var arr2 = str.split('')
  for (let z = 0; z < brack.length; z++) {
    for (let x = 0; x < brack[z].length; x++) {
      for (let y = 0; y < str.split('').length; y++) {
        if (arr2[y] === brack[z][1] && arr2[y + 1] === brack[z][0]) {
          return false
        } else {
          var arr = str.replaceAll(brack[z][x], 1)
          str = arr
        }
      }
    }
  }
  var sum = arr.split('').map(Number).reduce((partialSum, a) => partialSum + a, 0);
  return (sum % 2 == 0)
}
// console.log(check('())(', config1))

// 
