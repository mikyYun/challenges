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
 * @return {number[]}
 */

// APPROACH
// - focus left first
// - if left exists, recursion to check left's left are exist
// - after left check, push val
// - after push val, check rights

// class TreeNode {
//   constructor(val, left, right) {
//     this.val = (val === undefined ? 0 : val);
//     this.left = (left === undefined ? null : left);
//     this.right = (right === undefined ? null : right);
//   }
// }

const inorderTraversal = function (root) {
  const tree = [];
  traversal(root, tree);
  return tree;
};

const traversal = (root, tree) => {
  if (!root) return;
  if (root.left) traversal(root.left, tree);
  tree.push(root.val);
  if (root.right) traversal(root.right, tree);
};


const root = [1, null, 2, 3];

console.log(inorderTraversal(root));