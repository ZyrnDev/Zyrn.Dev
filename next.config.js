
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// async function headers()​ {​
//     ​return​ ​[​
//       ​{​
//         ​source​: ​'/:all*(svg|jpg|png)'​,​
//         ​locale​: ​false​,​
//         ​headers​: ​[​
//           ​{​
//             ​key​: ​'Cache-Control'​,​
//             ​value​: ​'public, max-age=9999999999, must-revalidate'​,​
//           ​}​,
//         ​]​,​
//       ​}​,​
//     ​]​;
// ​}​

const headers = async () => {
    return [
        {
            source: '/:all*.(svg|jpg|jpeg|png|webp)',
            locale: false,
            headers: [
                {
                    key: "Cache-Control",
                    value: "public, max-age=9999999999, must-revalidate",
                },
            ],
        },
        {
            source: '/_next/image(.*)',
            locale: false,
            headers: [
                {
                    key: "Cache-Control",
                    value: "public, max-age=9999999999, must-revalidate",
                },
            ],
        },
    ];
};

module.exports = (phase, { defaultConfig }) => {
    const enviroment = process.env.NODE_ENV || "development";

    const baseConfig = {
        ...defaultConfig,
        poweredByHeader: false,
        reactStrictMode: true, // Good Practice apparently
        headers: headers,
    };

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
        /* development only config options here */
            ...baseConfig
        }
    }

    return {
        /* config options for all phases except development here */
        ...baseConfig
    }
}