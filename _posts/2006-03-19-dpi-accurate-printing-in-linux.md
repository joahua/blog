---
title: DPI-accurate printing in Linux
author: Josh Street
layout: post
permalink: /2006/03/19/dpi-accurate-printing-in-linux/
categories:
  - Design
  - Open Source
tags:
  - Acrobat
  - Linux
  - Matthias Carols
  - printing
  - printing works
  - Windows
---
The easiest way for me (seeing as it&#8217;s too hard to get the GIMP working with print drivers&#8230; not that I&#8217;ve particularly tried, but not-out-of-the-box isn&#8217;t good enough!) is simply to create artwork as per usual methods, exporting/saving as a PNG (because it&#8217;s lossless, and JPEGs aren&#8217;t acceptable whilst any pretense of quality exists) at 300dpi (or whatever DPI, but 300 is usually what I&#8217;ll be working in for print), then importing into OpenOffice.org 2.0&#8242;s Draw. This, of course, is very focussed on delivering a great user experience &#8212; printing works flawlessly. The only warning I have is that if it says &#8220;outside printer margins&#8221; then select &#8220;crop&#8221; rather than scale to fit&#8230; otherwise, obviously, your DPI/dimensions calculated image will go out the window.

You can also export to PDF from here, but that&#8217;s boring. Same caveat applies when printing PDFs, by the way. I think Acrobat defaults to scaling, and I *imagine* evince, et al., would also&#8230; possibly not. Alternatively, find a Windows PC with Irfanview on it, which is excellent for these kinds of things.

This post, of course, avoids the possibility of Photoshop and others of its kind for a reason. If you can afford it, you should know how to use it to print&#8230;

This brought to you by the hurriedly-assembled long-overdue Matthias Carols copy I promised someone at church ages back. Actually, I only did the cover as a way of apology for it taking me so long ;-) Shrug.

![][1]

 [1]: /blog/wp-content/2006/03/IMGP1851.JPG