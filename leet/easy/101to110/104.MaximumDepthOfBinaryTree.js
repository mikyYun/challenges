/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 104].
 * -100 <= Node.val <= 100
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/** EXAMPLE
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 * 
 * Input: root = [1,null,2]
 * Output: 2
 */

// APPROACH
// make the maxDepth function to return count
// compare same level's node and return the larger value

const maxDepth = function (root) {
  // EDGE
  if (!root) return 0;
  

  // This will return number of nect lists ( 0 ~ ...)
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1; // + 1 to add the head node
};