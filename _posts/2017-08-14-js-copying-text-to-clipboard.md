---
layout: post
title: "Copying text to clipboard in Javascript"
tags: [programming, javascript, front-end, technology]
img: ['4.jpg']
---

I was looking into ways to copy a given link to the clipboard upon clicking a button. JS has **document.execCommand(‘copy’)** for some operations of the same nature. Turns out this method only allows you to copy text that is currently selected, and you can only select text that’s in either a text input or textarea.

The solution I came up with consists in creating a temporary input in which we could enter the text, execute the copy command and get rid of it right after.

```html
<!-- Button -->

<button class="btn btn-default btn-copy" id="link'+row.id+'" formaction="'+ row.link +'">
  <i class="fa fa-copy"></i> Copy
</button>
```

```javascript
// JS function

$(document).ready(function() {
  $btnCopy = $('.btn-copy');
  $btnCopy.on('click', function(event) {
    copyToClipboard(event.target.id);
  });


  var copyToClipboard = function(linkId) {
    var $tempInput = $('<input>');
    $('body').append($tempInput);
    $linkText = $('#' + linkId).attr('formaction');
    $tempInput.val($linkText).select();
    document.execCommand('copy');
    $tempInput.remove();
  };
});
```

[This snippet on Github Gist](https://gist.github.com/anazard/d42354f45e172519c0be3cead34fe869)

PS: the copy buttons are dynamically generated for each row of the datatable I had on that page. This is why this snippet seems to be a bit more complex than what I showed above, but it’s just a matter of removing that logic and adapt to your use-case.
