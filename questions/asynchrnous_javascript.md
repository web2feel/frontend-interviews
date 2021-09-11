---
title: "What is the difference between synchronous and asynchronous code in JavaScript?"
level: 3
category: "JS"
---

Synchronous means each operation must wait for the previous one to complete.

Asynchronous means an operation can occur while another operation is still being processed.

In JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as ```XMLHttpRequest``` or ```setTimeout```) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously.