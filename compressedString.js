function compressedString(str) {

  let i = 0;
  let j = 1;

  let finalStr = ''

  while(j <= str.length) {
    let diff = j - i
    if(str[i] !== str[j]) {
      finalStr += str[i]
      i = j
      if(diff > 1) {
        finalStr += diff.toString()
      }
    }
    j++
  }

  return finalStr
}

console.log(compressedString('abaasasssss'))
