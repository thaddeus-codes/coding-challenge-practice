function maxSubArraySum(arr, sub) {
  let max = 0

  if(sub > arr.length) {
    return null
}

  for (let i = 0; i < sub; i++) {
    max += arr[i]
  }

  let temp = max

  let pointerA = 1;
  let pointerB = sub;

  while(pointerB < arr.length) {
      temp = temp - arr[pointerA - 1] + arr[pointerB]
      max = Math.max(max, temp)
      pointerA++
      pointerB++
  }

  return max
}

console.log(maxSubArraySum([100,200,300,400], 2))
console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20], 4))
console.log(maxSubArraySum([-3,4,0,-2,6,-1], 2))
console.log(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1], 2))
console.log(maxSubArraySum([2,3], 3))
