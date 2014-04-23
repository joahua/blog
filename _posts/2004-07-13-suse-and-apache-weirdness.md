---
title: 'SuSE and Apache weirdness&#8230;'
author: Josh Street
layout: post
permalink: /2004/07/13/suse-and-apache-weirdness/
categories:
  - Before WordPress
tags:
  - certain editing applications
  - GUI
  - HTML
  - printer setup tool
  - SuSE
  - web-serving
---
I&#8217;m in one of those really frustrated geek moods, so if you don&#8217;t understand/enjoy these rants, skip reading this post.

ARGGGGGGGGGGGGGGGGGGGGGHHHHHHHHHH!!!qvaorentfq34iogfaenrgnoaerg~!!!!!

WHY CAN&#8217;T SUSE JUST BE NORMAL?! I mean, I know it&#8217;s German and all that, but still!&nbsp; HISSSSSSSS!!!!&nbsp; You know what?&nbsp; Technically, the way it&#8217;s setup the whole Apache configuration thing is probably FAR better than anything else I&#8217;ve ever seen!&nbsp; No, more than that&#8230; it IS better setup.&nbsp; It is structured VERY nicely, and, despite the lack of YaST configuration options (who needs GUI&#8217;s anyway?), very easy to use.&nbsp; Except for some bloody impossible issue it seems to have with accessing files!

So, setting up a virtualhost has never been so simple and quick and&#8230; yeah, just generally nice.&nbsp; Admittedly, I think it still needs a restart, but hey, what&#8217;s new?

All is good.&nbsp; Until, of course, you try and point the DocumentRoot to somewhere vaguely useful.&nbsp; In my case, somewhere inside my home user directory (/home/josh) &#8211; I have a development folder setup, which I previously had an IP-based vhost setup to point to for all local development and testing (/home/josh/MyDocs/webdevelopment &#8211; /home/josh/public_html also symlinks there).&nbsp; This is where it all starts to become somewhat flaky.

By default (yeah, whoever built the RPM was a bit of an odd one&#8230;), mod\_userdir is ENABLED&#8230; not for vhosting or anything special, just accessible via http://servername/~\*/ &#8211; and that will point to /home/\*/public\_html where * is the username.&nbsp; Okay.&nbsp; So, I&#8217;ve generally got about three accounts setup on my desktop.&nbsp; Root, which is never logged into (although su&#8217;d into often enough that perhaps I should actually login properly&#8230;), my user account, for everything under the sun, the home directory of which resides on a separate physical volume (40GB ext3), and a (passwordless) guest account for use of miscellaneous others.&nbsp; No, I&#8217;m not too worried about leet hax0rs reading this and compromising my b0xen&#8230; sitting comfortably behind another IP filtering bundle of joy, and I&#8217;m not too scared of the other machines on my own network, at least, not most days of the week.

So.&nbsp; The guest user works interestingly.&nbsp; /home/guest/public_html corresponds to http://localhost/~guest/, which successfully produces a directory listing (albeit one without any actual files &#8211; the directory is currently empty).&nbsp; Try the same with MY account, and all I get is a schnazzy 403 forbidden page.

That is, of course, when I have the symlink to my development folder there.&nbsp; Were I to simply have a folder there, all works perfectly.&nbsp; So why don&#8217;t I just be a big boy, get over it, and move the development folder?&nbsp; Hmm.&nbsp; Well, there&#8217;s about 1.5GB of data in there (1,585,358,110 bytes, to be exact), and certain editing applications would probably try to hang me out on a tree if I just moved it without informing them.&nbsp; And I could inform them, but it&#8217;d take time.

Oh, yeah, and it&#8217;s like admitting defeat.&nbsp; Yeah, it&#8217;s a computer, but I can be *more* stubborn, so there!

Hmm.&nbsp; So it&#8217;s looking like it has some kind of random opposition to symlinks, as of right now&#8230; but that shouldn&#8217;t be a problem!&nbsp; Grrrr!

Personally, I&#8217;m suspicious of all this wizard-driven crap SuSE is trying to pull&#8230; there is an extent to which I&#8217;d like to be able to do things for myself, without having to give the proverbial finger to a bunch of automated mechanisms which attempt to do it for me and fail miserably.&nbsp; Case in point, the YaST printer setup tool and ptal/hpoj configuration.

Hmm.&nbsp; If anyone has any ideas, feel free to throw them this way&#8230; I know what the REAL solution is, but I don&#8217;t particularly want to setup another computer just for the purpose of web-serving, because that would involve buying another hard-drive with money I don&#8217;t have.

<\/rant>