---
title: Broken rake
author: Josh Street
layout: post
permalink: /2006/03/14/broken-rake/
categories:
  - Geek
  - Life
tags:
  - HTML
  - SQL
  - Ubuntu
---
Great. So I try and do things all properly-like, using migrate scripts to make the database and stuff, and it goes and dies on me.

`
josh@whisper:~/public_html/XX/db/migrate$ rake migrate
(in /home/josh/public_html/XX)
rake aborted!
You have an error in your SQL syntax.  Check the manual that corresponds
to your MySQL server version for the right syntax to use near
'desc varchar(255)) ENGINE=InnoDB' at line 1:
CREATE TABLE courses (id int(11) DEFAULT NULL auto_increment
PRIMARY KEY, name varchar(255), desc varchar(255)) ENGINE=InnoDB
./Rakefile:200
`

Nyaaaah. I think it&#8217;s coz I&#8217;m using the only version of Ruby that the Rails team don&#8217;t recommend:

> We recommend Ruby 1.8.4 for use with Rails. Ruby 1.8.2 is fine too, but version 1.8.3 is not.

Hah. Yeah, I&#8217;m using 1.8.3. It&#8217;s Ubuntu&#8217;s fault! That&#8217;s just what happened to be sitting in stupid apt repositories. So now I need to add backports to an otherwise-clean computer. \*shudders\* Well, I guess the alternative is compiling and trying to stay on top of all that&#8230; \*Josh is seen hurriedly running to add backports sources\*

Well, maybe not tonight. *wanders off to [post on Ï„ÏÎ±Î½ÏƒÎ»Î¹Ï„ÎµÏÎ±Ï„Î¹Î¿Î½][1] before sleeping*

 [1]: http://joahua.com/Ï„ÏÎ±Î½ÏƒÎ»Î¹Ï„ÎµÏÎ±Ï„Î¹Î¿Î½/?p=4