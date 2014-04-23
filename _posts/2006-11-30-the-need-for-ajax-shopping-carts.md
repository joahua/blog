---
title: The Need for AJAX shopping carts
author: Josh Street
layout: post
permalink: /2006/11/30/the-need-for-ajax-shopping-carts/
categories:
  - Design
  - Geek
tags:
  - AJAX
---
I always thought the [script.aculo.us drag&#8217;n&#8217;drop-shop demo][1] was stupid. It seemed illogical and only really practical for stupid puncy little shops with five or ten products &#8211; certainly, with everything listed on the same page.

Then it hit me &#8212; this is perfect for shuffling documents around. [CYIADA (see-uh-da)][2], is (partially) about selling documents and resources electronically &#8212; and it does that with pre-paid credits. This, of course, means that there doesn&#8217;t have to be any cumbersome checkout stage. Better than [Shopify][3] (excellent though that is), potentially.

Drag documents you like when browsing into a floating &#8220;My Resources&#8221; bin on the side of the page, AJAX is used to throw up a &#8220;confirm purchase&#8221; DIV which presents simple &#8220;yes&#8221;/&#8221;oops&#8221; options, and keep moving. It&#8217;d be trivial to modify the confirm view to have a &#8220;purchase for my whole group&#8221; checkbox (which would, of course, change the cost), too. Anything beyond that might be too complex.

Of course, there would be graceful degradation for those without JavaScript turned on&#8230; because someone has to ruin the party :P

 [1]: http://demo.script.aculo.us/shop
 [2]: /blog/2006/11/30/what-josh-does-at-youthworks
 [3]: http://shopify.com/