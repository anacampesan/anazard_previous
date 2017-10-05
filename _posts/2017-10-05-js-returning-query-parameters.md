---
layout: post
comments: true
title: "[Javascript] Returning Query Parameters"
tags: [programming, javascript, front-end, technology]
img: ['js.png']
excerpt_separator: <!--more-->
---

This function that returns the value of a query parameter or false when it's inexistent.
The trick is to track both starting and ending positions of the desired parameter, so that we're able to split it from the query and return its value.

```js
function getQueryParam(param) {
  // returns the query parameters portion from the url and gets rid of the ? at position [0]
	var query = window.location.search.substring(1);
	var startPos = query.indexOf(param);
	if (startPos == -1) {
		return false;
	}
	query = query.substring(startPos);

  // checks if the desired param is the last one in the query
	var endPos = (query.indexOf('&', startPos) == -1) ? query.indexOf('&')
                                                    : query.indexOf('&', startPos);
	var keyValue = query.substring(startPos, endPos);
	return keyValue.split('=')[1];
}
```

This is only of the many ways in which you can implement a similar functionality. Feel free to come up with new ones below!
