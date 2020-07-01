---
title: "Migration - We're Live!"
date: '2020-06-20'
---

It has been over a month since my last post and there is a lot of changes to share. Recently I finally made the jump to using this Next.js website as my main production website. This was a big leap as I was also deploying to a new cloud server with <a href="https://www.ovh.com/">OVH</a> as I talked about in my last post.

This new server required significant setup before I could deploy to it. One key task was to setup a SSH connection and then install and configure <a href="https://www.nginx.com">Nginx</a> as both a static file server and a reverse proxy. Once I had optimised the settings for my CDN (Content Delivery Network) I was read to deploy and change my DNS records to point to the newly deployed site.

After a week after I switched sites, I decided to port some of the old site's functionality across as I haven't had any major issues yet.
To begin with I have ported across my file server which allows me to easily share files and bypass upload restrictions. I have currently got all the functionality there for the file server, but it still needs to be revisited as some of the UI is not clear and clean.

I will be working hard until next time to give you all another update!