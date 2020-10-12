function sameFrequency(num1, num2) {

  let frequency1 = {}

  let str1 = num1.toString()
  let str2 = num2.toString()

  if(str1.length !== str2.length) {
    return false
  }

  for(let i = 0; i < str1.length; i++) {
    let newNum = str1[i]

    frequency1[newNum] = (frequency1[newNum] || 0) + 1
  }

  for(let i = 0; i < str2.length; i++) {
    let newNum = str2[i]

    if(!frequency1[newNum]) {
      return false
    } else {
      frequency1[newNum]--
    }

  }

  return true
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
