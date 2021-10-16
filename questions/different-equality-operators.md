---
title: "What is the difference between the equality operators `==` and `===`?"
level: 1
category: "JS"
---

Triple equals (===) checks for strict equality, which means both the type and value must be the same.

Double equals (==) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.

In short, the '==' operator will compare for equality after doing any necessary type conversions but the '===' operator will not do any type conversion.

For example:

```javascript
let str2 = "2";
let int2 = 2;

console.log(" 2 === '2' is ", str2 === int2);
// output: " 2 === '2' is " false

console.log(" 2 == '2' is ", str2 == int2);
//output: " 2 == '2' is " true
```

Which one to choose?
If you don’t need the type conversion, always use the strict equality operator. The reason is because the abstract equality operator might produce some unexpected results. Most linters will also suggest you to change if you use '=='. To elaborate, '==' can be quite confusing and has odd rules. For example, "1" == true or "" == 0 will return true. For more peculiarities, take a look at the [Javascript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/).

Resources:
[codeahoy.com](https://codeahoy.com/javascript/2019/10/12/==-vs-===-in-javascript/)
[stackoverflow](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)
