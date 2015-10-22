---
title: 'The Single IE Linebreak Through [optionally transparent] Proxy Character Encoding Bug'
author: Josh Street
layout: post
permalink: /2006/01/24/the-single-ie-linebreak-through-optionally-transparent-proxy-character-encoding-bug/
categories:
  - Web Standards
tags:
  - HTML
  - HTTP
  - PHP
---
It&#8217;s new, so far as I&#8217;m aware, and I can&#8217;t even build a decent test case for it. In one instance alone, if there&#8217;s a blank line between two elements (i.e. just for readability, doesn&#8217;t *need* to be like that), then certain versions of IE &#8212; and only when their traffic is being proxied through certain transparent/non-transparent servers &#8212; will display a blanking/&#8221;unknown&#8221; character.

At first it was thought this was just because of a dud character in a file, but then we tried using PHP to echo `\n\r`, `\n`, and `\r` in the place of a manually entered return: all of which resulted in the bug persisting. The only fix I&#8217;ve got is to use an HTML comment between lines

<pre>&lt;/element&gt;&lt;!--
--&gt;&lt;another element='element'&gt;</pre>

Like that. Anything else, and we get a blanking character in there. Bizarre!

It doesn&#8217;t occur anywhere else on the site in question, and I&#8217;m not going to waste hours trying to build another un-branded test case which may or may not work! The problem affects IE only (though we didn&#8217;t do version testing), and only when traffic is going through (some) proxy servers. And only that one character.

It&#8217;s not an encoding problem per-se, though is obviously related to that in some sense. This is still internal-only, and it&#8217;s not being dished up with proper content-types defined in HTTP headers (because I&#8217;m still liable to change my mind as to how that should be done, and I&#8217;m not calling it until the site is about to launch/what is/isn&#8217;t required in terms of content-type&#8211;affected things is abundantly clear!), but seeing as it only has an impact when using through a proxy it&#8217;s pretty obvious it&#8217;s not JUST here. Shrug. I reluctantly deleted the linebreak and the box went away.