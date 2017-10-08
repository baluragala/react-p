let x = 3;
//hoisting
function randomize(flag) {
  if (flag) {
    let x = Math.random();
    return x;
  }
  return x;
}


var result = randomize(false);
console.log(result);