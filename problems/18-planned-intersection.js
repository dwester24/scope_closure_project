/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

// your code here
const plannedIntersect = arr1 => {
  let intersect = [];

  return function (arr2) {
    for (let i = 0; i < arr1.length; i++) {
      let current1 = arr1[i];

      for (let j = 0; j < arr2.length; i++) {
        let current2 = arr2[j];
        if (current1 === current2) {
          intersect.push(current1);
        }
      }
    }
    return intersect;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
  module.exports = plannedIntersect;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
