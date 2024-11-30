---
title: Ruby via Mise with asdf on an M3 Mac (2024)
author: Josh Street
layout: post
permalink: /2024/11/30/mise-asdf-ruby-shim
categories:
  - Technology
tags:
  - ruby
  - technology
  - osx
  - mise
---

Following the setup instructions from [Ruby / mise-en-place](https://mise.jdx.dev/lang/ruby.html) I hit a brief snag. It references asdf-ruby, but didn't appear to work. Bundler errors refer to:

`~/.local/share/mise/plugins/ruby/rubygems-plugin/rubygems_plugin.rb`

This file seems to have an `asdf` reference that isn't satisfied when using `mise` to install Ruby.

The plugin appears to be trying to reshim asdf but doesn't succeed as asdf isn't itself found.

It turns out that mise itself has a reshim function, which fixed this.

Give `mise reshim` a go.
