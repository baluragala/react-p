let name = new String("bala krishna");

name[Symbol.iterator] = function () {
  return {
    next: function () {
      return {done: true}
    }
  }
};

function foreach(anyIterable) {
  let iterator = anyIterable[Symbol.iterator]();
  while (1) {
    let v = iterator.next();
    if (v.done)
      break;
    console.log(v.value)
  }
}

foreach(name);