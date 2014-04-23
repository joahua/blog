---
title: Rollback/downgrade using apt-get
author: Josh Street
layout: post
permalink: /2005/07/23/rollbackdowngrade-using-apt-get/
categories:
  - Geek
tags:
  - Ubuntu
---
[Davide Bocci][1] pointed out [in a comment][2] that there&#8217;s an easy solution to the problems with Ubuntu&#8217;s Firefox 1.0.4 package that can be accomplished with `apt-get`.

Through specifying package versions, it&#8217;s possible to rollback to something that&#8217;s not quite cutting edge. In Firefox&#8217;s case, observe:

`sudo apt-get install mozilla-firefox=1.0.2-0ubuntu5 mozilla-firefox-gnome-support=1.0.2-0ubuntu5`

Thanks Davide!

 [1]: http://www.davidebocci.it/
 [2]: http://www.joahua.com/blog/2005/07/23/ubuntu-firefox-package-segfault-problem#comment-4149