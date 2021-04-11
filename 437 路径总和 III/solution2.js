/**
 * 使用 前缀和 + hash存值 的方式
 * 前缀和：指在当前节点所在分支中，当前节点之前的节点的总和，包括当前节点
 * 当一个分支上存在两个节点的前缀和相等时，说明这两个节点之间的值的和为0
 * 同理，当两个节点的前缀和的差为 targetSum 时，说明这两个节点为所求节点
 *
 * 因此，这里用 hash 表存值，hash 存下当前分支的所有前缀和，即存下上游的前缀和
 * 假如当前节点的值减去targetSum后，在 hash 中存在，说明这两个前缀和的差为 targetSum，即为所求
 * @param  {[type]} root      [description]
 * @param  {[type]} targetSum [description]
 * @return {[type]}           [description]
 */
const pathSum = function(root, targetSum) {
    let hash = {
    	0: 1
    };
    let result = 0;

    const dfs = (node, hash, curSum, targetSum) => {
        if (!node) {
            return 0;
        }
        let res = 0;
        curSum += node.val;
        res += (hash[curSum - targetSum] || 0);
        // hash[curSum] = hash[curSum] ? ++hash[curSum] : 1;
        if (hash[curSum]) {
            hash[curSum]++;
        } else {
            hash[curSum] = 1;
        }
        res += dfs(node.left, hash, curSum, targetSum);
        res += dfs(node.right, hash, curSum, targetSum);
        hash[curSum]--;

        return res;
    }
    result = dfs(root, hash, 0, targetSum);
    return result;
}
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
// [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1] 22
//            5
//       4         8
//    11        13    4
//  7    2           5   1
let b = {
        val: 5,
        left: {
                val: 4,
                left: {
                        val: 11,
                        left: {
                                val: 7
                        },
                        right: {
                                val: 2
                        }
                }
        },
        right: {
                val: 8,
                left: {
                        val: 13
                },
                right: {
                        val: 4,
                        left: {
                                val: 5
                        },
                        right: {
                                val: 1
                        }
                }
        }
}

let c = {
        val: 1
}

let d = {
        val: 0,
        left: {val: 1},
        right: {val: 1}
}
console.log(pathSum(d, 1)) // 4