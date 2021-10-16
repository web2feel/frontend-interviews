---
title: "What is the difference between the postfix `i++` and prefix `++i` increment operators?"
level: 1
category: "JS"
---

Both increment the variable value by 1. The difference is what they evaluate to.

The postfix increment operator evaluates to the value before it was incremented.

```
let i = 0
i++ // evaluates to 0
```

The prefix increment operator evaluates to the value after it was incremented.

```
let i = 0
++i // evaluates to 1
```
