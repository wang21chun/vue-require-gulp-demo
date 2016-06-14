define(['text!indexHeadHtml', 'Vue', 'jquery'], function(_indexHead, Vue, jQuery) {
	require(['css!dist/css/css_all.css']);
    var vUtil = Vue.util;
    var indexHead = Vue.extend({
        template: _indexHead,
        data: function() {
            return {
                cityName: "北京",
                adds: "朝阳区东直门",
                isShow: false,
                index: 0,
                menus: [],
                translate: "translate(0px,0px)"
            }
        },
        methods: {
            showMenu: function(off) {
                this.isShow = off;
                console.log(this.$root.$data);
            },
            goTo: function(path, index, event) {
                this.isShow = false;
                window.router.go(path);
                this.nav(index, event);
            },
            nav: function(index, event) {
                this.index = index;
                var w = $(event.target).width() - 20 + 30;
                this.translate = "translate(-" + index * w + "px,0px)";
            },
            outRangeOpen: function() {
                var l = $("#scrollerNav").find('ul').children().length;
                console.log("ready  " + l);
            }
        },
        route: {
            data: function(transition) {
                console.log("size:" + this.menus.length);
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

    return {
        getIndexHead: function() {
            return indexHead;
        }
    }
});
