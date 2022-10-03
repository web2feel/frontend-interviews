---
title: "What is Optional Chaining?"
level: 2
category: "JS"
---
The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
```js
let user = {
  name: "John Doe",
  isLoggedIn: true,
  email: "john@example.com",
  address: {
    city: "San Francisco",
  },
};

user?.address?.city;
//Output : San Francisco

user?.address?.country;
//Output : Undefined

user.address.country;
//Output : Uncaught TypeError : Cannot read property 'country' of undefined
```
