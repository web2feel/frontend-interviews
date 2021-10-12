---
title: "What are arrow functions?"
level: 1
category: "JS"
---

Arrow functions were introduced in ES6, provides a concise way to write functions in JavaScript.

```
let multiply = (x, y) => x * y;
console.log(multiply(3, 2)); // 6;
```

The typeof operator returns function indicating the type of arrow function.

```
console.log(typeof add); // function
```

The arrow function is also an instance of the Function type as shown in the following example:

console.log(add instanceof Function); // true

In the arrow function, the this, arguments, super, new.target are lexical. It means that the arrow function uses these variables (or constructs) from the enclosing lexical scope. An arrow function cannot be used as a function constructor. If you use the new keyword to create a new object from an arrow function, you will get an error. The value of this inside arrow functions is not dependent on how they are invoked or how they are defined.It depends only on its enclosing context.
