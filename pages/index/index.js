//index.js
//获取应用实例
var query = require('../../common/query/query');
var app = getApp()
Page({
    data: {
        motto: 'Hello World',
        userInfo: {}
    },
    //事件处理函数
    bindViewTap: function() {
    },
    onLoad: function () {
        var that = this
        query.get('statsOverview',{aa:11},function(res){
            console.log(res);

        });

    }
})
