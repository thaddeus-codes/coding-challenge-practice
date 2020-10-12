 function maxSubarraySum(arr, num) {
   if (num > arr.length) {
     return null
   }

   let max = 0;

   for(let i = 0; i < num; i++) {
     max += arr[i]
   }

   let temp = max

   for(let i = num; i < arr.length; i++) {
     temp = temp - arr[i-num] + arr[i]
    max = Math.max(max, temp)
   }

   return max
 }

 console.log(maxSubarraySum([4,3,0,0,6,1,2], 3))
