/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//  Approach

//  - return false to all false cases : invalid p or q, not equal p.val and q.val

//  - if not edge cases, check left and right

//  - recursion is true, return true

const isSameTree = function (p, q) {
  // edge cases return false
  if ((!p && q) || (p && !q) || (p.val !== q.val)) return false;
  // true case or recursive => p & q true && p.val === q.val
  if (p && q) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  return true;
};