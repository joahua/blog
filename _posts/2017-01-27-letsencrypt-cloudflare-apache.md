---
title: LetsEncrypt + CloudFlare + Apache 'failed authorization procedure'
author: Josh Street
layout: post
permalink: /2017/01/27/letsencrypt-cloudflare-apache/
categories:
  - Geek
tags:
  - optimizely
  - ab-testing
  - scraping
---

Finally got around to playing with LetsEncrypt this evening. I was naively copy-pastaing my way through a tutorial when I ran up against this error.

```
Failed authorization procedure. www.example.com (tls-sni-01): urn:acme:error:tls :: The server experienced a TLS error during domain verification :: Failed to connect to 104.27.178.157:443 for TLS-SNI-01 challenge, example.com (tls-sni-01): urn:acme:error:tls :: The server experienced a TLS error during domain verification :: Failed to connect to 104.27.178.157:443 for TLS-SNI-01 challenge
```

The IP in the error belongs to Cloudflare, which was already active and providing 'flexible' (i.e. illusory) SSL. [1]

One way to fix this is to make a DNS change to point directly at your origin server (your own IP), instead of the CDN, while you provision the cert. But half the point of LetsEncrypt is that you get readily automated and cycleable certificates, which big scary DNS changes would get in the way of. Not to mention that DNS changes are typically slow/multistage/relatively hard to script.

Thankfully, LetsEncrypt are smart folks and have another option.

Enter `--webroot`.

```
sudo letsencrypt --apache -d example.com -d www.example.com --webroot --webroot-path=/var/www/html/ --renew-by-default --agree-tos
> Too many flags setting configurators/installers/authenticators 'apache' -> 'webroot'
```

Did I mention I was using Apache?

The [copy-paste tutorial](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-16-04) I was following used the `--apache` switch as a way of, I guess, automagically configuring a virtualhost. I broadly trust that LetsEncrypt will have saner defaults than whatever other DigitalOcean tutorial I used to provision the box in the first place, so that seemed like a good idea. Only, of course, it wasn't compatible with the `--webroot` switch.

But, eventually, this did:

```
sudo letsencrypt --installer apache -d example.com -d www.example.com --webroot --webroot-path=/var/www/html/ --renew-by-default --agree-tos
```

Seems like `--apache` is shorthand for `--installer apache`, which is somehow sufficiently differentiated from `--webroot` to not throw errors. Don‘t know what I'm doing deeply enough to file a bug yet so throwing this blog up for a hopefully searchable solution in the meantime.

–

1. This has been written up dozens of times, but to summarise the issue:

Browser talks to CDN talks to Server.

Browser to CDN is secure. CDN to Server is insecure.

So we're trying to fix that last mile (which, of course, still leaves the "CloudFlare can MITM half the Internet" issue… but that’s a bit beyond my immediate threat model).