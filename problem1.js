//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  // First of all, we create a method that will generate an array 
  // starting and ending with the numbers that we specified as arguments to this method:
  let range = (start, end) => {
    return [...Array(end).keys()].map(el => el + start)
  }
  // We must test this method. I suggest just outputting an array from 1 to 10 to the console:
  // console.log(range(1, 10))
  // console.log(range(1, 100))
  // console.log(range(10, 20))
  // It's OK, range() is working! So, we can use it:
  let arr = range(1, number-1) // 'number-1', because the last element of the array according to the condition of the problem must be > 1000
  // In next step we must filter the array to get only members that are divisible by 3 or 5
  // To do this, we need to write a method that will filter the array.
  // But first, I suggest creating a method that allows us to dynamically determine the divisor in our filter:
  let divisibleBy = divisor => num => num % divisor === 0;
  // It was easy enough! Now we use this method in our filter:
  let filteredArr = arr.filter(i => divisibleBy(3)(i) || divisibleBy(5)(i))
  // As you can see, now we can set an arbitrary number of divisors in the filter! That's cool!
  // The last step remained - to calculate the sum of all elements of the array:
  // console.log(filteredArr)
  return filteredArr.reduce((result, num) => result + num)
}
  
console.log(multiplesOf3and5(10)); // return 23!
// That's all!
// Now we can comment out the excess console.logs.
