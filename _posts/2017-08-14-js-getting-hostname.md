---
layout: post
comments: true
title: "Getting the hostname of a url in Javascript"
tags: [programming, javascript, front-end, technology]
img: ['1.jpg']
---

I was looking for ways of getting the hostname part of a given url. For my surprise, JS had a built-in feature to do that, as long as the link is within a **< a >** tag. So we have to create a temporary tag to hold the link, extract the hostname and get rid of it when we’re done.

```js
// JS function

$(document).ready(function() {
  $linkField = $('[name="form-link"]');
  $sourceField = $('[name="form-source"]');
  $linkField.keypress(function() {
    $tempA = document.createElement('a');
    $tempA.href = $linkField.val();
    $sourceField.val($tempA.hostname);
    $tempA.remove();
  });
});
```

[This snippet on Github Gist](https://gist.github.com/anazard/b3e70a21d58d7d48b04891fa5a4360f4)
