define(['text!Html','Vue','css!Css-all','css!Style'], function(html,Vue) {
    var index = Vue.extend({
        template: html,
        data: function() {
            return {
                titles: ['title', 'name', 'mininame','Hole Word',"测试"]
            };
        },
        methods: {
            
        }
    })

    Vue.component('index', index);

    return {
        init: function() {
            return index;
        }
    }

});
