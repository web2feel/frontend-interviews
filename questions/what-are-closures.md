---
title: "What are closures"
level: 2
category: "JS"
---

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```js
const outerFun = (a) => {
  let b = 10;
  // inner func can use variable/parameter of outer funcion
  const innerFun = () => {
    let sum = a + b;
    console.log(sum);
  };
  return innerFun;
};
let inner = outerFun(5);
inner();
```
