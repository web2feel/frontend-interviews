---
title: "How to find largest among 2 numbers without using ```if``` ?"
level : 2
category: "JS"
---
You can ```ternary operator``` for this.
The syntax of ternary operator is
```js
condition ? <statement if true> : <statement if false>
```
In this case 
The first number is 20 and the second number is 60
Here the code is like this..
```js
function findthelargest(num1,num2){
    return(num1>num2 ? num1 : num2)
}
console.log(findthelargest(20,60))
```