/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
	// 对第二个数字升序，对第一个数字降序
    people.sort((a, b) => a[1] - b[1])
    people.sort((a, b) => b[0] - a[0])
    let result = [];
    for (let i = 0; i < people.length; i++) {
    	let resultLength = result.length;
    	let j = people[i][1];
    	if (j > resultLength) {
    		result.push(people[i]);
    	} else {
    		result.splice(j, 0, people[i]);
    	}
    }
    return result;
};
let arr = [[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]]
console.log(reconstructQueue(arr))