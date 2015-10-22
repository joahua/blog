---
title: 'DashLite 1.1 &#8211; The &#8220;I-don&#8217;t-read-long-posts&#8221; edition'
author: Josh Street
layout: post
permalink: /2005/04/08/dashlite-11-the-i-dont-read-long-posts-edition/
categories:
  - DashLite
tags:
  - HTML
  - PHP
  - WordPress installation
---
<img src="/blog/wp-content/2005/04/dashlite11.jpg" style="float:right;" />I announced this at the bottom of the post [A response to DashLite criticism][1], but figured not many people would actually *read* that far&#8230; so I&#8217;m announcing it separately.

Essentially, version 1.1 re-introduces *one only* very specific feed, which pulls the &#8220;Releases&#8221; category from the WordPress development blog. This category is only used for posting updates to software &#8212; there is no announcement of community events, milestones, etc. To view exactly what&#8217;s being syndicated, visit [the Releases category page][2].

Basically, this syndicates new release information and displays it in the &#8220;Do Stuff&#8221; sidebar, as shown in the screenshot.

#### Get it

[PHP source file, rich formatting (HTML)][3]  
[Plain text version of the same, save this as-is][4]

To install the update, simply overwrite the `wp-admin/index.php` file in your WordPress installation &#8212; it is advisable you backup your old index.php file first, in case problems arise (none noted in the changes made, but it&#8217;s possible you&#8217;ll discover something, as always).

 [1]: /blog/2005/04/08/a-response-to-dashlite-criticism
 [2]: http://wordpress.org/development/category/releases/
 [3]: /blog/wp-content/2005/04/wp-admin-index.phps
 [4]: /blog/wp-content/2005/04/wp-admin-index.txt