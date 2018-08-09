(function($){

    $('.input-label').each(function(){
        var element = $(this);
        element.find('.input').on('focus blur', function(){
            if(this.value != ''){
                element.addClass('-filled');
            }else{
                element.removeClass('-filled');
            }
        });
    });

    $('.js-form').submit(function (e) {
        e.preventDefault();

        var element = $(this);
        var method = this.getAttribute('method') || 'post';
        var submit = $(this).find('[type="submit"]');

        var valid = true;
        element.find("[required]").each(function () {
            var parent = $(this).parent();
            if (!this.checkValidity()) {
                parent.addClass('-invalid');
                valid = false;
            } else {
                parent.removeClass('-invalid');
            }
            $(this).on('change', function () {
                parent.removeClass('-invalid');
            });
        });

        if (!valid) {
            // sweetAlert(App.labels.formErrorTitle, App.labels.formErrorMessage, "error");
            console.log('invalid', element.find('.-invalid'));
            return;
        }

        var action = this.action;
        var data = new FormData();
        $('input, textarea, select').each(function () {
            data.append(this.name, this.value);
        });

        submit.attr('disabled', 'disabled');
        $.ajax({
            type: method,
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            dataType: 'json',
            url: action,
            success: function (res) {
                submit.removeAttr('disabled');
                if (res.state == 'success') {
                    swal({
                        title: App.labels.formSuccessTitle,
                        text: App.labels.formSuccessMessage,
                        type: "success"
                    },
                    function () {
                        window.location.reload();
                    });
                } else {
                    swal({
                        title: App.labels.formErrorTitle,
                        text: App.labels.formServerErrorMessage,
                        type: "error"
                    },
                    function () {
                    });
                }
            },
            error: function(xhr, err){
                submit.removeAttr('disabled');
                console.error('error',err);
            },
            then: function(){
                console.log('then');
                submit.removeAttr('disabled');
            }
        });
        return false;
    });


})(jQuery);
