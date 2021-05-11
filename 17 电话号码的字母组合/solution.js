/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	if (!digits) {
		return [];
	}
    let array = [];
    digits.split('').map(digit => array.push(getWord(digit)))
    let result = [];
    digui(array, result);
    return result;
};
letterCombinations('234')

function getWord(digit) {
    switch(+digit) {
    	case 2: return ['a', 'b', 'c'];
    	case 3: return ['d', 'e', 'f'];
    	case 4: return ['g', 'h', 'i'];
    	case 5: return ['j', 'k', 'l'];
    	case 6: return ['m', 'n', 'o'];
    	case 7: return ['p', 'q', 'r', 's'];
    	case 8: return ['t', 'u', 'v'];
    	case 9: return ['w', 'x', 'y', 'z'];
    	default: return [];
    }
}

function digui(arr, res, str = '', curArrIdx = 0) {
	if (curArrIdx === arr.length) {
		res.push(str);
		return;
	}
	for (let i = 0; i < arr[curArrIdx].length; i++) {
        let strTemp = str + arr[curArrIdx][i];
        digui(arr, res, strTemp, curArrIdx + 1)
    }
}