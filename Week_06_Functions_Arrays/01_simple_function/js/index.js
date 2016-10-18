$('#performFunction').click(myMathFunction);

function myMathFunction()
{
    number = parseInt($('#number').val());

    result = number * number;

    $('#result').html(result);
}