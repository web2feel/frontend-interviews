---
title: "What is JSON and its common operations "
level : 2
category: "JS"
---
JSON is a text-based data format following JavaScript object syntax, which was popularized by ```Douglas Crockford```. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json

**Parsing**: Converting a string to a native object
```js
JSON.parse(text)
```

**Stringification**: converting a native object to a string so it can be transmitted across the network
```js
JSON.stringify(object)
```