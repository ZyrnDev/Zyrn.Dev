---
title: 'Autumn Advances'
date: '2021-04-24'
---

In the past month I have been reasonably busy, so I didn't start a new project for once, and instead I just worked on my website a bit more. Most of my work revolved around refining what I already had and improving the development workflow further.

The first thing I targeted was responsiveness of the website. This was important as the old design was created with a mobile first-approach, but since the website wasn't responsive this didn't look good on desktop. So, I started by making the website responsive, with a clear separate layout for the desktop version. I achieved this by using [react-responsive][1] which allows you to use CSS media queries as React.js hooks which I implemented in two different ways. Firstly, this method (inspired by [Ben Awad's DogeHouse][2]) allowed me display extra content in a second column if the viewport was large enough. Secondly, I reduced the width of page content relative to the viewport when the viewport was larger.

![Mobile Layout][5]
![Desktop Layout][6]

The next major component I worked on was setting up a staging site. This was motivated by my desire to allow some of my friends to give feedback on some of my changes, before I pushed the code to production without requiring them to setup a development environment. To do this I added a staging/development CI/CD pipeline to deploy code to a [staging site][3].

While I was already updating the workflows for this project, I added automated builds & testing on all branches that didn't already have it. However, this process tended to be a bit too slow for a [TDD Red, Green, Refactor][4] approach, so I added dependency caching to the build process. This allowed me to build the faster, more reliable, and consistent code.

![Red, Green, Refactor TDD][7]

Until next time, happy coding!

<style>
    article img {
        display: block;
        margin: auto;
        max-width: 100%;
        max-height: 25rem;
    }
</style>

[1]: https://www.npmjs.com/package/react-responsive "NPM react-responsive"
[2]: https://github.com/benawad/dogehouse "DogeHouse Github"
[3]: https://staging.zyrn.dev "Zyrn.Dev Staging Environment"
[4]: https://www.codecademy.com/articles/tdd-red-green-refactor "Test-Driven Development: Red, Green, Refactor"
[5]: /images/autumn_advances/single_column.png "Mobile Layout"
[6]: /images/autumn_advances/two_columns.png "Desktop Layout"
[7]: https://content.codecademy.com/programs/tdd-js/articles/red-green-refactor-tdd.png "Red, Green, Refactor"