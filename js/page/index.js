
var swiper = new Swiper('.banner-roll', {
    pagination: '.banner-dot',
    autoplay : 5000,
    paginationClickable: true
});

var swiper = new Swiper('.items-roll1', {
    slidesPerView: 2,
    nextButton: '.items-roll1-next',
    prevButton: '.items-roll1-prev',
});

var swiper = new Swiper('.volume-roll', {
    direction: 'vertical',
    slidesPerView : 6,
    autoplay : 1500,
    paginationClickable : true,
    spaceBetween: 6,
});


$(".coupon .close").click(function(){
  $(".coupon .img").hide();
  $(this).hide();
});

$(".gotop a").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });

$("#orders-tip .close").click(function(){
  $("#orders-tip").hide();
  $(this).hide();
});
