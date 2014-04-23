---
title: Inserting a copyright symbol in LyX with LaTeX
author: Josh Street
layout: post
permalink: /2005/08/13/inserting-a-copyright-symbol-in-lyx-with-latex/
categories:
  - Design
  - Geek
tags:
  - document processor
  - LaTeX
  - microsoft
  - 'WYSIWYM  document processor'
---
I&#8217;ve been playing with [LyX][1] over the last three days or so as my English major work comes into the final stages both of writing &#8212; the idea itself is finalised &#8212; and typesetting, which is ultimately why I&#8217;m using LyX in the first place (though its output is so brilliant I think I&#8217;m going to start using it on a more permanent basis).

Judging from the websites I&#8217;ve stumbled across whilst giving myself a crash course on using it, that&#8217;d make me one of the few users of the application that didn&#8217;t regularly make use of its extensive Math features to the point that I talk equations in my sleep. (Though it seems [there are some humanities users][2] out there!) But I digress.

One of the niggly things I&#8217;ve discovered is that it is incurably difficult to do little things taken for granted in normal <acronym title="What You See Is What You Get">WYSIWYG</acronym> editors such as Microsoft Word and OpenOffice.org (as opposed to LyX, which proclaims itself &#8220;the first <acronym title="What You See Is What You Mean">WYSIWYM</acronym> document processor.&#8221;) &#8212; though of course it is intended to be far more high end than these applications &#8212; not the least of which is the difficulty of inserting certain symbols.

LyX, being a graphical interface to the LaTeX and TeX processing frameworks, supports raw input by way of <acronym title="Evil Red Text">ERT</acronym>. This is the secret to getting special characters that display sensibly in LyX itself.

Note that it is possible to copy and paste a copyright symbol into LyX from another program, and that Mac users can simply press Option + G to insert this character (lucky little&#8230;). In the case of copying and pasting, however, there is the unfortunate side effect of the character displaying as an unknown character block (due to the character set in use, I imagine) &#8212; which, when editing large documents, can be time consuming (think &#8220;What did that unknown character say again?&#8221; whilst editing).

So, the best way I&#8217;ve found is simply to use an ERT insert.

Simply create a new ERT insert by pressing `Ctrl + L`, and enter

`\copyright`

into it.

This is a LaTeX shortcut that seems to work fine, with one caveat (could just be my system): the copyright symbol appears only as a circle at less than 100% zoom in Xdvi. Note that exported PDF or PS documents don&#8217;t suffer this problem, and seeing as Xdvi manages fine at 100% I&#8217;m inclined to believe it&#8217;s just a rendering bug in that application.

Now I can stop procrastinating and get back to typing my major work that doesn&#8217;t have a single copyright symbol in it (it&#8217;ll be Creative Commons licenced)!

 [1]: http://www.lyx.org/
 [2]: http://marc.theaimsgroup.com/?l=lyx-users&m=105206125211294&w=2