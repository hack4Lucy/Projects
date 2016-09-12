
/* ---------------------------------------------------------	*/
/* This function is written to solve Euler problem 2 (ID-2)   */
/* Developer: hack4Lucy (Email: hack4Lucy@gmail.com)          */
/* Date: Sunday, 04SEP2016                                    */
/* ---------------------------------------------------------	*/

// Get access to input/output area
var box_input  = document.getElementById('max_value');
var box_output = document.getElementById('answer');

// Sum of Even-valued Terms in Fibonacci sequence
function Fibonacci() {

  var max_value =box_input.value;

  // Febonacci variables
  var term = 1;
  var first_num = 1;
  var second_num = 2;
  var sum1 = 0;   // Sum for WHILE loop
  var sum2 = 0;   // Sum for keeping even-valued terms

  // Result variable
  var result = 2;   // The first terms are 1 and 2. Thus, result_0=2.

  // Start Fibonacci and sum even-valued terms
  while (sum1 < max_value) {

    // Get SUM2
    sum2 = sum1;

    // Get Fibonacci sequence
    if (term == 1 || term==2) {
      sum1 = 0;
    }
    else {
      sum1 = first_num + second_num;

      first_num  = second_num;
      second_num = sum1;
    }

    // Check if sum is even
    if (sum2%2 == 0) {
      result += sum2;
    }

    // Increment term
    term++;
  }

  box_output.value = result;
  box_input.value  = '';
}
