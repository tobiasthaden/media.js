module.exports = {
    head: [
        ['link', { rel: 'icon', href: null }]
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

        logo: null,

        nav: [
            { text: "Guide", link: "/guide/" },
        ],

        repo: 'tobiasthaden/media.js',

        sidebar: {
            "/guide/": ["", "toolbar/", "events/", "themes/"],
        },

        sidebarDepth: 2,

        smoothScroll: true,
    },
};
