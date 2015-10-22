---
title: Search and display problem fixed
author: Josh Street
layout: post
permalink: /2004/12/31/search-and-display-problem-fixed/
categories:
  - General
tags:
  - PHP
  - search results
---
[Dale][1] was searching for some RSS stuff on this site, and discovered that he was only getting seven results (the same number as my default display for the front page) &#8212; and that the same problem existed with the month archive display. He thinks it used to work just fine, and I had thought it did, too, but I&#8217;m not really sure what I changed to break it. So, in a dodgy-ish patch, I&#8217;ve added next/previous page links to the bottom of each page. This works on search results, as well as monthly archives and the front page.

The code I&#8217;m using for these page links, just in case anyone&#8217;s interested, is as follow (obviously the CSS/formatting stuff is optional):

`<p style="margin:10px;background:#D3D3D3;color:#404040;"><?php posts_nav_link('  ', __('<span style="float:left">&laquo; Previous Page</span>'), __('<span style="float:right">Next Page &raquo;</span>')); ?></p>`

The essential PHP stuff only is:

`<?php posts_nav_link('  ', __('&laquo; Previous Page'), __('Next Page &raquo;')); ?>`

Hope this makes life easier!

<small>This is for the WordPress blogging system, and is used to add next and previous page links to the end of a document. Further information can be found on the WordPress wiki, on the article entitled &#8220;<a href="http://wiki.wordpress.org/TemplateTags">Template Tags</a>&#8220;.</small>

 [1]: http://blog.dalegroup.net/