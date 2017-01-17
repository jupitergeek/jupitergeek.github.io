// alert('This sucks almost as much as a marquee.');

// document.write('Writing to the document!');

var firstNum = 10 * 10;
var myName = 'My name is Jonas';

document.write(firstNum);
document.write(myName);


// document.write(10 * 10);
// document.write(100 / 10);
// document.write(50 - 17);
// document.write(50 + 17);
// document.write('Sarah Litwin');

// Introducing general concept of functions,
//even W/O calling it to the page
function stupidAlert() {
	alert('stupid');
	alert('alerts are stupid');
}

// CSS version calls stuff
// #hello {
// 	color: red;
// }
// 
// JAVSCRIPT version similarity
// document.getElementById('hello')
//

// Document Querying -- this example isn't finished or right
// var hello = document.getElementById('hello').html('goodbye');

document.getElementById('title').style.color = 'red';

document.querySelector('title').