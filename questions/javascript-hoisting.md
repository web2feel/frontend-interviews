---
title: "What is hoisting in JavaScript"
level: 3
category: "JS"
---

JavaScript Hoisting refers to the process whereby the interpreter allocates memory for variable and function declarations prior to execution of the code. Declarations that are made using var are initialized with a default value of undefined. Declarations made using let and const are not initialized as part of hoisting.

Conceptually hoisting is often presented as the interpreter "splitting variable declaration and initialization, and moving (just) the declarations to the top of the code". This allows variables to appear in code before they are defined. Note however, that any variable initialization in the original code will not happen until the line of code is executed.

## Examples:

```javascript
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tiger");

/*
The result of the code above is: "My cat's name is Tiger"
*/
```

The above code snippet is how you would expect to write the code for it to work. Now, let's see what happens when we call the function before we write it:

```javascript
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Chloe"
*/
```

Even though we call the function in our code first, before the function is written, the code still works, because this is how context execution works in JavaScript.

Hoisting works well with other data types and variables. The variables can be initialized and used before they are declared.

Source: [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
