$(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    $(".s-intro").each(function(){
        var altura = $(window).height() - $(this).height()
        ;
        
        if(windowTop > $(this).offset().top - altura) {
            $(this).addClass("anim-init");
        }
        else {
            $(this).removeClass("anim-init");
        }
    })
});