/* 

USER STORY - users will be able to...
- add a task
- delete a task
- indicate task completion (check/uncheck)
- modify/edit item 
- clear checked items
- clear all items
- view number of completed / number of total tasks

PSEUDOCODE - how will I ( as the computer) implement this?

ADD ITEM
- detect when add button is clicked
- grab value of input text field
- create <li>  
	- Count the number of items jQuery returns when we select <li> - remember, jQuery returns the contents of our selections to us in an array.  
	- Assign the number from the last step as the value of the checkbox's "id" field and the value of the "for" attribute of the <label>
	- place checkbox in list
	- place text of user's input in the <label></label> element
	- add edit button/link (with .edit class)
	- delete button/link (with .delete class)
- add this entire <li> to our <ul>
- clear out input text field, set it to an empty string


EDIT ITEM
- grab the current value of the task
- replace the <label> with an <input type="text"> field with a value set to the text of the task that was clicked on, and the input's "class" attribute set to the value of the <label>'s "for" attribute 
- when a user moves away from the editable field ("blur"), save the item by replacing the <input> field with a <label></label> element.  The <label> should have its "for" attribute set to the <input> field's class name,and its value should be the recently edited <input> field's text

DELETE ITEM
- detect when the delete button is clicked
- figure out which list item the delete button is within
- remove that list item from the <ul>

INDICATE COMPLETION
- detect when the checkbox is checked/un-checked
- update the number of completed/total tasks by running our updateCount() function

CLEAR COMPLETED
- detect when the clear completed button is clicked
- find all of the checked off checkboxes, and for each one, remove the <li> it is contained within

CLEAR ALL
- detect when the clear all button is clicked
- empty the <ul> element, so there are no <li> elements inside

VIEW NUMBER OF COMPLETED TASKS/TOTAL TASKS
- count the number of checked off checkboxes
- count the number  of <li>s
- display these values to the page

*/


$('document').ready(function(){
	//we use the following format so we we can work with elements added to the DOM after our page loads,
	//$("element that exists on page load").on("event", "element2", functionName) where "event" is element2's event ("click, change etc") we are listening for, "element2" can be an element that was added after DOM loaded initially, and "functionName" is what we want it to do when it hears that event
	//detects when form is submitted
	$("form").on("submit",submitForm);

	//detects when checkbox changes
	$("ul").on("change", "input[type=checkbox]", toggleComplete);

	//detects when edit button clicked
	$("ul").on("click", ".edit", editMode);

	//detects when user moves away (referred to as "blur") from a task's editable text field (in edit mode)
	$("ul").on("blur", "#edit-field", autoSave);

	//detects when an item is to be removed
	$("ul").on("click", ".remove", removeItem);

	//detects when clear complete is clicked
	$(".clear-complete").click(clearComplete);

	//detects when clear all is clicked
	$(".clear-all").click(clearAll);




	function submitForm(){ //on form submission
		event.preventDefault();
		var todo = $("input[type=text]").val(); //todo is the todo from the input
		var todoIdx = $("section").find(".todo").length; //.find(".todo").length gets the number of items with the class of "todo", then sets index value to the number of current items.  
		var li = '<li class="todo"><input id='+todoIdx+' type="checkbox"><label for='+todoIdx+' class="text">'+todo+'</label><a href="#" class="edit">edit</a> | <a href="#" class="remove">remove</a></li>'; // refer to pseudocode above for details
		$("ul").append(li); //adds above text string to ul
		$("input[type=text]").val(""); //clears the input field

		updateCount(); //updates the counter
	}

	 function toggleComplete(){ 
		updateCount();
	}

	function editMode(){ // refer to pseudocode above for details
		var item = $(this).parent().find("label"); 
		console.log();
		$(item).replaceWith('<input class="'+item.attr("for")+'" id="edit-field" type="text" value="'+item.text()+'">');
	}

	
	function removeItem(){
		event.preventDefault();
		$(this).parent().remove();  //gets the edit button's parent (the list item), and removes it
		updateCount();
	}

	function autoSave (){
		var val = $(this).val(); /* $(this) refers to the input field that our "blur" event listener heard */
		var id = $(this).attr("class");
		$(this).replaceWith("<label for='"+id+"'>"+val+"</label>"); //replaces edit input field with this label
	}


	function updateCount(){
		var complete = $("input[type=checkbox]:checked").length; //assigns the variable "complete" to the number of items checked off checkboxes
		$(".complete-count").text(complete); //updates the text for number of completed items
		var total = $("li").length;  //assigns variable total to the number of list items 
		$(".total-count").text(total); //updates the total count
	}

	function clearAll(){	
		$("ul").empty(); //using empty() instead of remove(), becuase we want to leave the element itself, and only remove its children (<li>s)
		updateCount(); 
	}

	function clearComplete(){	
		$("input[type=checkbox]:checked").parent().remove(); //finds checked off checkboxes, and removes their coresponding list element 
		updateCount(); 
	}




})