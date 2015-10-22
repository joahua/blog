---
title: Jekyll, .well-known and other dotfiles
author: Josh Street
layout: post
permalink: /2015/10/22/jekyll-well-known-and-dotfiles/
---
Not that this blog is used for much, but I hit this while trying to add a file under [.well-known](https://tools.ietf.org/html/rfc5785) and realising I couldn’t get the directory to show up.

As this is hosted on Github Pages (and I hadn’t published for ~2 years), I wondered if adding a static file wasn’t enough to trigger a publish. Turns out GH Pages is fine, the issue’s how Jekyll handles (or doesn’t) `.` prefixed files/dirs.

The solution is to add this to your `config.yml`:

### _config.yml
```yaml
include: [".well-known"]
```

Jekyll actually documents this [pretty clearly](http://jekyllrb.com/docs/configuration/) (search “Include” on that page) but I found mention of it on [a Keybase issue](https://github.com/keybase/keybase-issues/issues/366) first.

Given their documentation is focused on .htaccess files (haven’t used those/Apache for a while!) I thought I’d document here to optimize more for the search terms I was using!
