---
title: "Ternary Operator"
level: 2
category: "JS"
---

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?) , then an expression to execute if the condition is truthy followed by a colon (:) , and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.

```js
let isLoggedIn = true;

console.log(isLoggedIn ? "Welcome User" : "Please Login"); // Output - Welcome User

// Equivalent to :

if (isLoggedIn) {
  console.log("Welcome User");
} else {
  console.log("Please Login");
}

// Output - Welcome User
```
