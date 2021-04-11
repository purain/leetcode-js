/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	const result = [];
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
    	pCount[getIndex(p[i])]++;
    }
    
    for (let i = 0; i < s.length; i++) {
    	sCount[getIndex(s[i])]++;
    	let leftIndex = i - p.length;
    	if (leftIndex >= 0) {
    		sCount[getIndex(s[leftIndex])]--;
    	}
    	
    	if (compareArray(sCount, pCount)) {
    		result.push(i - p.length + 1)
    	}
    }
    return result;
};
function getIndex(ch) {
	return ch.charCodeAt(0) - 97;
}

function compareArray(arr1, arr2) {
	let len = arr1.length;
	for (let i = 0; i < len; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}