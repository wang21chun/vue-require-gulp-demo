define('App',['Vue', 'VueRouter', 'Index'], function(Vue, VueRouter, Index) {
    // 使用插件
    Vue.use(VueRouter);

    var App = Vue.extend({});

    var router = new VueRouter();

    router.map({
        '/title/:id': {
            component: Index.init()
        },
        '/': {
            component: Index.init()
        }
    })
    router.start(App, '#App');
});
