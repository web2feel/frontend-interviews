---
title: "What is Data List Tag?"
level: 2
category: "HTML"
---

Allows to attach a list of suggestions to a text input element. As soon as the user begins to type in the text field, the list of suggestions appears and the user can choose from the suggestions with the mouse.

```html
<p>Enter your favorite browser name:</p>
<input type="text" list="browsers" name="favorite_browser" />
<datalist id="browsers">
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```
