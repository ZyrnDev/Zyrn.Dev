---
title: 'A Fluttering Experience'
date: '2020-11-18'
---

<style>
    div.screenshot-image-view {
        text-align: center;
    }
    div.screenshot-image-view img {
        max-height: 600px;
        padding: 2px;
        border-radius: 40px;
    }
</style>

This month there were several changes I wanted to make to my daily habits, such as getting back into a good physical workout routine. One of my main problems previously was I only kept up my new workout routine for a few weeks before I would stop again. So, seeing this problem I went about building an app to do schedule reminders for various things, by sending push notifications straight to my phone.

To develop this, I first started looking at different tools, frameworks, and languages for mobile (Android) development. One of my main criteria for selection was how simple the support to hand push notifications was going to be. In the end I decided on using applications framework which supports mobile and web using <a href="https://dart.dev/">Dart</a>.

<div class="screenshot-image-view">
    <img src="/images/zyrn_notifications/home_screen.png"/>
    <img src="/images/zyrn_notifications/settings_screen.png"/>
</div>

Now that my frontend was decided, I need a backend and database, for this I used <a href="https://nodejs.org/">Node.js</a> with <a href="https://expressjs.com/">Express.js</a> and <a href="https://www.sqlite.org/index.html">SQLite3</a> as there is good support for using Google’s services in Node.js namely their push notifications via <a href="https://firebase.google.com/">Firebase</a>. SQLite3 was a lightweight SQL database which I had heard of and wanted to try out for a small project such as this. Combined I built a simplistic REST API with authentication via pre-shared tokens. This meant I could be more relaxed on security as I did not have to setup a whole authentication system and carefully ensure that there were no SQL injection vulnerabilities as I could choose who I distributed access to.

While working on this I was able to start learning Dart, a new language to me while making a basic application which allowed me to subscribe to be notified about various topics when required.

Overall a great learning experience, if you are interested in getting access to <a href="https://play.google.com/store/apps/details?id=dev.zyrn.notifications">the app</a> or checking out the source code make sure to contact me.

I’ll see you again next month, until then happy coding!
