module.exports = {
    head: [
        ['link', { rel: 'icon', href: 'logo.png' }]
    ],

    title: "media.js",

    markdown: {
        lineNumbers: true,
    },

    themeConfig: {
        displayAllHeaders: true,

        docsDir: 'docs',

        editLinks: true,

        lastUpdated: true,

        logo: 'logo.png',

        nav: [
            { text: "Guide", link: "/guide/" },
            { text: "Reference", link: "/api/" },
        ],

        repo: 'tobiasthaden/media.js',

        sidebar: {
            "/api/": ["", "player/", "toolbar/", "control/", "helpers/"],
            "/guide/": ["", "toolbar/", "events/", "themes/"],
        },

        sidebarDepth: 2,

        smoothScroll: true,
    },
};
