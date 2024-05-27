$(document).ready(function () {
    $('.load').fadeOut(3000, function (){
        $('body').css('overflow', 'auto')
    });
});

let headerHeight = $('.navbar').outerHeight();
$(window).scroll(function () { 
    let windowScroll = $(window).scrollTop();

    if (windowScroll >= headerHeight) {
        $('.btn-up').fadeIn(2000);
    }
    else {
        $('.btn-up').fadeOut(1000);
    }
    
})
$('.btn-up').click(function () {
    $('body,html').animate({
        scrollTop:0
    },2000)
});

$("a[href^='#']").click(function (e) { 
    let aHref=$(e.target).attr('href');
    let sectionOffset=$(aHref).offset().top;

    $('html,body').animate({scrollTop:sectionOffset-100},2000)

    // $(window).scrollTop(storyOffset);
});
