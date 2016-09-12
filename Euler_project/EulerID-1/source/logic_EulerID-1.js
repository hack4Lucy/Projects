
/* ------------------------------------------------------------	*/
/* This program was developed to solve Euler problem 1 (ID-1)   */
/* Developer: hack4Lucy (Email: hack4Lucy@gmail.com)            */
/* Date: Saturday, 03SEP2016                                    */
/* -----------------------------------------------------------	*/

// Get access to input/output area
var box_input  =document.getElementById('max_value');
var box_output =document.getElementById('answer');

// This function calculates the sum of multiples of 3 or 5 below the maximum natural number provided by the user
function sumOfMultiples() {

	// Get the input value
	var max_value = box_input.value;

	// Initialize the SUM variable
	var sum = 0;

	for (var i = 0; i < max_value; i++) {
		if ((i%3 == 0) || (i%5 == 0)) {
			sum += i;  // sum = sum + i;
		}
	}

	// Output the answer
	box_output.value =sum;

	// clear input area
	box_input.value ='';
};
