---
title: "What is Context?"
level: 2
category: "ReactJS"
---

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.

```js
const {Provider, Consumer} = React.createContext(defaultValue)
```