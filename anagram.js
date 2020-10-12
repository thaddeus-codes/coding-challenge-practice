/* function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false
  }

  let str1Dict = {}
  let str2Dict = {}

  str1.split('').forEach((letter) => {
    str1Dict[letter] = (str1Dict[letter] || 0) + 1
  })

  str2.split('').forEach((letter) => {
    str2Dict[letter] = (str2Dict[letter] || 0) + 1
  })

  for(let key in str1Dict) {
    if(str1Dict[key] !== str2Dict[key]) {
      return false
    }
  }
  return true
}
*/

function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false
  }

  let lookup = {}

  for( let i = 0; i < str1.length; i++) {
    let letter = str1[i]

    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1

  }

  for(let i = 0; i < str2.length; i++) {
    let letter = str2[i]

    if(!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1;
    }
  }

  return true
}

// console.log(validAnagram('', ''))
// console.log(validAnagram('aaz', 'zza'))
// console.log(validAnagram('anagram', 'nagaram'))
// console.log(validAnagram('rat', 'car'))

console.log(validAnagram('cinema', 'iceman'))
