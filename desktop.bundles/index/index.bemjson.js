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
            block: 'fontello',
            name: 'facebook'
        }]
    }]
})
