//USER/CASHIER
/* add the cost of an item, have it add to the total */

/*
what is the event that triggers the function?
user presses enter key

steps to take
grab the value the user has entered
store the value into a variable
add that amount to the existing amount
existing amount should be in a variable
capture the sum in a new variable
display this new variable


Steps:

list
pseudocode

//step 1, gets value of input field
//step 2 - let's us see what we are getting
//step 3, prevents for submission
//step 4 - adds item to list
//step 5 - clears input after submission, using val() as a setter
//step 6 - to track total of items
//step 7 - need to move it outside of the function
//step 8 - allows us to add numbers
//step 9 - allows us to use decimals
//step 10 - solve issues of 2 decimal places on item cost
//step 11 - see that this is a string so total needs to be converted to a number as well
//step 12 - need to do .toFixed(2) for item total as well, need for function
use currency format for item and total
//step 13 - use currencyFormat for formatting the total
//step 14 - use currency format to format item cost
//setp 15 - change name so total remains
*/



$("#entry").submit(addItem);  //when the user presses "enter" inside our form, the submit action is triggered.  This line of code "hears" when the submit action of the "entry" form has been triggered

var itemTotal = 0; //step 7, need to move it outside of the function

function addItem(){
  event.preventDefault(); //step 3, prevents for submission

  var itemCost = $("#new-entry").val(); //step 1, gets value of input field
  // var itemTotal = 0; //step 6 - to track total of items
  // itemCost = parseInt(itemCost); //step 8 - allows us to add numbers

  itemCost = parseFloat(itemCost); //step 9 - allows us to use decimals
  // itemCost = itemCost.toFixed(2);   //step 10 - two decimal places
  // itemCost = currencyFormat(itemCost);   //step 14 - two decimal places
  formattedCost = currencyFormat(itemCost);  //step 15 - change name so total remains
  itemCost = parseFloat(itemCost); //step 11 - alert(typeof(itemCost));

  console.log(itemCost); //step 2 - let's us see what we are getting
  
  // $("#entries").append("<tr><td>"+itemCost+"</td></tr>"); // step 4 - adds item to list
  $("#entries").append("<tr><td>"+formattedCost+"</td></tr>"); // step 16 - use formatted

  $("#new-entry").val(""); //step 5 - clears input after submission, using val() as a setter
    itemTotal = itemTotal + itemCost;  //step 12 - this shows need for function
    var formattedTotal = currencyFormat(itemTotal); //step 13, setup the input/output
  
  $("#total").html(formattedTotal);

}

function currencyFormat(number){
    var currency = number;
    currency = currency.toFixed(2);  
    currency = "$" + currency;
    return currency;
}





