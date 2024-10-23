---
title: WSL 2 can’t ping a host
author: Josh Street
layout: post
permalink: /2024/10/22-wsl-cant-ping-host
categories:
  - Technology
tags:
  - work
  - technology
  - wsl
  - linux
---

Using WSL and can’t access some internal sites? It could be because you've copy pasted some bad resolver config. Or, you might have made changes that don't survive reboots.

Microsoft’s [default configuration](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig) seems to not apply in all circumstances, and some Stack Overflow advice suggests just putting Google's 8.8.8.8 into `/etc/resolvers.conf`, which also requires elevated permissions.

In any case, if you have private DNS (for internal services or sites), this isn’t going to work, as hosts like `secret-internal.example.com` may not be on your public DNS server.

If so, adding:

```
[network]
generateResolvConf=true
```

to your `.wslconfig` file should help. This typically lives at `C:\Users\<YourUserName>\.wslconfig`.

One more thing – follow the [8 second rule](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#the-8-second-rule-for-configuration-changes) when applying this kind of config change.
