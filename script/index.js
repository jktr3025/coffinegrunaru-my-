$(function(){
//팝업 영역
// $(".pop").hide();
$(".pop").slideDown();

//CLOSE X
$(".pop_inner button").click(function(){
    $(".pop").slideUp();
})

//     //header hover
// $(".menu, .nav_bg").hover(function(){
//     $(".sub").css({"display":"block"});
//     $(".nav_bg").css({"display":"block"});
// },function(){
//     $(".sub").css({"display":"none"});
//     $(".nav_bg").css({"display":"none"});
// }) //menu").hover

//header hover
$(".menu, .nav_bg").hover(function(){
$(".sub").stop().slideDown({"display":"block"});
$(".nav_bg").stop().slideDown({"display":"block"});
},function(){
$(".sub").stop().slideUp({"display":"none"});
$(".nav_bg").stop().slideUp({"display":"none"});
}) //menu").hover

//메인 슬라이드
$(".view").slick({
    autoplay:true,
    autoplaySpeed:1000,
    dots:true,
    pauseOnHover:true,
    pauseOnDotsHover:true,
})//view").slick

// 메인 슬라이드 버튼 호버 시 정지
$(".view .slick-arrow").hover(function(){
    $(".view").slick('slickPause')
}, function(){
    $(".view").slick('slickPlay')
}) //.img_slide , .iew .slick-dots li button").hover




//허니버터 브래드 
$(".n_left").slick({
    autoplay:true,
    autoplaySpeed:1500,
    dots:true,
    arrows:false,
    slidesToShow:1,
    slidesToScroll:2,
    pauseOnHover:true,
    pauseOnDotsHover:true,
})//n_left").slick

//sns 탭 
$(".section5_inner ul li").click(function(e){
    e.preventDefault();
    $(".section5_inner ul li").toggleClass("on");
})//section5_inner ul li").click



})//jquery