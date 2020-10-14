function findLongestSubstring(str) {

  let max = 0;
  let seen = {}
  let start = 0;

  for(let i = 0; i < str.length; i++) {
    let char = str[i]

    if(seen[char]) {
      start = Math.max(start, seen[char])
    }

    max = Math.max(max, i - start + 1)

    seen[char] = i + 1
  }

  return max
}
