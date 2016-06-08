define(['text!indexHeadHtml', 'text!indexPageHtml', 'text!indexListHtml', 'Vue', 'jquery'], function(_indexHead, _indexPage, _indexList, Vue, jQuery) {
    var vUtil = Vue.util;
    var indexHead = Vue.extend({
        template: _indexHead,
        data: function() {
            return {
                cityName: "北京",
                adds: "朝阳区东直门",
                isShow: false,
                index:0,
                menus: [],
                translate:"translate(0px,0px)"
            }
        },
        methods: {
            showMenu: function(off) {
                this.isShow = off;
            },
            goTo: function(path, index, event) {
                this.isShow = false;
                window.router.go(path);
                this.nav(index, event);
            },
            nav:function(index, event){
                this.index = index;
                var w = $(event.target).width()-20+30;
                this.translate = "translate(-"+index*w+"px,0px)";
            },
            outRangeOpen: function() {

            }
        },
        route: {
            data: function(transition) {
                var menus = [{
                    "name": '首页',
                    "id": 1
                }, {
                    "name": '麻辣海鲜',
                    "id": 2
                }, {
                    "name": '清蒸系列',
                    "id": 3
                }, {
                    "name": '港式点心',
                    "id": 4
                }, {
                    "name": '生鱼片',
                    "id": 5
                }, {
                    "name": '猪肉',
                    "id": 6
                }, {
                    "name": '麻花',
                    "id": 7
                }, {
                    "name": '小馒头',
                    "id": 8
                }, {
                    "name": '蜂蜜',
                    "id": 9
                }];
                return {
                    menus: menus
                };
            }
        }
    });

    Vue.component('indexHead', indexHead);

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
        methods: {}
    });


    var indexList = Vue.extend({
        template: _indexList,
        data: function() {
            return {
                items: []
            }
        },
        methods: {

        },
        route: {
            data: function(transition) {
                var id = transition.to.params.id
                console.log(id);
                var items = [];
                for (var i = 0; i < id; i++) {
                    items.push({
                        "title": "招牌麻辣小龙虾（小份）",
                        "price": 86.0,
                        "msg": "麻辣口味是招牌，够麻够辣麻辣口味是招牌，够麻够辣麻辣口味是招牌，够麻够辣"
                    });
                }
                return {
                    items: items
                };
            }
        }
    });

    Vue.component('indexList', indexList);

    return {
        getIndexHead: function() {
            return indexHead;
        },
        getIndexPage: function() {
            return indexPage;
        },
        getIndexList: function() {
            return indexList;
        }

    }



});
