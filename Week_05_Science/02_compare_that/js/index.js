  /**
  Step #1 - Pseudocode
  - User is able to enter value in each field
  - When the compare button is clicked, system should compare the number on the left to the number on the right
  - if left is smaller, display "<"
  - if left is larger, display ">"
  - if they are equal, display "=="
  - otherwise, "n/a"

  What variables would be helpful to have? 
  - a variable for each input field so we can reference them easily
  - a variable/label for the current display/comparison operator

  Step #2 
  - declare our variables
  - think through our event listeners
  - determine functions we will use

  Step #3
  - write them out and test as we go 
  **/
  function compare() {
    var a = $("#a").val();
    var b = $("#b").val();

    a = parseInt(a);
    b = parseInt(b);
    console.log(a,b);

    if (a > b) {
      $("#comparison").html(">");
    } else if (b > a) {
      $("#comparison").html("<");
    } else {
      $("#comparison").html("==");
    }

    console.log(a,b);
  }

  $('#submit').click(compare);