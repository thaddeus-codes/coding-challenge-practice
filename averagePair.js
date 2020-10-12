function averagePair(arr, target) {
  if(!arr.length) {
    return false
  }

  let leftPointer = 0
  let rightPointer = arr.length - 1

  while(leftPointer < rightPointer) {
    let avg = (arr[leftPointer] + arr[rightPointer]) / 2

    if(avg === target) {
      return true
    } else if (avg < target) {
      leftPointer++
    } else {
      rightPointer--
    }
  }

  return false
}

console.log(averagePair([1,2,3], 2.5))
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))
console.log(averagePair([-1,0,3,4,5,6], 4.1))
console.log(averagePair([], 4))
