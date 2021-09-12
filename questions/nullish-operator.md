---
title: "What is Nullish coalescing operator ?"
level : 3
category: "JS"
---
The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is ```null``` or ```undefined```, and otherwise returns its left-hand side operand.

```js
let user;
alert(user ?? "Anonymous"); // Anonymous (user not defined)
```

```js
let user = "John";
alert(user ?? "Anonymous"); // John (user defined)
```