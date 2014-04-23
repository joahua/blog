---
title: 'MAMP&#8217;s MySQL status red &#038; not starting'
author: Josh Street
layout: post
permalink: /2011/05/09/mamps-mysql-status-red-not-starting/
categories:
  - General
tags:
  - bug
  - mamp
  - mysql
  - note-to-self
---
[MAMP][1] is a good way to setup a low-maintenance dev environment for OS X in very little time, but its handling of MySQL is quite annoying.

When you suspend/sleep a computer, often when you resume MAMP has lost track of the MySQL instance it started and can no longer connect to it. Not sure if this is a problem with the MySQL build being used, but as the problem has existed since 2009, I don&#8217;t have high hopes for it being fixed anytime soon.

The quickest solution is to kill off the process it had started previously and then hit &#8220;Start Servers&#8221; again &#8211; it just takes one line on the terminal.

`killall -9 mysqld`

Be aware that this will kill all running MySQL processes (including those outside of MAMP&#8217;s control) &#8211; this is normally fine, as no-one actually hosts websites on OS X!

 [1]: http://www.mamp.info