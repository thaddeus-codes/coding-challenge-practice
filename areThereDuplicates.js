function areThereDuplicates() {
  let frequency = {}

  for(let i = 0; i < arguments.length; i++) {
    let item = arguments[i]

    if(frequency[item]) {
      return true
    } else {
      frequency[item] = 1
    }
  }

  return false
}

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
