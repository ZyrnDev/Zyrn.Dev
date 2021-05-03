---
title: 'Simple Ray Tracing'
date: '2020-08-14'
---

<style>
    div.screenshot-image-view {
        text-align: center;
    }
    
    div.screenshot-image-view img {
        max-width: 48%;
        min-width: 250px;
        padding: 2px;
        border-radius: 10px;
    }
</style>

Just a quick note beforehand, I didn’t write up this post when I was working on this, so I have actually back dated this post to when I was working on it.

So another month has gone by and you must be wondering what have I been doing in all that time?

**Raytracing.**

What does that look like?<br/>
It looks like this.

<img src="/images/ray_tracing/full_scene_4000x2000_100spp.png" style="width: 100%; border-radius: 50px;"/>

Now hopefully, after looking at that you think that it is as awesome as I thought it was seeing it the first time. Luckily, this was one of my projects I was able to work with a friend on. Together we worked through an amazing free book by Peter Shirley called <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html">‘Ray Tracing in One Weekend’</a>. Following this tutorial we got a very simple tracing simulation going in Python in just one weekend as advertised. Once we completed this I did a bunch of renders of various scenes, so here are some final pictures and pictures from development.

<div class="screenshot-image-view">
    <img src="/images/ray_tracing/ray_collisions.jpg"/>
    <img src="/images/ray_tracing/scenes.png"/>
    <img src="/images/ray_tracing/shadows_no_aa.png"/>
    <img src="/images/ray_tracing/materials_and_aa.png"/>
</div>

The main issue with this version of our ray tracing is it was very slow so I have just started to work on an implementation for the browser using WebGL to get utilize GPU compute for this expensive workload.
<br/> (Reminder you can open the images to get a full size render)

Once again stay tuned for next month’s update!

