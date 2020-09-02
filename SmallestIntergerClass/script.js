// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
  console.log('**********');
  console.log(args);
  var min = args[0];
    for(var i = 1; i < args.length; i++){
      if(args[i] > min){
        continue;
      }
      else{
        min = args[i];
        console.log(min);
      }
    }
    console.log(min);
    return min;
  }
}


// can also do 
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }