---
title: 'DashLite 1.0 &#8211; An alternative &#8220;Dashboard&#8221; for WordPress 1.5'
author: Josh Street
layout: post
permalink: /2005/03/19/dashlite-an-alternative-dashboard-for-wordpress-15/
categories:
  - DashLite
  - Open Source
tags:
  - HTML
  - PHP
---
<p>This website still isn&#8217;t running 1.5, but I&#8217;ve got two others in the works which are, and, to be perfectly honest, <em>neither</em> of them need the Dashboard, because they&#8217;re going to be maintained either in part or entirely by people who couldn&#8217;t care less what WordPress was, so long as it works.  With this in mind, the whole &#8220;Dashboard&#8221; RSS syndication of every-website-under-the-sun-relevant-to-WordPress thing is probably a bit much, especially seeing as it increases load times whilst offering no apparent benefits&#8230; so I&#8217;ve hacked together a far simpler page for use in its place, which I feel is far more along the lines of the KISS principle (click image for full view):</p>
<p><a href="/blog/wp-content/2005/03/dashlite-full.jpg"><img src="/blog/wp-content/2005/03/dashlite.jpg" alt="A screenshot of DashLite." /></a></p>
<p>The <a href="/blog/wp-content/2005/03/wp-admin-index.phps">source for DashLite is available as a <acronym title="PHP: Hypertext Preprocessor Source">PHPS</acronym> file</a>, which is good for viewing the source, but not for saving directly (because it&#8217;s got HTML markup in it to make it look pretty, and will simply break things).  You can also <a href="/blog/wp-content/2005/03/wp-admin-index.txt">download just the plain text source</a>, which you should save as &#8220;index.php&#8221;.</p>
<p>To install, simply overwrite the file wp-admin/index.php in your blog directory &#8212; you may want to backup the original index.php first, as I accept no responsibility for any problems that may arise as a result of the installation of this!</p>
<p>Unlike most content on this website, this is released under the GPL (as is WordPress itself), so go crazy with it&#8230;</p>
<p><small>p.s. the version number is just for kicks &#8212; I don&#8217;t think it&#8217;s highly likely that it&#8217;ll change in the near future, but just in case I think of other things to add, or bugs do exist (odd though THAT would be, considering the complexity of the page), or WordPress function names, etc. change, the option to increment it is there&#8230;</small></p>
<p><strong>Update:</strong> Oh, yeah &#8212; if you use it, it&#8217;d be nice if you could send a trackback or drop me a line (I would have completely forgotten to say this, but for <a href="http://www.swylie.com/">Steve</a>&#8216;s comment).  Enjoy!</p>
<p><strong>Another Update:</strong> <a href="/blog/2005/04/08/dashlite-11-the-i-dont-read-long-posts-edition">Version 1.1 is now out</a>.  It&#8217;s more of a usability patch than a bug patch, but all the same, it&#8217;s there if anyone wants it.</p>
