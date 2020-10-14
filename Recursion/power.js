function power(base, exponent) {
  if (exponent === 0) {
    return 1
  }

  return base * power(base, exponent - 1)
}

console.log(power(-2, 2)) // 4
console.log(power(-2, 3)) // -8
console.log(power(2, 4)) // 16
console.log(power(3, 2)) // 9
console.log(power(3, 3)) // 27
