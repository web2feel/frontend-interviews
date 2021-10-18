---
title: 'How to add drag and drop functionality to the hmtl element?'
level: 1
category: 'JS'
---

Drag and Drop interfaces allow applications to use drag and drop features in browsers. This means the user can select elements with their mouse, drag the elements to a droppable element, and drop the element by releasing the mouse button.

Before dragging and dropping, an elements attribute must be set so it's allowed to be dragged, and the `ondragstart` global event handler must be added.

```html
<div draggable="true" ondragstart="dragstartHandler(event);"></div>
```

```js
function dragstartHandler(ev) {
  console.log('Start dragging...');
}
```
