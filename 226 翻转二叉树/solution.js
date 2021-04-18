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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
    	return null;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left)
    invertTree(root.right)
    return root;
};

let a = {
	val: 4,
	left: {
		val: 2,
		left: {
			val: 1
		}
	},
	right: {
		val: 7,
		left: {
			val: 6
		},
		right: {
			val: 9
		}
	}
}
console.log(invertTree(a))