(function($) {
    $('#compile-button').click(function() {
        var processingCode = $('#input-field').val();
        var jsCode = Processing.compile(processingCode).sourceCode;
        $('#output-field').val(jsCode);
        $('#output-div').slideDown(400);
    });
    $('#run-button').click(function() {
        var processingCode = $('#input-field').val();
        var jsCode = Processing.compile(processingCode).sourceCode;
        var pjs = new Processing($('.run-canvas')[0], processingCode);
        $('#run-div').slideDown(400);
    });
    $('#close-button').click(function() {
        $('#run-div').slideUp(400, function() {
            $('.run-canvas').remove();
            $('#run-div').prepend('<canvas class="run-canvas"></canvas>');
        });
    });
})(jQuery);