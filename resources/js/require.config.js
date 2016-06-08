require.config({
    baseUrl: './',
    paths: {
        'Css-all': 'dist/css/css_all'
    },
    map: {
        '*': {
            'css': 'dist/js/css',
            'text': 'dist/js/text'
        }
    },
    // enforceDefine: true,
    urlArgs: 'v=' + new Date().getTime()
});
