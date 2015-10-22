---
title: HP Photosmart 2610 and XP printing as a restricted rights user
author: Josh Street
layout: post
permalink: /2005/10/08/hp-photosmart-2610-and-xp-printing-as-a-restricted-rights-user/
categories:
  - Geek
tags:
  - Administrator
  - HP Standard TCP/IP port
  - 'pathetic   driver/software  team'
  - printing
  - TCP/IP
  - UNIX
  - Windows
  - xp
---
Yes indeed, no longer do you need to run Windows as an Administrator, free to install spyware and other paraphernalia so often associated with the awfully dangerous world that is the Internet. Or something.

Reasons for not wanting to run as Administrator vary (for me, it&#8217;s mostly a background in Unix that has educated me thus), but no longer, thanks to a helpful reader, do we have to suffer under the regime of HP&#8217;s drivers and automated installation that renders printing as any user but administrator impossible. (Previously elucidated [here][1]).

Well, someone had to solve the problem eventually (and, knowing the way things go around here, it wasn&#8217;t going to be HP&#8217;s [notoriously][2] [pathetic][3] [driver/software][4] team), and that someone was [Danlio in the comments of my review][5]! Wooo!

A slightly edited version follows:

<blockquote cite="/blog/2005/08/26/hp-photosmart-2610-review#comment-6154">
  <p>
    Just open the printer settings. (Right click on â€œHP Photosmart 2610 series, then click &#8220;Properties&#8221;).<br /> Click on the â€œPortsâ€ tab.<br /> â€œAdd portâ€<br /> Select â€œHP Standard TCP/IP portâ€.<br /> Click â€œNextâ€.<br /> Enter the correct IP address of your HP 2610 printer. The other field will automatically fill &#8212; this does not need to be changed. Click â€œNextâ€.
  </p>
  
  <p>
    There you go!
  </p>
  
  <p>
    Now you can print logged in with any user account (not only administrators).
  </p>
</blockquote>

Woo! I don&#8217;t think a Windows test page has ever looked so beautiful ;-)

 [1]: /blog/2005/08/26/hp-photosmart-2610-review
 [2]: http://simon.incutio.com/archive/2004/04/01/hpsux
 [3]: http://www.ttgnet.com/daynotes/2000/20000710.html
 [4]: http://www.findinglisp.com/blog/2005/08/tech-support-turing-test.html
 [5]: /blog/2005/08/26/hp-photosmart-2610-review#comment-6154