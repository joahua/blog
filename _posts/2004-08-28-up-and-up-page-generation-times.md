---
title: 'Up and up: page generation times'
author: Josh Street
layout: post
permalink: /2004/08/28/up-and-up-page-generation-times/
categories:
  - Geek
  - PHP
  - Usability
tags:
  - HTML
  - Perl
---
After briefly flirting with Daring Fireball&#8217;s Markdown, I have since abandoned the tool for several reasons. Firstly, I&#8217;m convined that (this version of) WordPress&#8217; implementation of it sucks&#8230; simply because code that works perfectly well on the [Dingus][1] page fails in a most spectacular fashion when applied locally.

Yeah. So that was sufficiently disappointing. I&#8217;m inclined to blame WordPress over the utility itself, because according to the WordPress Plugins page, it was written in Perl, translated to <acronym title="PHP: Hypertext Preprocessor">PHP</acronym>, and then again modified for inclusion in WordPress. It&#8217;s just like programming Chinese Whispers, really.

What&#8217;s more, is it added a large-ish time to my page generation, which just won&#8217;t do, considering the fact that I&#8217;m trying to prove a point over here!

Then, of course, there is the complication of trying to learn a new markup (or down) language, and making sure this doesn&#8217;t interfere with my use of *real* <acronym title="Hyper Text Markup Language">HTML</acronym>. I believe the documentation when it says that it won&#8217;t, but the fact that WordPress&#8217; implementation of it seems to be so broken causes the rising of eyebrows.

It looks relatively fixable with little amounts of effort, but (yes, there always is one, isn&#8217;t there?) I&#8217;d imagine that this would either have been resolved or abandoned for the 1.3 build of WordPress (still in development and testing) &#8212; I&#8217;m running 1.2 this part of the world.

 [1]: http://daringfireball.net/projects/markdown/dingus "Dingus, an online Markdown editor"