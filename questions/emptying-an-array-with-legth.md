---
title: "What is the value of `clothes[0]`
```
const clothes = ['jacket', 't-shirt']; 
clothes.length = 0; clothes[0]; // => ???
```
"
level: 2
category: "JS"
---

Answer is `undefined`

length property of the array object has a special behavior:

Reducing the value of the length property has the side-effect of deleting own array elements whose array index is between the old and new length values.

As result when JavaScript executes clothes.length = 0, all clothes items are deleted.

clothes[0] is undefined, because clothes array has been emptied.