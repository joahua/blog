---
title: A response to DashLite criticism
author: Josh Street
layout: post
permalink: /2005/04/08/a-response-to-dashlite-criticism/
categories:
  - DashLite
  - Geek
tags:
  - HTML
  - major deficiency
  - Navid Azimi
  - PHP
  - Search engine
  - search engine scandal
  - software complexity permitting
  - software updates
  - unpatched software
  - web community
  - WordPress administration
  - WordPress installation
---
[Navid Azimi][1] posted the following [in a comment][2] on the [initial Dashlite announcement post][3]:

> This seems like a good implementation and definitely has itâ€™s uses but for most administrators this could actually be more detrimental in the long run than initially expected. The primary idea behind the Dashboard was to allow all WordPress Administrators to stay informed regarding developments in the community.
> 
> Many WP users (or any community for that matter) install and sit. Often times being oblivious to new versions and (most importantly) security updates. This sort of unpatched software can be detrimental not only to your webhost, and your website, but also to the entire web community itself.
> 
> For example, when phpBB was exploited with a major security flaw â€” there was a major deficiency in contacting all administrators regarding the security hole. The problem is twofold. The more you promote the security hole, the easier it becomes for malicious users to exploit unpatched installations. You see where I am going here.
> 
> Of course â€” right now â€” in the prime heat of your blog you feel that you are checking wordpress.org everyday and youâ€™re probably skimming the forums daily too. There is no way youâ€™ll miss any updates. But as time goes on and you have tweaked, retweaked and redesigned your website five times youâ€™ll realize that its time for your blog to push better content and not just look prettier. And its then when you simply stop keeping up with every nightly or reading the forums daily.
> 
> Then again, I could be completely wrong. 

I kind of felt that this required a response more publicly than the continuation of the comment thread would permit, hence this posting.<!--more-->

I believe Dashlite solves a real problem which exists in the WordPress 1.5 system &#8212; that users are disillusioned with the Dashboard system (hence the tremendous response given the relatively &#8220;backwater&#8221; standing of this website), and that the Dashboard system is cumbersome in its execution of its role as an &#8220;alert system&#8221; for making users aware of software updates that are available.

I also believe that, especially in light of the proliferation of multi-user blogging, and the functionality which WordPress offers to facilitate this, the Dashboard system is overly invasive in its presentation within the WordPress administration interface.

WordPress 1.5 essentially permits the establishment of an author-moderator-editor system, allowing collaborative blogging in a multi-user environment, something which allows communal control, but also (and more importantly, if WordPress is to gain widespread adoption through upholding high usability standards) something which permits less technically-minded users to utilise the system painlessly and easily.

It was with this in mind that DashLite was created &#8212; notably, I did not recently implement it on this blog until upgrading to WordPress 1.5 a matter of days ago: this is because it was initially developed in response to another task, in which a client was required to update content themselves. The point is exacerbated through the recent WordPress search engine scandal, in which the news displayed on the Dashboard echoed sentiments of bloggers around the world who were either quietly supportive, or vocally against, the actions and circumstance which lead to that event &#8212; for most users, that is a matter of mere politics, and remains utterly irrelevant, although may serve to provide confusion if the Dashboard is considered an official and authorative source of WordPress news.

This is an ancillary issue, of course. The core problem is non-technical users aren&#8217;t concerned, and, in the case of many multi-user blogging setups, don&#8217;t *need* to be concerned, with the technical state of affairs regarding the system they&#8217;re publishing content on. Admittedly, the DashLite system makes discovering the latest news regarding WordPress one step further away, but, for a number of reasons, this is of no great concern.

Firstly, being a &#8220;hack&#8221;, this is something users will need to actively seek and implement. It doesn&#8217;t come as part of the default distribution, and hence will never be overly prominent &#8212; I address this as way of nullifying the point regarding the publication of security flaws in a two-fold sense (as with phpBB in the example cited in the comment): there&#8217;s never going to be a *large* audience out of reach, as with phpBB, and, those who *are* out of reach are capable of using &#8220;hacks&#8221; (that is, they haven&#8217;t [just installed it from cPanel][4]), and are probably slightly more technically competent &#8212; this means they&#8217;re more likely to have backups, to notice if their website has been compromised, and, although this is countered in the comment, more likely to check the WordPress website for updates, patches, and releases.

Of course, there are other ways to stay &#8220;in the loop&#8221; (excuse the pun &#8211; not the_loop) regarding WordPress developments, such as the WordPress announce mailing list, or keeping the WordPress development blog syndicated in your feed reader of choice. And, for the most part, those bothering/capable of implementing &#8220;hacks&#8221; are more likely to be those doing these things &#8212; as stated previously. Okay, let&#8217;s assume the implementor&#8217;s weblog reaches a kind of *stasis*, at least in terms of development, if not content. I don&#8217;t believe this is a problem for me personally, given my insatiable &#8220;need&#8221; to constantly tweak and alter things which are otherwise working quite fine, if only for the sake of novelty and originality, but that avoids the point that not *all* DashLite users would be like this, and that my standing on such matters may change at some future point as yet unforseen.

There is, then, a need for the Dashboard to syndicate content for these purposes&#8230; but only for the admin user. I haven&#8217;t got time to address this immediately, so as an interim measure the syndicated content (the WordPress Development blog &#8220;Releases&#8217; category RSS feed) is visible to all users &#8212; I hope to address this in the near future, software complexity permitting.

I&#8217;ve rambled enough about this enough here, and I&#8217;m afraid people aren&#8217;t overly likely to read it all, so the actual announcement is posted separately, but I&#8217;ll include download links here, too.

[PHP source file, rich formatting (HTML)][5]  
[Plain text version of the same, save this as-is][6]

To install the update, simply overwrite the `wp-admin/index.php` file in your WordPress installation &#8212; it is advisable you backup your old index.php file first, in case problems arise (none noted in the changes made, but it&#8217;s possible you&#8217;ll discover something, as always).

 [1]: http://www.navidazimi.com/
 [2]: /blog/2005/03/19/dashlite-an-alternative-dashboard-for-wordpress-15#comment-3584
 [3]: /blog/2005/03/19/dashlite-an-alternative-dashboard-for-wordpress-15
 [4]: http://photomatt.net/2005/04/05/wp-in-cpanel/
 [5]: /blog/wp-content/2005/04/wp-admin-index.phps
 [6]: /blog/wp-content/2005/04/wp-admin-index.txt