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
 * @param {number} targetSum
 * @return {number}
 */

/**
 * 常规做法，遍历每个节点，对节点进行深度优先遍历，并进行加法
 * @param  {[type]} root      [树节点]
 * @param  {[type]} targetSum [目标值]
 * @return {[type]}           [description]
 */
var pathSum = function(root, targetSum) {
    let result = 0;
    const dfs = (node, curSum, targetSum) => {
    	if (!node) {
    		return;
    	}
    	curSum += node.val;
    	if (curSum === targetSum) {
    		result++;
    	}
        dfs(node.left, curSum, targetSum);
        dfs(node.right, curSum, targetSum);
    }

    const dfsEvery = (node, targetSum) => {
    	if (!node) {
    		return;
    	}
    	dfs(node, 0, targetSum);
    	dfsEvery(node.left, targetSum);
    	dfsEvery(node.right, targetSum);
    }
    dfsEvery(root, targetSum);

    return result;
};

let a = {
	val: 10,
	left: {
		val: 5,
		left: {
			val: 3,
			left: {
				val: 3
			},
			right: {
				val: -2
			}
		},
		right: {
			val: 2,
			right: {
				val: 1
			}
		}
	},
	right: {
		val: -3,
		right: {
			val: 11
		}
	}
}
console.log(pathSum(a, 8)) // 3