$('a[href^="#"]').click(function(){
    var elmHash = $(this).attr('href');
    var pos = $(eleHash).offset().top;

    $('body,html').animate({scrollTop: pos}, 5);
    return false;
})