function isSubsequence(str1, str2) {
  let str1Pointer = 0;
  let str2Pointer = 0;

  while(str1Pointer < str1.length) {
    if(str2Pointer === str2.length) {
      return false
    }
    let str1Letter = str1[str1Pointer]
    let str2Letter = str2[str2Pointer]

    if(str1Letter === str2Letter) {
      str1Pointer++
      str2Pointer++
    } else {
      str2Pointer++
    }
  }
   return true
}


console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))
