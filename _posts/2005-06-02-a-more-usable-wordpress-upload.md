---
title: A more usable WordPress Upload
author: Josh Street
layout: post
permalink: /2005/06/02/a-more-usable-wordpress-upload/
categories:
  - General
tags:
  - PHP
  - Upload facility
  - WordPress administration
  - WordPress installation
---
As a user, the WordPress administration panel Upload facility always frustrated me. It was useful, and quicker to use than FTP in most cases, but the paths it generated for images automatically always needed to be edited before use.

This was, primarily, my own fault &#8211; but I&#8217;d set things up that way based on the advice of the WordPress administration panel. On the Miscellaneous Options page (`/wp-admin/options-misc.php` in a typical setup), it proposes two &#8220;recommended&#8221; paths for both the Destination directory and the URI of this directory, typically your WordPress installation&#8217;s wp-content folder and its corresponding *absolute* URI.

This is simply manipulated into a new string when files are uploaded to generate a tag you can copy and paste into a post &#8211; a realisation that should have hit me long ago.

On this site, for example, the recommended URI string is &#8220;http://www.joahua.com/blog/wp-content&#8221; &#8211; note the lack of trailing slash and absolute nature of the path. I only just realised that this was the basis of the string, and so got rid of my trailing slash (I insist on having such things!) and trimmed off the &#8220;http://www.joahua.com&#8221; &#8211; this means the Upload-generated tag now gives a relative URI. No more chopping and changing the generated tags for me!