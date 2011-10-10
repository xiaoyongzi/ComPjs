(function($) {
    $('#compile-button').click(function() {
        var processingCode = $('#input-field').val();
        var jsCode = Processing.compile(processingCode).sourceCode;
        $('#output-field').val(jsCode);
        $('#output-div').slideDown(400);
    })
})(jQuery);