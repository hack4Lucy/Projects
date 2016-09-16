
/* ------------------------------------------------------------	*/
/* This program was developed to solve Euler problem 4 (ID-4)   */
/* Developer: hack4Lucy (Email: hack4Lucy@gmail.com)            */
/* Date: Fri, 16SEP2016                                         */
/* -----------------------------------------------------------	*/

// The main function
function main () {

  // Get user input value
  var box_input   = document.getElementById('numOfDigits');
  var numOfDigits = box_input.value;

  // Define output value holder
  var box_output = document.getElementById('answer');
  var result     = '';

  // Get largest palindrom
  result = getLP(numOfDigits);

  // Display result to user
  box_output.value = result;
  box_input.value  = '';

}

// The function reverses an input number.
// - The source code was originally hacked by Xenofied on DreamInCode
// SOURCE: http://www.dreamincode.net/forums/topic/38175-reverse-a-number-using-javascript/
function reversing(a) {

  var b = 0;

  while(a > 0) {
  		b = b * 10;
  		// b = b + parseInt(a % 10);
      b = b + (a%10);   // modified by hack4Lucy
  		a = parseInt(a/10);
  }

  return b;
}


// The function checks whther a number is palindrom. A palindrom number reads the same in both sides.
// @number: original number
function isPalindrom (number) {

  var reverse = 0;

  // Reverse the number
  reverse = reversing(number);

  // Check if the number is a palindrom
  if (number == reverse) {
    return 1;   // The number is palindrom
  }

  return 0;   // The number is NOT palindrom
}

// The function finds largest palindrom number
// @m: number of digits, i.e., m=1,2,3, etc
function getLP (m) {

  // Validation check. This App can handle only 2 or 3 number of digits
  if (m <= 1 || m >= 4) {
    alert("Hmmm, the #digits you provided is kinda heavy for me to handle. Why don't you try again...");
  }
  else {    // Start main task, i.e., checking whether a product of two numbers is Palindrom

    // Initialize variables
    var lower = 0, upper = 0;
    var product = 0, isPalind = 0, count = 0;
    var palind_values = '';
    var palind_largest = 0;
    var palind_array = [];

    // Get lower and upper limits (used in the FOR loop)
    lower = Math.pow(10, m-1) + 1;
    upper = Math.pow(10, m) - 1;

    // Find all possible palindrom numbers
    for (var i = lower; i <= upper; i++) {
      for (var j = lower; j <= upper; j++) {

        // Get product of two input values
        product = i*j;

        // Check if current product is a palindrom
        isPalind = isPalindrom(product);

        if (isPalind == 1) {

          // Save all palindrom values (This is an additional feature in the App)
          palind_values += product + ' ';

          // Save palindrom values in an array for later extraction of the largest palindrom
          count++;
          palind_array[count-1] = product;
        }

        // Reset product
        product = 0;
      }
    }
  }

  // Get the largest palindrom
  if (palind_array.length > 0) {    // checks if there is any palindrom value
    alert("The largest palindrom is " + Math.max.apply(null, palind_array));    // Take the maximum palindrom from the list
  }

  return palind_values;
}
