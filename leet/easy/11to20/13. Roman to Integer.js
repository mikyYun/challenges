const romanToInt = (s) => {
  // string to arr
  // compare elements if element is in roman
  // if roman -> change as num
  // return replaced number
  // I can be placed before V (5) and X (10) to make 4 and 9. 
  // X can be placed before L (50) and C (100) to make 40 and 90. 
  // C can be placed before D (500) and M (1000) to make 400 and 900.
  let num = 0;


  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    switch (s[i]) {
      case "I":
        if (s[i + 1] === "V") {
          num += 4;
          i++; // jump next
        } else if (s[i + 1] === "X") {
          num += 9;
          i++; // jump next
        } else {
          num += 1;
        }
        break;
      case "V":
        num += 5;
      break;
      case "X":
        if (s[i + 1] === "L") {
          num += 40;
          i++;
        } else if (s[i + 1] === "C") {
          num += 90;
          i++;
        } else {
          num += 10;
        }
        break;
      case "L":
        num += 50;
      break;
      case "C":
        if (s[i + 1] === "D") {
          num += 400;
          i++;
        } else if (s[i + 1] === "M") {
          num += 900;
          i++;
        } else {
          num += 100;
        }
        break;
      case "D":
        num += 500;
      break;
      case "M":
        num += 1000;
      break;
    }
  }
  console.log(num)
  return num;
};
romanToInt("DCXXI");