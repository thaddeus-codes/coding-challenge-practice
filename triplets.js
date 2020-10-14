// Naive solution
// function triplets(arr, target) {
//   let matches = 0
//   let finalarr = []
//   let sum = 0

//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       let k = j + 1
//       while(k < arr.length) {
//         sum = arr[i] + arr[j] + arr[k]

//         if(sum <= target) {
//           matches++
//           finalarr = [...finalarr, [arr[i], arr[j], arr[k]]]
//         }

//         k++
//       }
//     }
//   }

//   return matches
// }

console.log(triplets([1,2,3,4,5], 8))
