function recursiveRange(num) {
  if(num === 0) {
    return 0
  }

  // added negative case to prevent infinite loop if input is less than 0
  if(num > 0) {
    return num + recursiveRange(num-1)
  } else {
    return num + recursiveRange(num + 1)
  }

}


console.log(recursiveRange(-6)) // 21
console.log(recursiveRange(10)) // 55
