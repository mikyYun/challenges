/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  // compare root.left and root.right
  // try root && root.left && root.right
  // Edge case => !root
  // left of left == right of right
  // right of left == left of right
  return symmetricCheck(root, root)
};

const symmetricCheck = (left, right) => {
  if (!left &&!right ) return true;
  if (!left || !right) return false;
  return left.val === right.val && symmetricCheck(left.left, right.right) && symmetricCheck(left.right, right.left)
}