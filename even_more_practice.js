// Solve the following problems first in Ruby, then convert the solution to JavaScript.
// 1. Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).

function reverseAString(inputString) {
  var newString = "";
  // loop through the string BACKWARDS
  for (var i = inputString.length - 1; i >= 0 ; i--) {
    newString += inputString[i];
  }
  // make another string out of it
  return newString;
}

// console.log(reverseAString("hippo"));

// input "hippo" output "oppih"

// 2. Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

function numberOfAs(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      counter++;
    }
  }
  return counter;
}

// console.log(numberOfAs("banananana"));

// 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within in the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

function index(inputArray, number) {
  var result = null;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === number) {
      result = i;
      return result;
    }
  }
  return result;
}

// console.log(index([1,2,5,7,8,10], 8));
// console.log(index([1,2,5,7,8,10], 66));

// inputs array, number
// output is the index at which the number occurs in the array
// (1,2,5,6,7,8,10), 8 => 5
// for each number, i have to determine is number I'm looking for greater than the element

// 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the “sort” method!

function addToArray(inputArray, number) {
  for (var i = 0; i < inputArray.length; i++) {
    console.log(i);
    if (inputArray[i] > number) {
      // insert into the array
      // console.log(inputArray[i]);
      inputArray.splice(i, 0, number);
      return inputArray;
    }
  }
  console.log(inputArray[inputArray.length - 1])
  console.log(number);
  if (inputArray[inputArray.length - 1] < number) {
    console.log('hi');
    inputArray.push(number);
  }
  return inputArray;
}

console.log(addToArray([1,2,5,6,7,10,11,15,20], 28));



function addToArray(inputArray, number) {
  var newArray = [];
  var inserted = false
  for (var i = 0; i < inputArray.length; i++) {
    // console.log(inputArray);

    if (inputArray[i] > number && !inserted) {
      // insert into the array
      // console.log(inputArray[i]);
      newArray.push(number);
      inserted = true;
    }
    newArray.push(inputArray[i]);
  }

  return newArray;
}

// console.log(addToArray([1,2,5,6,7,10,11,15,20], 8));

// [1,2,5,6,7,10], 8 => [1,2,5,6,7,8,10]
// loop through the array
// check if the number is larger than the element in that iteration of the loop


// 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string “lower” if the value is found in the lower half of the array, and it should return “higher” if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

function higherLower(inputArray, number) {
  // find the middle value
  var middleIndex = Math.floor(inputArray.length / 2);

  // compare it to the number
  if (inputArray[middleIndex] >= number) {
    console.log('lower half');
  } else {
    console.log('upper half')
  }
}

// higherLower([1,3,4,5,77,99,6789], 5);
// higherLower([1,3,4,5,77,99,6789], 6789);

// input [1,3,4,5,77,99,6789], 3 = 'lower'
