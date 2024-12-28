function foo(x) {
  if (x === null) {
    return 0;
  } else if (x > 10) {
    return x * 2;
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(12));  // Output: 24
console.log(foo(5));   // Output: 6
console.log(foo(undefined));//Output: NaN, should throw an error