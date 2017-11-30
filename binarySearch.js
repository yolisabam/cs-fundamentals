// Declare a sorted array where we will be searching for a target number
const stuff = [1,23,43,56,77,89,211,212,789,972,1001,4567,4599,83784]

// Hoist up binary search function. Pass it array above and target number
// Assign whatever the function returns to a variable called result
const result = binarySearch(stuff, 77);

// console log the result
console.log(result);

// using ES6 fat arrow function declaration, declare an anonymous function that takes in an array and target number
const binarySearch = (array, targetNumber) => {

  //Declare variables we will be working with. 
  let currentNumber; //the current value we are at in the search 
  let currentIndex; // The index of the current value we are at
  let maxIndex = array.length - 1; //The max index of the search
  let minIndex = 0; //the min index of the search

  // Start a loop that will search through the array
  while (minIndex <= maxIndex) {
     //Cut the search area in half and land on a position in the middle
     //First round will be the middle of the entire array. Second will be
     //Half the array etc etc

     currentIndex = Math.floor((minIndex + maxIndex) / 2); 
     //Assign the number we land on to "currentNumber" variable 
     currentNumber = array[currentIndex];
     // using ES6 string interpolation print this to console
     console.log(`Start index: ${minIndex}`)
     console.log(`End index: ${maxIndex}`)
     console.log(`Current number: ${currentNumber}`)

     //Now test the array and make comparisons

     if (currentNumber < targetNumber){
        //If the current number is higher than the target number
        //
        minIndex = currentIndex + 1
     }
  }

}