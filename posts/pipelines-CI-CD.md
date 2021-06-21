---
title: 'Pipelines: CI/CD'
date: '2021-02-17'
---

Once again, this month entailed many new and interesting challenges, tools, and techniques for me to learn to work with. The biggest of these this month was to learn how to automate some of my development and deployment workflows using [Github Actions][1]. Along side these CI / CD additions I also moved the repository for this project to my main Github account.

![Actions Log][6]

To start with I just setup basic CI which simply confirmed that PRs and commits to master branch would correctly install and build from a fresh setup. I then supplemented this with setting up a local Github actions runner for that repository which run on my [Raspberry Pi 4][2], as my project is private on Github (allowing me unlimited monthly runtime for my actions). My next step was to build out the CD component, which I decided to use a simple SSH command for in combination with some [Github secrets][3].

![Raspberry Pi 4 Model B][7]

However, this design while simple ended up posing some rather annoying issues. The main issue I was encountering was the difficulty of connecting securely to another machine securely. After significant research I found this action on the Github marketplace called [SSH Action][4]. This library allows you to execute commands via SSH in a Github actions workflow. This is particularly useful as it means I do not have to change any of my existing deployment processes as I can simply automate my normal work exactly as it I do it manually.

There was one small issue with this Github action, the docker image the bulk of the execution was done in was not available for all platforms, most importantly ARMv8/ARM64/AArch64 which I use in my 64-bit Raspberry Pi. Since [appleboy][5] provides it with a MIT license, so I forked it and substituted the problematic docker image for an equivalent one with ARM support.

![SSH Remote Commands][8]

With a bit more work I was able to add build dependency caching and a simple deployment activity. The process was simple just connect to the server, update the repository, install dependencies, lint, build, test, and switch to the new version. This workflow as simple as it is, has already saved me lots of time that would have been spent logging on to servers and running tests.

Overall, I feel like while I have only taken another small dip into the DevOps world, I have learned a lot. This has encouraged me to try my hand are more things in this space. Potentially, I might setup a mock / staging server in the coming months.

Until then keep learning!

<style>
    img {
        display: block;
        margin: auto;
        max-width: 100%;
    }
</style>

[1]: https://github.com/features/actions "Github Actions Product Page"
[2]: https://github.com/appleboy/ssh-action "Original SSH-Action Project by Appleboy on Github"
[3]: https://www.raspberrypi.org/products/raspberry-pi-4-model-b "Raspberry Pi Foundation's Product Page"
[4]: https://docs.github.com/en/actions/reference/encrypted-secrets "Github Secrets Documentation"
[5]: https://github.com/appleboy "Appleboy's Github"
[6]: /images/pipelines_ci_cd/actions_logs.png "Github Actions History"
[7]: https://www.raspberrypi.org/homepage-9df4b/static/a6331df010eb56a7fafb04466af3f1aa/e6ab8/3a15d4da-46e3-4940-8be6-9fc7d201affe_RPi_4B_FEATURED.jpg "Raspberry Pi 4 Model B"
[8]: /images/pipelines_ci_cd/ssh_action.png "SSH Action"
