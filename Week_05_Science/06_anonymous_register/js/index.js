var total = 0;

$("#entry").submit(function(){
  var item = parseFloat($("#new-entry").val()); //grabs value user entered
  //console.log(item, $("#new-entry").val());
  var formattedItem = curFormat(item);

  $("#entries").append("<tr><td></td><td>"+formattedItem+"</td></tr>");
  total = total + item;   //adds value
  $("#total").html(curFormat(total)) //sets display
  $("#new-entry").val(""); //clears input field
  return false;
});

function curFormat(number){
  number = number.toFixed(2);
  var currency = "$"+number;
  return currency;
}