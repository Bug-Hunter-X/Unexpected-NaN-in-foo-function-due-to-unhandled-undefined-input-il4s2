# Unexpected NaN Result in JavaScript Function

This repository demonstrates a common JavaScript error: unexpected NaN results due to unhandled undefined input in a function.

## The Bug

The `foo` function is designed to handle `null` and numbers greater than 10, and numbers less than or equal to 10. However, it fails to explicitly handle the case where the input `x` is `undefined`.  This results in `NaN` (Not a Number) being returned instead of a more informative error.

## The Solution

The solution involves adding explicit error handling for the `undefined` case, either by throwing an error or providing a default return value that clearly indicates the problem.

## How to reproduce

1. Clone this repository.
2. Run `bug.js` to observe the unexpected NaN output when calling foo(undefined).
3. Run `bugSolution.js` to see the corrected function.