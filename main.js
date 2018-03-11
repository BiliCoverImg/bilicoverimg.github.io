/*
"title": "顯示在候選列表",
    "urlLeft": "關鍵字左邊的網址",
    "urlRight": "關鍵字右邊的網址"
*/
var list = [
    {
        "title": "Google Play搜尋",
        "urlLeft": "https://play.google.com/store/search?hl=zh-TW&q=",
        "urlRight": "&c=apps"
    },
    {
        "title": "Google Play包名",
        "urlLeft": "https://play.google.com/store/apps/details?id=",
        "urlRight": ""
    },
    {
        "title": "酷安搜尋",
        "urlLeft": "https://www.coolapk.com/search?q=",
        "urlRight": ""
    },
    {
        "title": "酷安包名",
        "urlLeft": "https://www.coolapk.com/apk/",
        "urlRight": ""
    },
    {
        "title": "Apkpure搜尋",
        "urlLeft": "https://apkpure.com/cn/search?q=",
        "urlRight": ""
    },
    {
        "title": "Apkpure包名",
        "urlLeft": "https://apkpure.com/cn/",
        "urlRight": ""
    },
    {
        "title": "APK-DL搜尋",
        "urlLeft": "https://apk-dl.com/search?q=",
        "urlRight": ""
    },
    {
        "title": "APK-DL包名",
        "urlLeft": "https://apk-dl.com/",
        "urlRight": ""  
    },
    {
        "title": "應用寶搜尋",
        "urlLeft": "http://sj.qq.com/myapp/search.htm?kw=",
        "urlRight": ""
    },
    {
        "title": "應用寶包名",
        "urlLeft": "http://sj.qq.com/myapp/detail.htm?apkName=",
        "urlRight": ""
    },
    {
        "title": "豌豆莢搜尋",
        "urlLeft": "http://www.wandoujia.com/search?key=",
        "urlRight": "&source=apps"
    },
    {
        "title": "豌豆莢包名",
        "urlLeft": "http://www.wandoujia.com/apps/",
        "urlRight": ""
    },
    {
        "title": "應用匯搜尋",
        "urlLeft": "http://www.appchina.com/sou/?keyword=",
        "urlRight": ""
    },
    {
        "title": "應用匯包名",
        "urlLeft": "http://www.appchina.com/app/",
        "urlRight": ""
    },
    {
        "title": "PP助手搜尋",
        "urlLeft": "https://www.25pp.com/ios/search_app_0/",
        "urlRight": "/" 
    },
    {
        "title": "手機樂園",
        "urlLeft": "http://s.shouji.com.cn/cse/search?q=",
        "urlRight": "&entry=1&s=10599229482612753267&stp=1&nsid=2" 
    },
    {
        "title": "百度手機助手",
        "urlLeft": "http://shouji.baidu.com/s?wd=",
        "urlRight": "" 
    },
    {
        "title": "最美應用",
        "urlLeft": "http://zuimeia.com/search/?keyword=",
        "urlRight": "" 
    },
    {
        "title": "A2ZAPK搜尋",
        "urlLeft": "https://a2zapk.com/Search/",
        "urlRight": "/" 
    }
];

$(document).ready(function () {
    init();
    $(".select-search").hide();
    $("#keyword").bind("input propertychange change", function (event) {
        if ($('#keyword').val().length == 0) {
            $(".select-search").hide();
        } else {
            $(".select-search").show();
        }
    });
    $(document).on("click", ".search-web", function () {
        var index = $(this).index();
        var urlL = list[index].urlLeft;
        var urlR = list[index].urlRight;
        if ($('#keyword').val().length != 0) {
            var urlOpen = urlL + $('#keyword').val() + urlR;
            window.open(urlOpen);
        }
    });

});

function init() {
    for (var i = 0; i < list.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "search-web");
        li.innerHTML = list[i].title;
        $(".search-ul")[0].appendChild(li);
    }
}
