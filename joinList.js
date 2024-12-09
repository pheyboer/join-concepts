const conceptList = ["gists", "types", "operators", "iteration", "problem solving"]; //concept list array stored in variable


const joinList = function(array) {
  let result = ''; //variable result for empty string
  for (let i = 0; i < array.length; i++) { //loop through array
    result += array[i]; //add current item to the result
    if (i < array.length - 1) { 
      result += ', '; //add comma and space if not last item
    }
  }
  return result; // return concatenated string
}

// Test / Driver Code below...
const concepts = joinList(conceptList); //new variable concept: call joinList function with conceptList as argument

console.log(`Today I learned about`, concepts);

//first time i did this i used array.join which is not the point of the challenge
//function joinList(array) {
// return array.join(', ');
// }