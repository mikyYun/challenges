const addBinary = (a, b) => {
  // let reverseA = a.split("");
  // const reverseB = b.split("");
  let addOne = 0;
  let reverseLong, reverseShort;
  if (a.length >= b.length) {
    reverseLong = a.split("");
    reverseShort = b.split("");
  } else if (a.length < b.length) {
    reverseLong = b.split("");
    reverseShort = a.split("");
  }
  const lengthDifference = reverseLong.length - reverseShort.length;
  // const length = Math.max(reverseA.length, reverseB.length)
  for (let i = reverseLong.length - 1; i >= 0; i--) {
    // console.log(i, lengthDifference)
    const numA = parseInt(reverseLong[i]);
    const numB = reverseShort[i - lengthDifference] === undefined ? 0 : parseInt(reverseShort[i - lengthDifference]);
    const sumNums = numA + numB + addOne;
    if (sumNums > 1) {
      addOne = 1;
    } else {
      addOne = 0;
    }
    reverseLong[i] = sumNums % 2;
  }
  if (addOne === 1) reverseLong.unshift(1);
  return reverseLong.join("");
  //////// FAILED /////////
  // const add = a + b;
  // for (let i = add.length - 1; i >= 0; i --) {
  //   if (add[i] === 2) {
  //     add[i] = 0;
  //     add[i - 1] += 1;
  //   }
  // }
  // return add;
  // console.log(a)
  // console.log(a.slice(-1))
  // // console.log(a.charAt(a.length-1))
  // const c = a.slice(-1)

  // console.log(c)
  // console.log(a)
  // reverse string

  ///////// PASSED //////////
  // let longest, shortest;

  // if (a.length >= b.length) {
  //   longest = a;
  //   shortest = b;
  // } else {
  //   longest = b;
  //   shortest = a;
  // }
  // let reverseLong = longest.split("").reverse();
  // const reverseShort = shortest.split("").reverse();
  // let addOne = 0;
  // for (let i = 0; i < longest.length; i++) {
  //   const numA = parseInt(reverseLong[i]);
  //   const numB = reverseShort[i] === undefined ? 0 : parseInt(reverseShort[i]);
  //   console.log(addOne)
  //   const sumNums = numA + numB + addOne;
  //   console.log(sumNums, addOne)
  //     reverseLong[i] = sumNums % 2;
  //   sumNums > 1 ? addOne = 1 : addOne = 0

  // }
  // if (addOne === 1) reverseLong.push(addOne)
  // reverseLong = reverseLong.reverse().join("")
  // return reverseLong;
};
// const a = '1010';
// const b = '1011';
const b = '111';
const a = '1';
console.log(addBinary(a, b));