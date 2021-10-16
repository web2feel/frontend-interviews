---
title: "What are the different ways to include CSS in webpages?"
level: 1
category: "CSS"
---

1. **External Style Sheet:** An external file linked to your HTML document: Using link tag, we can link the style sheet to the HTML page.

```
<link rel="stylesheet" type="text/css" href="style.css" />

```

2. **Embed CSS with a style tag:** A set of CSS styles entered directly on your HTML page.

```
<style type="text/css">

/*CSS code goes here*/

</style>
```

3. **Inline CSS:** Style can be added directly to the HTML element using a style tag.

```
<h2 style="color:red;">Danger</h2>

```

4. **@import rule:** The `@import` rule allows you to import a style sheet into another style sheet. The `@import` rule must be at the top of the document.

```
@import "path/to/style.css";

```
