---
title: Change JPG quality in a shell
author: Josh Street
layout: post
permalink: /2005/09/25/change-jpg-quality-in-a-shell/
categories:
  - Geek
  - Visual
tags:
  - GUI
  - operating systems
  - real operating systems
  - UNIX
---
Yeah, so I&#8217;m posting the dregs of what I&#8217;m learning [for another project][1] here. Deal with it! I was rather proud of this little gem, not because it&#8217;s amazingly complicated, but just because it saves me so much time and bandwidth (think download, process locally using GUI tools, re-upload).

`mogrify -geometry 700x525\> -quality 85 -unsharp 1x1 *.JPG`

<acronym title="Your mileage may vary">YMMV</acronym> with the \*.JPG bit&#8230; obviously will need changing. This whole thing depends on ImageMagick being installed&#8230; but it will be on most platforms (By platforms, I mean real operating systems where you don&#8217;t need a graphical display to pull these things off! \*puts on seedy hardcore chain smoking Unix geek voice* &#8220;I do typesetting and print design from the console, man.&#8221;), I&#8217;d imagine.

 [1]: http://year12.joahua.com/