---
title: Opera background printing bug
author: Josh Street
layout: post
permalink: /2005/07/10/opera-background-printing-bug/
categories:
  - Design
  - Geek
tags:
  - Linux
  - Opera background printing
---
I discovered this one today when trying to build a print stylesheet for a website and testing in Opera 7.x on my Linux desktop. Even when a background is set for the body element in the print stylesheet, and the &#8220;screen&#8221; background is set only for the screen, Opera will insist on obstinantly including the &#8220;screen&#8221; background when it prints (and, by logical reasoning, should be using the print stylesheet). Apparently [this has been filed as a bug by someone else][1], but I thought I&#8217;d rant about it here just because I can.

The closest I can see to a &#8220;fix&#8221; for this is simply using the following rule, though your mileage may vary, depending on how fancy you want your print stylesheets to look (I like mine plain).

`* {background:#fff;}`

For most layouts that should suffice.

 [1]: http://grove.ufl.edu/~bdclary/opera/bugs/printcssbug.html