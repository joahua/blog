---
title: Firefox Web Developer Extension and View Style Information
author: Josh Street
layout: post
permalink: /2005/09/15/firefox-web-developer-extension-and-view-style-information/
categories:
  - Geek
  - Web Standards
tags:
  - Chris Pederick
  - DOM
  - Firefox DOM Inspector
  - Ubuntu
  - Web Developer Extension
---
&#8220;View Style Information&#8221; wasn&#8217;t working here for a while, and I couldn&#8217;t figure out why. Turns out it&#8217;s dependent upon the Firefox DOM Inspector being installed &#8212; and, in Ubuntu at least, that&#8217;s a separate package.

If this feature of [Chris Pederick][1]&#8216;s excellent [Web Developer Extension][2] isn&#8217;t happening for you, try adding the **firefox-dom-inspector** package. If you&#8217;re not using packages, reinstall Firefox ensuring that the &#8220;Developer Tools&#8221; option is checked ([more on this issue for non-packaged versions here][3])

 [1]: http://chrispederick.com/
 [2]: http://chrispederick.com/work/firefox/webdeveloper/
 [3]: http://forum.pbase.com/viewtopic.php?t=13639