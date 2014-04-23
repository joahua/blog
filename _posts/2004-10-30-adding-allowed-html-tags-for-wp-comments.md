---
title: Adding allowed HTML tags for WP comments
author: Josh Street
layout: post
permalink: /2004/10/30/adding-allowed-html-tags-for-wp-comments/
categories:
  - Geek
tags:
  - HTML
  - PHP
  - WordPress installation
---
I couldn&#8217;t find any easy answer to this question myself when I setup custom tags for commenting on this site a while back, and [Indranil][1] is trying to figure it out as well, so I figured I&#8217;d share a brief &#8220;how to&#8221; on the subject.<!--more-->

The default WordPress commenting tags allowed are `a`, `abbr`, `acronym`, `b`, `blockquote` `code`, `em`, `i`, `strike` and `strong`. For myself, and Indranil (and probably many other [WordPress][2] users), there is a desire to allow users more freedom in their commenting formatting: specifically, to allow the use of lists and list items.

Whilst this used to be possible with the (deprecated) `my-hacks.php` file, this is advised against as the &#8220;hacks&#8221; system has changed, and chances are that file will be gone in a few releases time. The easiest way to add permitted tags is to edit the file which does the processing, `kses.php`. Kses is described in the file header as being a &#8220;HTML/XHTML filter that only allows some elements and attributes&#8221; &#8212; and that&#8217;s what it does.

If you open this file, located in the wp-includes directory within your WordPress installation (full path to file should be `/wp-includes/kses.php`), and scroll down a little way, you should see a variable `$allowedtags`, with an array. (For me, it begins on line 17 of the file: yours may vary.)

By following the format tags are already listed there in, you can probably figure out how it works: for many, it&#8217;s just a matter of uncommenting the appropriate tags. I can&#8217;t recall if there are options for list tags in there already, I&#8217;m sorry: if you see lines which begin with

`//'li' => array(),` or  
`//'ol' => array(),` or  
`//'ul' => array(),`

then simply delete the preceding slashes (`//`). Save the file, and commenting with these tags is now permitted.

If the file didn&#8217;t include those commented out lines, then simply add

`&#39;li&#39; => array(),<br />
&#39;ol&#39; => array(),<br />
&#39;ul&#39; => array(),`

to the array, and save.

There you have it! Of course, it&#8217;s possible to permit attributes and the like &#8212; take a look at the anchor (`a`) part of the array for an example of that &#8212; but for lists, that&#8217;s mostly uneccessary (so far as I&#8217;ve seen, anyway).

 [1]: http://troidus.com/2004/10/29/version-2-explained/
 [2]: http://wordpress.org/