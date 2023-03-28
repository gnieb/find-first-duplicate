function findFirstDuplicate(arr) {
  // type your code here
  // let foundIndex = -1
  for (i = 0; i< arr.length; i++){
   if (i !== arr.indexOf(arr[i])) {
    return arr[i]
   }  
  }
  return -1
  }

if (require.main === module) {
  // add your own tests in here


  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([7, 8, 3, 4, 3]))


  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));


  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}


module.exports = findFirstDuplicate;

// Please add your pseudocode to this file


// given an Array, find the first duplicate
// loop through an array , and if any numbers are duplicates of a
//  number already passed, return that number

// loop through the array
//store the numbers 


// The indexOf() method returns the first index 
// at which a given element can be found in the array, 
// or -1 if it is not present.

//compare the 

// if the index is equal to the same index, then it must be the only one of its kind.



// And a written explanation of your solution


// as we loop through the code, the index , represented by 'i' is increasing by one, 
// if the number is not a duplicate, the indexOf arr[i] should be equal to i, because 
// the first instance of that element would be at that indexOf.

// however, a duplicate will have another element already in the array somehwere before it,
// meaning that the indexOf the first instance of the element will NOT be the current index.

//therefore, if the i !== arr[i] that means that the first inde of that element is already in the array and 
// it is a duplicate so we return the element.

