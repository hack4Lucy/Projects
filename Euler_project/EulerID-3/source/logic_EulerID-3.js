
/* ------------------------------------------------------------	*/
/* This program was developed to solve Euler problem 3 (ID-3)   */
/* Developer: hack4Lucy (Email: hack4Lucy@gmail.com)            */
/* Date: Thur, 08SEP2016                                        */
/* -----------------------------------------------------------	*/

/* Reference: http://www.mathsisfun.com/prime-factorization.html */
/* A prime number can only be divided by 1 or itself, so it cannot be factored any further! */
/* Every other whole number can be broken down into prime number factors. It is like the Prime
   Numbers are the basic building blocks of all numbers.
 */


// The main function
function main () {

  // Get user input value
  var box_input  = document.getElementById('input_value');
  var number     = box_input.value;

  // Define output value holder
  var box_output = document.getElementById('output_value');
  var result     = '';

  // Get largest prime factor
  result = getLPF(number);

  box_output.value = result;
  box_input.value  = '';

}

/* This function checks whether a value is a prime number. */
function isPrime (n) {

  // Initialize counter
  var count = 1;
  var remainder = 0;

  for (var i = 2; i < n; i++) {

    remainder = n%i;

    if (remainder == 0) {
      count++;
    }
  }

  // Check whether the number is prime
  if (count > 1) {
    return 0;   // The number (&n) is not a prime number.
  }
  else {
    return 1;   // The number (&n) is a prime number.
  }
}


/* This function finds greatest prime factor of a number. */
function getLPF (n) {

  var out = '';
  var prime_number = 0;
  var remainder = 0;

  for (var i = 2; i < n; i++) {

    // Check if current loop value (&i) is a factor
    remainder = n%i;

    if (remainder == 0) {

      // Check if current factor (&i) is a prime number
      prime_number = isPrime(i);

      if (prime_number == 1) {
        out += i + ' ';
      }
    }
  }

  return out;
}
