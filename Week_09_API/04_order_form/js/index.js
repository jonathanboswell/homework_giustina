$('.alert').hide();
$(function(){
    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#orderButton').click(function(clickEvent){
        console.log("Order something", $('#order').val());
        
        var requestData = {
            "order": $('#order').val(),
            "quantity": $('#quantity').val()
        }

        $.post("http://headshot.mockable.io/menu", JSON.stringify(requestData), function(response) {
            var message = response.message;
            var quantity = response.quantity;

            console.log(quantity);

            $('#orderMessage').html(message);
            $('#quantityMessage').html(quantity);
            $('.alert').show();
        });
    });
});