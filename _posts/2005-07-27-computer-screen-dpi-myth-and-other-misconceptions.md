---
title: Computer screen DPI myth and other misconceptions
author: Josh Street
layout: post
permalink: /2005/07/27/computer-screen-dpi-myth-and-other-misconceptions/
categories:
  - Design
tags:
  - animation
  - designer
  - display technologies
  - GIF
  - graphic designer
  - JPEG
  - unconsciousness
  - Web Designers
  - web development agency worth
  - web people
  - web team
---
#### Or, an article denouncing the &#8220;web is smaller&#8221; graphic design mantra. Apparently, it&#8217;s all about size&#8230;

Today I received an email from a graphic designer we&#8217;re [[base10solutions][1], that is] collaborating with in building a website, and this comment about source images and computer screens came up:

> I know we said to make the flash ones a really hi res pictureâ€¦ but you cant view more than 72dpi over the net anyway.

It&#8217;s not as though people who say this are just stupid: the whole &#8220;72DPI&#8221; myth has been propagated for&#8230; a bloody long time. It&#8217;s one of those things stuck in the [collective unconsciousness][2] of the world&#8217;s graphic designers, especially those who have flirted with design for the screen only occasionally.

The designer we&#8217;re working with is great&#8230; this isn&#8217;t in any way against her, but her email provided an opportunity to jump up and down, and there are two reasons for that.

<img src="/blog/wp-content/2005/07/screendpimyth.jpg" alt="" style="float:left;" />Firstly, monitors *don&#8217;t* all display the same number of <acronym title="Dots Per Inch">DPI</acronym>, or, more accurately, <acronym title="Pixels Per Inch">PPI</acronym>. I think the emergence of a plethora of display technologies, as well as falling costs in recent years of all kinds of displays, has meant that we&#8217;ve seen a huge move away from 15&#8243; screens being standard (I&#8217;m hardpressed to find *any* 15&#8243; CRT monitors new, and even the LCD market is shifting towards 17&#8243; screens) &#8212; and &#8220;sensible&#8221; resolutions on these (1024&#215;768, max) have similarly been abandoned. This means, of course, that the common wisdom regarding display resolution has become irrelevent, and ultimately false.

Let&#8217;s do some maths for a second. I hate this as much as the next person, but&#8230; well, it&#8217;s required.

I&#8217;ve got a 1280&#215;1024 screen. It&#8217;s roughly 13.3&#215;10.6 inches in size (17&#8243; diagonally), which equates to about 96dpi. Try this:

1280Ã·13.3=96.2dpi  
1024Ã·10.6=96.6dpi

It&#8217;s not horribly complicated maths, but apparently much of the graphic design world hasn&#8217;t even bothered to do that much for some time, instead accepting what Photoshop or ImageReady says in all its wisdom when it advises that &#8220;72dpi&#8221; is for the web. Yeah, okay.

Having said that, an image 600 pixels wide will (in 90% of cases) always be 600 pixels wide when published to the web. This means that it&#8217;ll always take up about 58% of an 1024 pixel wide screen&#8230; it also means that it&#8217;ll take up only 46% of a 1280 pixel wide screen. An image&#8217;s embedded resolution has absolutely no impact unless it&#8217;s being printed and the software spooling it to the printer understands this.

So, I suppose you could say I&#8217;m getting hung up over words (again) &#8212; but I&#8217;m not really. There&#8217;s a perfectly valid reason to provide higher resolution creatives to your web people (if you&#8217;re a graphic designer) &#8212; they want source resolution just as much as you print junkies do. For the website we&#8217;re building, we were going to construct a Flash animation that had a spinning image in it. If we&#8217;ve got higher resolution source, it&#8217;s possible to do more funky stuff with that (because, in this case, it really is purely about eye candy), just like it is in print (though without the static nature).

It&#8217;s worth remembering (especially when a web team are developing end-to-end creative deliverables) that the client is ultimately responsible to some extent for the quality of the finished product. An eye for design isn&#8217;t necessarily their sphere of influence, but providing resources to facilitate good design is. And good design is best achieved with good resources.

There&#8217;s a common misconception, it seems, that web designers only want creatives supplied in PNG or GIF format. Most print designers realise JPEG images are fairly lossy, so that hasn&#8217;t ever been too much of a problem (for me)&#8230; but certainly the PNG/GIF thing is. At any rate, just so the world knows, us web people don&#8217;t mind more than single layer rasterised images or mockups when building sites.

And we certainly don&#8217;t need you to splice the website up for us&#8230; that&#8217;s been another concern in the past. I&#8217;ve spent two hours piecing a supplied website design back together before I even start pulling it apart (again) for CSS treatment!

In fact, in my experience (such that it is), it seems that the less graphic designers think about the fact that the creatives they supply are ultimately ending up on the web, the happier everyone is. So here&#8217;s my recommendation: don&#8217;t think of it as web anymore. Any web development agency worth their salt should know what to do with whatever source material you throw at them, and if they can&#8217;t use it then it&#8217;s their job to say, not the designer&#8217;s to guess.

 [1]: http://www.base10solutions.com.au/
 [2]: http://en.wikipedia.org/wiki/Collective_unconscious

 *[DPI]: dots per inch