
var cgiList = require('cgi-config'),
    cgiUtils = require('cgi-utils'),
    ajaxHandler = require('ajax'),
    mockData = require('mockdata'),
    us = require('../../lib/underscore.js');
    app = getApp();
	handle = {};

handle = {
    getCgis    :   function(){
        var context = app.globalData ||{};
        if( context.cgi ){
            return context.cgi;
        }else{
            var cgiDefault = cgiUtils.regCgis(cgiList);
            allCgi = us.extend({},cgiDefault);
            context.cgi = allCgi;
            return context.cgi  ;
        }
    },
    get:function(cgiName,param,callback,option){
        var reqUrl = handle.getCgis()[cgiName];
        ajaxHandler.get({
            url:reqUrl,
            data:param,
            complete: function(res){
                //mockdata st
                if(res.errCode.toString() === '-1'){
                    var useMock = true;//是否试用mockdata，上线后必须为false
                    if(useMock){
                        console.error("warning:you are using mockdata,please ensure not in prod env");
                        res = mockData[cgiName];
                    }
                }
                //mockdata ed
                var code = res.errCode.toString();
                switch(true){
                    case code === '-1':
                        break;
                    default:
                        if(callback && typeof callback === 'function'){
                            callback(res);
                        }
                        break;
                }
            }
        });
    }
};
module.exports = handle;