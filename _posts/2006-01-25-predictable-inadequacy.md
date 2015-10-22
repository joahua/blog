---
title: Predictable inadequacy
author: Josh Street
layout: post
permalink: /2006/01/25/predictable-inadequacy/
categories:
  - General
tags:
  - DOM
  - Mac
---
The wonderful thing about IE/Win is you always know where you stand. Its foibles are comprehensibly documented, and fixes for many issues are available to those who seek them. Firefox 1.0.x Mac, however, is anything but thoroughly documented. My latest gripe? Floats, of all things. You&#8217;d think we&#8217;d have them sorted and worked out properly by now, but apparently not. Opera, IE, Safari and Firefox Win (and Firefox Mac/1.5.x) all behave perfectly, but Firefox Mac decides it&#8217;s not interested. Unless, of course, I modify the properties using the DOM and then set back to whatever it *had* been&#8230; in which case it displays as expected. Clearly, it&#8217;s a render bug rather than an outright misinterpretation of the specs, but annoying nonetheless. Not in the least because there is very little information about it available. Grr.