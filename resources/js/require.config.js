require.config({
    baseUrl: '../resources/',
    paths: {
        Style: 'http://jscss.pindou.com/snacks-h5/misc/css/style',
        'Css-all': 'dist/css/css_all'
    },
    map: {
        '*': {
            'css': 'lib/require-css/css',
            'text': 'lib/text/text'
        }
    },
    // enforceDefine: true,
    urlArgs: 'v=' + new Date().getTime()
});
