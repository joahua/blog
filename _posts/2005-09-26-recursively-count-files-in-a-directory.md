---
title: Recursively count files in a directory
author: Josh Street
layout: post
permalink: /2005/09/26/recursively-count-files-in-a-directory/
categories:
  - Geek
---
`find . | wc -l`

Outputs all files in current directory piped into the `wc` utility with -l switch (count number of newlines). The `find` command outputs directory names as well, so it&#8217;s not entirely accurate&#8230; but fairly close to.