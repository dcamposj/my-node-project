// If we list all the natural numbers below 10 that are multiples of 3 or 5 we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 and 5 below 1000.
function sumOfMultiples(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Fibonacci
function fibonacci(number) {
  let fibSequence = [1, 2];
  if (number < 2) return fibSequence;
  for (let i = 2; i < number; i++) {
    let value = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(value);
  }
  return fibSequence;
}

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

function largestPrimeFactor(number) {
  let factors = [];
  let divisor = 2;

  while (number >= divisor) {
    if (number % divisor === 0) {
      factors.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

// Palindrome 

function threeDigitPalindrome(){
  //TODO: Create a the biggest palindrome of three digit numbers
}

// Exporting the functions
module.exports = {
  sumOfMultiples,
  fibonacci,
  largestPrimeFactor,
};
