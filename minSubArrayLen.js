function minSubArrayLen(arr, target) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while(start < arr.length) {
    if(total < target && end < arr.length) {
      total += arr[end]
      end++
    } else if (total >= target) {
      minLen = Math.min(minLen, end - start)
      total -= arr[start]
      start++
    } else {
      break
    }
  }

  return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))
console.log(minSubArrayLen([2,1,6,5,4],9))
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))
