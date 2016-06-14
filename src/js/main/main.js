define('App', ['Vue', 'VueRouter','VueAnimatedList','IndexHead', 'IndexList', 'IndexPage'], function(Vue, VueRouter,VueAnimatedList,IndexHead, IndexList, IndexPage) {
    // 使用插件
    Vue.use(VueRouter);
    Vue.use(VueAnimatedList);

    var App = Vue.extend({
        data: function() {
            return initData;
        }
    });

    var router = new VueRouter({
        hashbang: true, 
    });

    router.map({
        '/': {
            component: IndexHead.getIndexHead(),
            subRoutes: {
                '/': {
                    component: IndexPage.getIndexPage()
                },
                '/index': {
                    component: IndexPage.getIndexPage()
                },
                '/items/:id': {
                    component: IndexList.getIndexList()
                }
            }
        }
    })
    router.start(App, '#App');
    window.router = router;
});
