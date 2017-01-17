// Homework #4
// rgb-color-choice:
//     * User enters a value into the red, green, and blue fields
//     * User clicks 'Change the Color!' <button>, triggers a function
//     * Inside this function, create variables for the color values: red, green, and blue
//     * Relpace the text inside id=colorful-text with the new RGB values
//     * Use .style.background to change the background color of the #wrapper




// 1. Use document.getElementById() and assign the .onclick event to #color-button

// 2. Write a function, named changeColor, that is called when #color-button is clicked

// 3. Inside of the function changeColor, use variables to store the <input> values from #red, #green, and #blue
// - Use .value to get the values from the inputs
// HINT: var red = document.getElementById('red').value;

// 4. Create a variable, named colorStr, which concatenates the above red, green, and blue variables into the format:
// rgb(x, y, z)
// - If the user enters: 100, 150, and 200, colorStr should be: rgb(100, 150, 200)

// 5. Use .innerHTML to change the text inside of #colorful-text to colorStr

// 6. Use .style.background to change the background of #wrapper to colorStr


// The ID of color-button has an on-click event and it's called changeColor
document.getElementById('color-button').onclick = changeColor;
// Giving changeColor a function
  function changeColor () {
// The value of #red element ID is being assigned into a variable called redValue
// then make sure variable redValue is an integer (because it's not - it's an input
// text box so is therefore naturally a string)
	var redValue = document.getElementById('red').value;
	redValue = parseInt(redValue);
// same for #green
	var greenValue = document.getElementById('green').value;
	greenValue = parseInt(greenValue);
// same for #blue
	var blueValue = document.getElementById('blue').value;
	blueValue = parseInt(blueValue);
// Take each of these already set variables and combine their numbers into a string
// This string is a new variable being set, it is called colorStr
var colorStr = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
// Grab the element #colorful-text and write the colorStr sentence to it using innerHTML 
document.getElementById('colorful-text').innerHTML = colorStr;
// set a variable - bgColor - grab the DOM element "wrapper" and change the CSS to match the sentence we set out in colorStr. 
// we are in effect writing a sentence in the css - background: rgb( [], [], []);
var bgColor = document.getElementById('wrapper');
bgColor.style.background = colorStr;
}
