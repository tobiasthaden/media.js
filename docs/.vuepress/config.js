module.exports = {
    title: "media.js",

    themeConfig: {
        // logo: "/logo.png",

        markdown: {
            lineNumbers: true,
        },

        nav: [
            { text: "Guide", link: "/guide/" },
            { text: "Themes", link: "/themes/" },
            {
                text: "GitHub",
                link: "https://github.com/tobiasthaden/media.js",
            },
        ],

        sidebar: {
            "/guide/": ["", "toolbar", "events", "/themes/"],
        },

        sidebarDepth: 2,
    },
};
