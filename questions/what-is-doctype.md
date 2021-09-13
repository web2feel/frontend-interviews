---
title: "What does a ```<DOCTYPE html>``` do?"
level: 1
category: "HTML"
---

A DOCTYPE is always associated to a ```DTD``` ( Document Type Definition ). A DTD defines how documents of a certain type should be structured (i.e. a ```button``` can contain a ```span``` but not a ```div```), whereas a DOCTYPE declares what DTD a document supposedly respects (i.e. this document respects the HTML DTD). For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the HTML specifications your document respects.

Once a user agent has recognized a correct DOCTYPE, it will trigger the ```no-quirks mode``` matching this DOCTYPE forreading the document. If a user agent doesn't recognize a correct DOCTYPE, it will trigger the ```quirks mode```.

