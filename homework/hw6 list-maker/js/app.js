// Create a separate function, called appendItem, that accepts one argument 'item' that is called when #clickme is clicked and appends the <li> to #list
// After an 'item' is added, the text inside #item should clear
$(document).ready(function () {

	$('#clickme').click(function() {

		var text = $('#item').val();
		var output = '<li>' + text + '</li>';

		if ($('#item').val() == ''){
      		alert('Please enter an item!');
      		
		} else {
			$('#list').append(output);
	        $('span').css('display', 'inline-block').fadeOut(2000);
		}

		$('#item').val('');
        $('#item').focus();

// Legendary Bonus: Remove individual <li> elements when they are clicked (hint: use $(this) and .remove())
	$('li').click(function() {
		$(this).remove();
        $('#item').focus();
	})

	// 'LEGENDARY' Version ???
	// $('ul').on('click', 'li', function() {
	// $(this).remove();
	// })
	
	})

})


// Instructions

// Requirements: Create a separate function, called appendItem, that accepts one argument, item, that is called when #clickme is clicked and appends the <li> to #list
// Users should be able to:
// 1. Enter an item into #item
// 2. Click on #clickme
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #item should clear


// Bonus: Focus on #item after the item is added (hint: look up "jquery focus")
// Intermediate Bonus: If the value of #item is blank, do not append the <li> and alert user (hint: use an if/else statement)
// Legendary Bonus: Remove individual <li> elements when they are clicked (hint: use $(this) and .remove())

	// 1. Attach a .click() event to #clickme; attach an anonymous function to the .click()
	// 1A. This anonymous function should create a variable, newItem equal to the value of #item
	// 1B. This anonymous function should call a separate function, appendItem, and pass it the variable newItem
	// 1C. This anonymous function should then clear the text inside of #item

	// 2. Write the appendItem function here

// console.log('js loaded');
// console.log('soutoira');
// console.log(output);