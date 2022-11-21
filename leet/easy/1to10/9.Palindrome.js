const isPalindrome = (x) => {
  // x is number
  const original = x
  // number to string
  const stringX = x.toString()
  // split numbers in an array
  const arrayX = Array.from(stringX)
  // palindrome array to check later
  const palindromeArr = []
  console.log(arrayX)
  // push into checker array
  for (let i = arrayX.length - 1; i >= 0; i --) {
    palindromeArr.push(arrayX[i])
  }
  console.log(palindromeArr.join(""), original)
  // array into a string
  const palindromeNum = palindromeArr.join("")
  // string to number and compare
  return parseInt(palindromeNum) === original ? true : false
}
console.log(isPalindrome(121))