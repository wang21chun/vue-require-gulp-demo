define(['text!indexPageHtml', 'Vue', 'jquery'], function(_indexPage, Vue, jQuery) {

    var indexPage = Vue.extend({
        template: _indexPage,
        data: function() {
            return {
                menuTypes: [{
                    "name": "新品推荐",
                    items: [{
                        "title": "水晶虾仁",
                        "price": 200
                    }, {

                        "title": "水晶虾仁",
                        "price": 200
                    }, {

                        "title": "水晶虾仁",
                        "price": 200
                    }, {
                        "title": "水晶虾仁",
                        "price": 200
                    }]
                }],
                branner: "images/banner.png",
                icons: [{
                    "name": "积分",
                    "src": ""
                }, {
                    "name": "会员",
                    "src": ""
                }, {
                    "name": "钱包",
                    "src": ""
                }, {
                    "name": "抽奖",
                    "src": ""
                }]
            }

        },
        methods: {},
        route: {
            data: function() {
                console.log("page");
            }
        }
    });



    return {
        getIndexPage: function() {
            return indexPage;
        }
    }



});
