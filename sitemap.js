/* eslint-disable no-undef */
const excludedPaths = [
    /\/(files)|(uploads)/,
    /\/blog\/unreleased.*/
];
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://zyrn.dev',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [ '/api/', '/uploads/', '/blog/unreleased/' ],
            },
        ]
    },
    transform:  async (config, path) => {
        if (excludedPaths.some(excludedPath => excludedPath.test(path))) {
            return null;
        }
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    }
}