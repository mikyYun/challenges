/** GIVEN A POSITIVE INTEGER n, return the smallest positive integer that is a multiple of both 2 and n */
const smallestEvenMultiple = (n) => {
  // 1 <= n <= 150
  if (n % 2 == 1) {
    return n * 2
  }
  if (n % 2 == 0) {
    return n
  }
}