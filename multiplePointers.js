function sumZero (arr) {
  let pointer1 = 0
  let pointer2 = arr.length - 1



  while(arr[pointer1] < 0) {
    if((arr[pointer1] + arr[pointer2]) > 0) {
      pointer2--
    } else if ((arr[pointer1] + arr[pointer2]) < 0) {
      pointer1++
    } else {
      return [arr[pointer1], arr[pointer2]]
    }
  }

  return "No matches"
}


console.log(sumZero([-4,-3,-2,-1,0,5]))

/* use pointers with a while loop until the condition is met */


