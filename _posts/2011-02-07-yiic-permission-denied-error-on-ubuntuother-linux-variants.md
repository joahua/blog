---
title: Yiic Permission Denied error on Ubuntu/other Linux variants
author: Josh Street
layout: post
permalink: /2011/02/07/yiic-permission-denied-error-on-ubuntuother-linux-variants/
categories:
  - General
tags:
  - chmod
  - error
  - Linux
  - permission denied
  - Ubuntu
  - yii
---
To install [Yii][1] for the first time, the README suggests you should run the following command:

`yiic webapp ..\testdrive`

Unfortunately, for most users this will result in an error along the lines of &#8220;`bash: ./yiic: Permission denied`&#8221; unless you first make `yiic` executable.

The easiest way to do this is to run the following command in your framework directory:

`chmod +x yiic`

The x simply means &#8220;eXecutable&#8221;.

 [1]: http://www.yiiframework.com/