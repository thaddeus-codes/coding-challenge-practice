function countUniqueValues(arr) {
  let pointer1 = 0;
  let pointer2 = 1;

  let unique = 0

  if(arr.length > 0) {
    unique++
  }

  while(pointer2 < arr.length) {
    if(arr[pointer1] === arr[pointer2]) {
      pointer2++
    } else if (arr[pointer1] !== arr[pointer2]) {
      pointer1 = pointer2
      pointer2++
      unique++
    }
  }

  return unique
}


console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
