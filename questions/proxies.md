---
title: 'What is proxy in javascript'
level: 3
category: 'JS'
---

Proxies enable custom behaviors for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation...).

For instance:

```
// make NaN the default value for getters
const handler = {
  get: (target, name) => name in target ? target[name] : NaN
};

const obj = new Proxy({}, handler);
obj.a = 1;
obj.b = 2;

console.log(obj.a) // 1
console.log(obj.b) // 2
console.log(obj.c) // NaN

```

`obj.c` evaluates to `NaN` (instead of the usual `undefined`) because of the special behavior defined in the Proxy's handler.
