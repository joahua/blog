---
title: '<code>wget</code> as rsync/server migration tool'
author: Josh Street
layout: post
permalink: /2006/02/07/wget-rsync-server-migration-tool/
categories:
  - Geek
tags:
  - crappy server
  - ftp://login
  - HTML
  - rsync/server migration tool
---
It works surprisingly well. I moved a site off a crappy server (so crappy, in fact, that core dumps were winding up in my `public_html` directory! Lame-o.) that wouldn&#8217;t let me have SSH access this evening to one that did, and tried for a while to get my head around \*nix `ftp`&#8216;s recursive get&#8230; then gave up, because whatever&#8217;s documented out there obviously wasn&#8217;t working for me.

Then I remembered wget (which I use all the time for grabbing big files, because I can just background the process and not think about it til I wonder &#8220;Hey, where&#8217;d this several-GB file on my desktop come from?&#8221;) had FTP capabilities and could spider websites. Recursive get shouldn&#8217;t be a problem!

And it wasn&#8217;t.

Just use `wget -r ftp://login:password@example.org/public_html/` (or similar) and the server you&#8217;re on will happily leech from an older one! Good stuff.