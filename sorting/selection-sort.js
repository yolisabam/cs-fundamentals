//Selection sort is a quadratic algorithm

//Case 1 - Small Set of Numbers
var arraySize = 40; 

const array = [];

for (let index = 0; index < arraySize; index++) {
  const randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

//This function creates a temporary placeholder for the swap so we don't lose
//Access to the variable. 
const swap = (items, firstIndex, secondIndex) => {
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

const selectionSort = (items) => {
  const len = items.length;
  let min;

  for (let i = 0; i < len; i++) {
    //we set the index of minimum to the postion of i in each loop
    min = i

    //we check the rest of the array to see if anything is smaller
    // we set j to i + 1 so that we are checking the next value 
      for (let j = i + 1; j < len; j++) {
        if (items[j] < items[min]) {
            min = j
        } 
      }

      if (i!== min) {
        swap(items, i, min);
      }
  }

  return items;
}

// Now we call the function
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("--------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));