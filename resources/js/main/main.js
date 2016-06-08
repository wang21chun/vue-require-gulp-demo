define('App', ['Vue', 'VueRouter', 'Index'], function(Vue, VueRouter, Index) {
    // 使用插件
    Vue.use(VueRouter);

    var App = Vue.extend({});

    var router = new VueRouter();

    router.map({
        '/': {
            component: Index.getIndexHead(),
            subRoutes: {
                '/':{
                    component: Index.getIndexPage()
                },
                '/index': {
                    component: Index.getIndexPage()
                },
                '/items/:id': {
                    component: Index.getIndexList()
                }
            }
        }
    })
    router.start(App, '#App');
    window.router = router;
});
