---
title: WordPress issues this last week
author: Josh Street
layout: post
permalink: /2009/07/17/wordpress-issues-this-last-week/
syntaxhighlighter_encoded:
  - 1
categories:
  - General
tags:
  - bug
  - code
  - error
  - mod_security
  - wordpress
---
Recently upgraded along with the rest of the world to WordPress 2.8.1 and hit a whole bunch of craziness that essentially encouraged me to move even this site across to [WebFaction][1] (eating your own dog food and all that) because of no longer being able to post from the WordPress admin panel.

<img style="float: left; border: 0px initial initial;" title="Some issues with posting and mod_security" src="http://josh.st/blog/wp-content//2009/07/wget-issues.png" alt="Some issues with posting and mod_security" width="350" height="292" />I hadn&#8217;t changed any plugins, and the rest of the net was conspicuously quiet, so I figured that either my current host had near-simultaneously upgraded the database & corrupted something along the way (with MySQL this can result in read-only tables in certain cases, I&#8217;m told), or else there was something more sinister at work. No plugins had changed, and because nothing else functioned differently for even a moment I presumed innocence on their behalf. I tried with and without Google Gears enabled, with and without tags, in different saved statuses, and still nothing worked!

Anyway. Turns out it was my use of the term &#8220;wget&#8221;. (Even now I need to be careful as I write that!)

mod\_security on Apache basically threw up its lunch every time I threatened to post about it. Accordingly, I can&#8217;t share with you some things that I&#8217;ve learnt in migration just yet, and haven&#8217;t been posting about anything else as I&#8217;ve been trying to resolve this problem, thinking it was preventing me from posting. Perhaps mod\_security is trying to get me to write about more meaningful things than file transfer trickery! \*yawn\*

At any rate, it&#8217;s all over now and we&#8217;ll be back to regularly scheduled programming shortly.

 [1]: http://www.webfaction.com?affiliate=your_username