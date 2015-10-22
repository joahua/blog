---
title: My new phpSysInfo page
author: Josh Street
layout: post
permalink: /2005/02/09/my-new-phpsysinfo-page/
categories:
  - Geek
tags:
  - BSD
  - proxy server
---
If you&#8217;re feeling luc&#8230; err&#8230; geeky, then take a look at my [new BSD server&#8217;s phpSysInfo page][1]. Yes, the / partition is at 102% capacity&#8230; a manual `df -h` reports that, so no, it&#8217;s not a phpSysInfo bug. Having said that, it&#8217;s not causing any problems, I&#8217;m disinclined to go poking!

<small>Some reports that people can&#8217;t access this page&#8230; should be able to fine, I&#8217;m checking it out now&#8230;</small>

<small><em>Later:</em> I visited it using a proxy server and it was still working, so the outside world can clearly get to it. Perhaps there are problems with users DNS stuff, as it&#8217;s a CNAME pointing to a dyndns service&#8230;</small>

 [1]: http://home.joahua.com/phpSysInfo/