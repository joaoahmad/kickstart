(function($){

    var element = $('.js-hamburger');
    element.click(function(e){
        e.preventDefault();
        $('body').toggleClass('-menu-open');
    });

})(jQuery);
