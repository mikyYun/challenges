const isValid = (s) => {
  const parentheses = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const matcher = []
  for (let char of s) {
    if (s.length % 2 !== 0) return false;
    if (parentheses[char]) {
      matcher.push(char) // pushing opening tags only
    } else {
      const unClosedOpeningTag = matcher.pop() // must be closed with same tag
      if (parentheses[unClosedOpeningTag] !== char) {
        return false
      }
    }
  }
  return matcher.length === 0;
};

// isValid("()[]{}");
// console.log(isValid("()"))
// console.log(isValid("{[]}"));
// console.log(isValid("([)]"));
console.log(isValid("(){}}{"));
