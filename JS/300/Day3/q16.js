/** What does the nullish coalescing operator do ? */

// nullish coalescing operator ? 
// `??` 
// It returns the right-hand side operand when the left-hand operand is null or undefined
// Otherwise return left-hand operand

const a = null ?? 'isNull'; // right
const b = true ?? 'isNotNull'; // left
const c = undefined ?? 'isUndefined'; // right
const d = 0 ?? 2; // left

console.log(a, b, c, d) // isNull true isUndefined, 0