---
title: "What is NaN in JavaScript"
level: 1
category: "JS"
---

NaN is a property of the global object. In other words, it is a variable in global scope.

The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it. It is rather rare to use NaN in a program.

There are five different types of operations that return NaN:

- Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
- Math operation where the result is not a real number (e.g. Math.sqrt(-1))
- Operand of an argument is NaN (e.g. 7 \*\* NaN)
- Indeterminate form (e.g. 0 \* Infinity, or undefined + undefined)
- Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)

## Example:

```javascript
function sanitise(x) {
  if (isNaN(x)) {
    return NaN
  }
  return x
}

console.log(sanitise("1"))
// expected output: "1"

console.log(sanitise("NotANumber"))
// expected output: NaN
```

Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
