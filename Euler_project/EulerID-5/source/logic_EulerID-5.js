
/* ------------------------------------------------------------	*/
/* This program was developed to solve Euler problem 5 (ID-5)   */
/* Developer: hack4Lucy (Email: hack4Lucy@gmail.com)            */
/* Date: Tue, 12SEP2016                                         */
/* -----------------------------------------------------------	*/

// The main function
function main () {

  // Get input value from the user
  var box_input   = document.getElementById('upper_limit');
  var upper_limit = box_input.value;

  // Define output value holder
  var box_output = document.getElementById('answer');
  var result     = 0;

  // Call the function to find SPN
  result = getSPN(upper_limit);

  // Return the value to the user
  box_output.value = result;
  box_input.value  = '';

}


// This function searches for smallest positive Number (SPN) that is divisible by all numbers between 1 and LIMIT
// @limit: The upper limit provided by the user
function getSPN (limit) {

  // Variable of Interest
  var out = 0;

  if (limit > 15) {   // Validation check
    alert("hmm, what a limit? Please try a limit which is below 15.");
  }
  else {    // Perform the task, if LIMIT <= 15

    // Initialize (intermediate) variables
    var count = 1;
    var remainder = 0;

    do {

      // Increment the Variable of Interest, OUT
      out++;

      // Reset COUNT variable
      count = 0;

      for (var i = 1; i <= limit; i++) {     // Check current value if it's divisible by all numbers between 1 and LIMIT

        remainder = out%i;

        if (remainder == 0) {
          count++;
        }
      }

    } while (count != limit);   // check if SPN is achieved

  }

  return out;
}
