(function($){

    var elements = $('.js-tab');

    elements.each(function(){
        var element = $(this);
        var headers = element.find('[data-target]');
        var contents = element.find('[data-tab]');

        // build ––––––
        $([ headers[0], contents[0] ]).addClass('-current');

        // init –––––––
        headers.each(function(){
            var header = $(this);
            header.click(function(e){
                e.preventDefault();

                headers.removeClass('-current');
                header.addClass('-current');

                element.find('[data-tab]').removeClass('-current');
                element.find('[data-tab="' + header.data('target') + '"]').addClass('-current');
            });
        });
    });

})(jQuery);
