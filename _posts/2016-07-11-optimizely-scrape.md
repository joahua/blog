---
title: Scraping active Optimizely experiments
author: Josh Street
layout: post
permalink: /2016/07/11/optimizely-scrape/
categories:
  - Geek
tags:
  - optimizely
  - ab-testing
  - scraping
---

Need to see what's running?

I think Optimizely might've done something to make this tricker as an optional project setting, but it's handy to be able to debug what's running and possible splits.

```js
Object.keys(optimizely.allExperiments).map(function(item){
item = optimizely.allExperiments[item];

if (!item.enabled) return;
console.log([item.name,'\n',item.variation_ids.map(function(v){
    return "\t" + item.variation_weights[v]/1000 + "%: " + optimizely.allVariations[v].name;
  })].join(''))
})
```

Paste in console.