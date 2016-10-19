/**
 * @file [index]
 * @author [ctrlf]
 */


$(function() {


    // 锚链接
    $(window).resize(function(event) {
        $("#lift").css({ left: ($(".globalwidth").offset().left - 40) });
    });

    $("#lift>li").hover(function() {
        var text = $(this).attr("data-title");
        var color = $(this).attr("data-color");
        $(this).css({ "width": 80, "background-color": color }).append("<span>" + text + "</span>");

    }, function() {
        $(this).css({ "width": 40, "background-color": "transparent" }).find("span").remove();
    });

    $("#lift>li").click(function() {
        var em = $(this).attr("data-floor");
        $("html,body").animate({
            scrollTop: $("." + em).offset().top
        });
    });



    //搜索
    var search = $(".search").find('input');

    // 搜索
    search.focus(function(event) {
        var s = $(this).val();
        var st = $(this).attr('opp', '创意文具');
        $(this).css('color', '#000');
        if (s === st) {
            $(this).val("");
        }
    });

    search.blur(function(event) {
        var s = $(this).val();
        //设取值同时起作用
        var st = $(this).attr('opp');
        if (!s.length > 0 || s === st) {
            $(this).css('color', '#ccc');
            $(this).val(st);
        }
    });

    //搜索2
    $(window).scroll(function() {
        // $("#search").offset().top+ $("#search").height())
        // 父盒子高度+自身高度=偏移高度
        var offsettop = parseInt($(".header-top").offset().top);
        var height = parseInt($(".header-top").height());
        console.log(offsettop, height, offsettop + height < $(document).scrollTop());

        if (offsettop + height < $(document).scrollTop()) {
            // if ($("#newsearchbox").has($("#oldsearchbox"))) {
            $("#oldsearchbox").appendTo("#newsearchbox");
            $("#searchbox").show();
            // }
        } else {
            // if (!$('.header-top').has($("#oldsearchbox"))) {
            $("#oldsearchbox").appendTo(".header-top");
            $("#searchbox").hide();
            // }
        }
    });

    //菜单
    $(".header-bottom ul li").mouseenter(function(event) {
        $(this).addClass('current').find('dl').show();
        $(this).siblings().removeClass('current').find('dl').hide();
    });
    $(".header-bottom ul li").mouseleave(function(event) {
        $(this).removeClass('current').find('dl').hide();
    });
    //轮播
    var opts = {
        boxh: 435, //盒子的高度
        w: 1000, //盒子的宽度
        h: 435, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 18, //控制按钮宽度
        controlsH: 18, //控制按钮高度
        radius: 9 //控制按钮圆角度数
    };
    $(".slider").tyslide(opts);

    //其他轮播
    var opts1 = {
        boxh: 214, //盒子的高度
        w: 326, //盒子的宽度
        h: 214, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 40, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 5 //控制按钮圆角度数
    };
    $(".ebook-slider").tyslide(opts1);

    var opts2 = {
        boxh: 343, //盒子的高度
        w: 428, //盒子的宽度
        h: 343, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 5 //控制按钮圆角度数
    };
    $(".tap").tyslide(opts2);
    //图书右边效果
    $(".ebook-title>ul>li").mouseenter(function() {
        var index = $(".ebook-title>ul>li").index(this);
        $(".ebook-left .tapcontent").hide().eq(index).show();
        $(this).addClass("current").siblings().removeClass("current");
    });



    $(".ebook-right>ul>li").mouseenter(function() {
        $(this).addClass('current').find("div").show();
        $(this).siblings().removeClass('current').find("a").show();
        $(this).siblings().find("div").hide();
        $(this).find("a").eq(0).hide();
    });

    //推广
    $(".content-extend>ul>li").hover(function() {
        $(this).addClass("current");
    }, function() {
        $(this).removeClass("current");
    });

    $(".extentd-title>.etcontrols>span").click(function() {
        $(this).addClass("current").siblings().removeClass();
        var index = $(".extentd-title>.etcontrols>span").index(this);
        $(".extentd-content").hide().eq(index).fadeIn();
    });

    //返回顶部
        $(".gototop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, {
            duration: 3000, //动画执行的时间
            //easing:"easeInOutQuint",//体验1
            easing: "easeInBounce", //体验1
            complete: function() {
                //动画执行完后的回调函数
            }
        });
    });

    //二维码
    $("#twocode>li.two").hover(function() {
        $(this).find("div").animate({
            "left": "-100px",
            "opacity": "1"
        });
    }, function() {
        $(this).find("div").css({ "left": "0", "opacity": "0" });
    });


});
