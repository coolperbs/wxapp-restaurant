/*常量service,保存在缓存中*/
(function(){
	var handle,_fn,cgi,utils;
	handle = {
		getChannel:function(callback){
			var cgiName = 'statsChannel';
			var param={};
			var option={};
			var channelCache = utils.getDataFromCache(cgiName);
			if(channelCache){
				callback(channelCache);
			}else{
				cgi.get(cgiName,{},function(res){
					utils.saveDataToCache(cgiName,res);
					channelCache = utils.getDataFromCache(cgiName);
					callback(channelCache);
				});
			}
		}
	};


	define('medivh/common/data/service/constantService', function( require, exports, module ){
		cgi = require('medivh/common/data/cgi/cgi');
		utils = require('medivh/common/utils/utils');
		module.exports = handle;
	});

})();