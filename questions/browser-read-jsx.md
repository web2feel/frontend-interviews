---
title: "Why can’t browsers read JSX?"
level: 1
category: "ReactJS"
---

Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.