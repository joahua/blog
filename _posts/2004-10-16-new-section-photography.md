---
title: 'New Section: Photography'
author: Josh Street
layout: post
permalink: /2004/10/16/new-section-photography/
categories:
  - Geek
  - Photography
tags:
  - GNU
  - HTML
  - PHP
---
The more attentive amongst my regular readers (who aren&#8217;t using this website solely by means of RSS) will probably have noticed a new link in my primary navigation list, at the top right of your screen.<!--more-->

If you&#8217;re not a regular reader, the title of this post should have given away just which link it is. If you&#8217;re still lost, just click &#8220;[Photography][1]&#8220;.

The only album in there at present contains some of the photos which I&#8217;d promised to release a few weeks back, but hadn&#8217;t due to a variety of reasons. Some of the scans aren&#8217;t great, but that&#8217;s more because the scanner/photos were dirty, and I couldn&#8217;t be bothered using negs. If you wish to purchase higher resolution versions, then [get in touch][2], and we&#8217;ll work something out.

As for the technical side of things, the gallery is powered by a PHP application known as [PhotoStack][3], which I&#8217;ve found to be most excellent, aside from a few irritating form elements in the admin control. That said, I bothered to spend ten-twenty minutes looking over the code and adding `<label>` tags to every checkbox control, and many other things as well.

The system itself is excellent, using flat files for everything, and generating static pages all over the place. I haven&#8217;t checked out page gen times yet, but I think [Michael][4] would be proud &#8212; that said, I&#8217;m still using [his bandwidth][5] like there&#8217;s no tomorrow&#8230; sorry about that.

I&#8217;ve emailed [Noel][6], who is the lead (and currently only?) developer behind the project about it, about the patches, and he&#8217;s advised that there *is* an SVN system in place, but it&#8217;s yet to be setup. I didn&#8217;t do anything major, but it&#8217;d be nice for others to be able to enjoy good form controls&#8230; so we&#8217;ll see.

In the meantime, anyone who wants my label-ised version of the code is most welcome to it.

*   [Syntax highlighted PHPS version][7] (428.17 KB)
*   [Plain text version][8] (62.8 KB)

To use, simply replace your `photostack.php` file inside the photostack root directory with one of the above versions. Note that if you&#8217;re viewing the syntax highlighted version, you MUST copy and paste content, instead of saving the document, as there are HTML formatting tags throughout it. The best solution is to download the plain text version, and save it as `photostack.php`.

In accordance with the [license of PhotoStack itself][9], these changes are released under the terms of the GPL. To find out more, visit [GNU&#8217;s GPL page][10].

Enjoy!

 [1]: http://www.joahua.com/photostack/
 [2]: /contact/
 [3]: http://photostack.org/ "PhotoStack: Pulchritudinous image organization."
 [4]: http://blog.dalegroup.net/
 [5]: http://www.dalegroup.net/server/
 [6]: http://noeljackson.com/
 [7]: /blog/wp-content/2004/10/photostack.phps
 [8]: /blog/wp-content/2004/10/photostack.txt
 [9]: http://photostack.org/2004/10/15/photostack-21b1/
 [10]: http://www.gnu.org/copyleft/gpl.html

 *[SVN]: SubVersioN
 *[KB]: KiloBytes
 *[GPL]: GNU Public License