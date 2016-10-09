//Implement the red light using jQuery. Don't forget to add the script tags.
/*
  Play with:
  .click
  .slideToggle() 
  .hide()
  .show()
  .slideUp()
  .slideDown()
  .children()
  .attr()

  For Example:
*/
  $(function(){
    $('#saveButton').click(save)

    function save() {
      $('#saveButton').slideToggle()
    }

    // function save() {
    //   $('.alert').slideToggle()
    //   $('li').attr('style','text-decoration: underline;');
    //   console.log("Just did something");
    // }

    $('ul').children().css('color','gray');
      });