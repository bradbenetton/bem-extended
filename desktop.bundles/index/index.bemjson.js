({
    block: 'page',
    title: 'index',
    head: [{
        elem: 'css',
        url: '_index.css'
    }],
    scripts: [{
        elem: 'js',
        url: '_index.js'
    }],
    content: [{
        block: 'container',
        mods: {
            nousebg: 'blue'
        },
        content: [{
            block: 'logo',
            image: 'https://download.unsplash.com/photo-1428976365951-b70e0fa5c551',
            url: 'https://www.google.com',
            content: 'Logo'
        }, {
            block: 'fontello',
            name: 'facebook'
        }, {
            block: 'nav',
            mods: {
                shine: 'on'
            },
            content: [{
                block: 'link',
                url: 'somewhere',
                content: 'something'
            }, {
                block: 'link',
                url: 'somewhere',
                content: 'something'
            }]
        }]
    }]
})
