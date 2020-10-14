function compressedString(str) {

  let i = 0;

  let finalStr = ''

  for(let j = 1; j <= str.length; j++)  {
    let diff = j - i
    if(str[i] !== str[j]) {
      finalStr += str[i]
      i = j
      if(diff > 1) {
        finalStr += diff.toString()
      }
    }
  }

  return finalStr
}

console.log(compressedString('abaasasssss'))
