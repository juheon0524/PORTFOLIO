$(function(){
    // 인터파크
    $("#interpark_box").mouseenter(function(){
        $("#interpark > li").stop().animate({marginTop:"-570px"},2000)
    }).mouseleave(function(){
        $("#interpark > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // Discovery
    $("#Discovery_box").mouseenter(function(){
        $("#Discovery > li").stop().animate({marginTop:"-1465px"},4000)
    }).mouseleave(function(){
        $("#Discovery > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // Taste.it
    $("#Tasteit_box").mouseenter(function(){
        $("#Tasteit > li").stop().animate({marginTop:"-1942px"},4000)
    }).mouseleave(function(){
        $("#Tasteit > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // MarketKurly
    $("#MarketKurly_box").mouseenter(function(){
        $("#MarketKurly > li").stop().animate({marginTop:"-1320px"},4000)
    }).mouseleave(function(){
        $("#MarketKurly > li").stop().animate({marginTop:"0px"},3000)
    })
})
