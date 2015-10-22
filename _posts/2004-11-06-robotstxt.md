---
title: Robots.txt
author: Josh Street
layout: post
permalink: /2004/11/06/robotstxt/
categories:
  - General
tags:
  - Apache
  - PHP
  - Search engine
  - search engine counts
  - search engines
  - web site directory
---
I&#8217;ve been racking up a few too many `404`&#8216;s of late, which I think is due to hits on my `robots.txt` file falling flat on their face (ooh, alliteration!) &#8212; this means that search engines are looking for this page, and getting errors happening. Reduce your `404`&#8216;s today, and let search engines use their time (and your bandwidth) more efficiently!<!--more-->

`robots.txt` is the first file requested by a search engine (or any other *robot*) as it begins to spider a website. You can use this file to (theoretically) allow or disallow all search engines, or specific search engines, access to certain pages of your website. Each spider should have its own unique identifier, or user-agent string, which can be used to apply specific rules to it in a robots.txt file.

Personally, that&#8217;s of little relevance to me: blanket rules seem to work quite nicely. `robots.txt` files should be placed in the root of your web site directory &#8212; so, in the case of this website, the appropriate place to locate it is <http://www.joahua.com/robots.txt>.

With [WordPress][1], the blogging software in use here, there are some files which spiders have absolutely no need or reason to access &#8212; this should not only result in bandwidth reductions, but also in (possible) security improvements.

My `robots.txt` file, as of around 4:30pm today, looks like this:

`User-agent: *
Disallow: /cgi-bin/
Disallow: /blog/wp-comments-post.php
Disallow: /blog/wp-login.php
Disallow: /blog/wp-register.php`

The contents of it are fairly self-explanatory, I think, but basically this stops search engines from looking in my cgi-bin directory, and from hitting the comment posting page, or trying to login to my administration area for WordPress.

Whether a bad hit on robots.txt from a search engine counts as a `404` error with Awstats, I&#8217;m uncertain: at any rate, the number of *logged* `404`&#8216;s (speaking of raw Apache statistics) should decrease now that there&#8217;s actually a file there.

More information can be had at <http://www.robotstxt.org/wc/active.html>

 [1]: http://wordpress.org/