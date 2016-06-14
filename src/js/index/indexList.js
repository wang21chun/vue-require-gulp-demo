define(['text!indexListHtml', 'Vue', 'jquery'], function(_indexList, Vue, jQuery) {
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
                console.log('list');
                var id = transition.to.params.id
                console.log(id);
                var items = [];
                for (var i = 0; i < id; i++) {
                    items.push({
                        "title": "招牌麻辣小龙虾（小份）",
                        "price": 86.0,
                        "msg": "麻辣口味是招牌，够麻够辣麻辣口味是招牌，够麻够辣麻辣口味是招牌，够麻够辣",
                        "url":"http://i01.pictn.sogoucdn.com/15b1fabb1875eee5"
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
        getIndexList: function() {
            return indexList;
        }

    }



});
