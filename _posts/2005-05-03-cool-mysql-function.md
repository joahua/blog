---
title: Cool MySQL function
author: Josh Street
layout: post
permalink: /2005/05/03/cool-mysql-function/
categories:
  - Geek
---
I just discovered that MySQL has a mathematical function called `RAND()`. It serves two purposes, one of which was relevant to me, the other is just nifty to know.

You can use RAND() as a random number generator (although it&#8217;s probably not terribly random) simply by using the syntax

`SELECT RAND();`

or with a seed value between the parentheses

`SELECT RAND(1234);`

or (and this is the cool one for me) like this

`SELECT * FROM tbl_name ORDER BY RAND();`

to retrieve results in a random order.

Nifty, hey?

<small>More info can be found on the MySQL Reference Manual <a href="http://dev.mysql.com/doc/mysql/en/mathematical-functions.html">Mathematical Functions</a> page</small>