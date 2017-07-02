var cgiList = {
    stats:{
        host:"stats.a.dmall.com",
        url:{
            statsOverview:"/stats/i/overview",//关键指标
            statsOverviewEveryday:"/stats/i/overview/everyday",//概览一段时间内数据
            statsActEveryday:"/stats/i/act/everyday",//活动页一段时间内数据接口
            // statsPageEveryday:"/stats/i/page/everyday",//活动详细页一段时间内数据接口
            statsChannel:"/stats/i/channel",
            statsPageOverview:"/stats/i/page/overview",//活动点击：页面数据总体接口
            actSearch:"/stats/i/act/search",
            pageSearch:"/stats/i/page/search",
            actStoreSearch:"/stats/i/act/store",
            pageStoreSearch:"/stats/i/page/store",
            login:"/stats/i/login"
        }
    }
};

module.exports = cgiList;
