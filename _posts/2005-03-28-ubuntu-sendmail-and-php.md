---
title: Ubuntu, Sendmail and PHP
author: Josh Street
layout: post
permalink: /2005/03/28/ubuntu-sendmail-and-php/
categories:
  - Geek
  - PHP
tags:
  - PHP
  - Ubuntu
---
Surprisingly, I hadn&#8217;t noticed until just yesterday when I was testing out a contact form for a website under development that my PHP `mail()` wasn&#8217;t working properly. I really should have &#8212; WordPress sends out moderation emails for comments, and the absence of those in testing should have made me think twice, but it didn&#8217;t.

So, PHP and Sendmail weren&#8217;t playing nice. The default command is `sendmail -t -i`, if you don&#8217;t manually set `sendmail_path` in your `php.ini` configuration, but this wasn&#8217;t working.

Unfortunately, due to some degree of stupidity in the way things are run, you need to use an absolute path for PHP to find where it is (even if just the command &#8220;sendmail&#8221; works fine from a terminal&#8230; like I said, stupid), so if you want mail, you have to play by its rules. For no apparent reason.

This is all with stock Ubuntu versions of Apache2 and PHP, by the way &#8212; the stupidity may go away if you do-it-yourself, but I&#8217;m kind of doubting it.

Anyway, assuming you&#8217;ve got sendmail (or an MTA which provides sendmail hooks &#8212; I&#8217;m actually using postfix here) installed, you can simply set this in your php.ini, restart Apache (using `apache2ctl restart` from a root account), and all should be working:

`sendmail_path = /usr/sbin/sendmail -i -t`

Bingo!