define([],function(){
	var public = {};
	return {
		setObj:function(key, value){
			public[key] = value;
		},
		getObj:function(key){
			return public[key];
		}

	}
})