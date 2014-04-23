---
title: Solid Linux RSS reader
author: Josh Street
layout: post
permalink: /2004/09/22/solid-linux-rss-reader/
categories:
  - Geek
  - Open Source
tags:
  - BSD
  - Fedora
  - FreeBSD
  - Gentoo
  - GNU/Linux
  - Java
  - Linux
  - Mac OS X
  - MacOS
  - Novell
  - online news feeds
  - operating system
  - Perl
  - RAM
  - RDF
  - Slackware
  - staple applications
  - SuSE
  - sydney
---
I&#8217;ve been looking for a nice, standalone feed reader for Linux recently, and I think I&#8217;ve finally found one that fits the bill.<!--more-->

*Spoiler: I&#8217;m using [Liferea][1]. Read on for why.*

There&#8217;s the staple applications, as always, which people seem to leap at almost on impulse, are feed readers such as [Straw][2], [Syndigator][3] or [RSSOwl][4]. And, for some reason, I&#8217;ve chosen none of these.

#### [Straw][2]

Straw looked good, but for the whole GNOME and Py\*insert extension here\* dependence thing&#8230; I&#8217;m currently running KDE on the desktop, and whilst it would have run fine, I&#8217;d rather not be tied down. That, and I&#8217;m uncertain as to how it would render content. The main thing was my dislike of Python extensions, though.

#### [Syndigator][3]

This, I glanced at fairly seriously, but the dependency monsters overran my utopian world, and as such it was left in the pile of refuse that is my application downloads folder (2.9GB, not including various operating system images which also reside on my hard drive, since about the start of this year). I think it was whinging about Perl or something, so I slammed the door on it before it had even finished speaking. Doo bee doo.

#### [RSSOwl][4]

This is an interesting kettle of fish. It looks most excellent, but, again for platform reasons, I chose not to use it. I&#8217;m pretty terrible in this regard, actually. If a product is coded in Java, I&#8217;m sorry, but I can&#8217;t afford to use it. Not because of any financial cost, or because of anything against the software itself &#8212; it&#8217;s just that the Java VM seems to swallow RAM like four-wheel drive cars from Sydney&#8217;s North Shore swallow fossil fuels&#8230; and I can&#8217;t afford that much RAM.

I&#8217;d be interested to explore this one at some point in the future, however.

So, why did I chose to go with Liferea?

#### [Liferea][1]

It&#8217;s easiest just to quote their own website to introduce this reader, so that&#8217;s what I&#8217;ll do.

> Liferea is an abbreviation for Linux Feed Reader. It is a news aggregator for online news feeds. It supports a number of different feed formats including RSS/RDF, CDF, Atom, OCS, and OPML. There are many other news readers available, but these others are not available for Linux or require many extra libraries to be installed. Liferea tries to fill this gap by creating a fast, easy to use, easy to install news aggregator for GTK/GNOME.

Cool. I think it scores well on all those scores. The source archive gave me grief, but started co-operating after I installed some development libraries&#8230; that said, the &#8212; I&#8217;ll say &#8220;interesting&#8221; &#8212; file structuring system employed by SuSE 9.1 made errors crop up from various places during the actual build. Which sucked. So, I got lazy, and went off to grab a nice shiny pre-packaged SuSE RPM files from their [SourceForge project page][5]. Snazzy, hey?

And then it installed. Sexy. Easy to use. Familiar interface (akin to Ximian/Novell Evolution). Searching. Folders. Can use Mozilla, Firefox, Opera, Netscape and Konqueror out of the box, as well as supporting opening links in a new tab (yes, I know it&#8217;s a fairly simple command switch&#8230; that doesn&#8217;t mean many products USE it!). Choice of Mozilla or GtkHTML as internal rendering engine. Docking in the KDE toolbar&#8230; and this is a GTK/GNOME product! It&#8217;s very cool. Thumbs up to the developers, who suggest that those 

<blockquote cite="http://liferea.sourceforge.net/">
  <p>
    interested in mature RDF/RSS feed client projects for GNU/Linux
  </p>
</blockquote>

should consider the other products I&#8217;ve mentioned above&#8230; pfft! This is great, for me.

If you&#8217;re running Linux, BSD or Mac OS X, I&#8217;d recommend you check it out&#8230; there are people maintaining packages for Debian, RedHat/Fedora, SuSE, Gentoo, Slackware, FreeBSD and MacOS, links to which are available on their [Installation][6] page.

 [1]: http://liferea.sourceforge.net/
 [2]: http://www.nongnu.org/straw/
 [3]: http://syndigator.sourceforge.net/
 [4]: http://sourceforge.net/projects/rssowl/
 [5]: http://sourceforge.net/project/showfiles.php?group_id=87005
 [6]: http://liferea.sourceforge.net/install.php