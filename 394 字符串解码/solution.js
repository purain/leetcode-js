/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
    	    stack.push(s[i]);	
        } else {
        	let temp = '';
        	while (stack[stack.length - 1] !== '[') {
        		temp = stack.pop() + temp;
        	}
        	stack.pop();

        	// 获取数量
        	let num = '';
            while (stack[stack.length - 1] >= '0' && stack[stack.length - 1] <= '9') {
            	num = stack.pop() + num;
            }

            // 推进栈里
            let nextPush = '';
        	while (num--) {
        		nextPush += temp;
        	}
        	stack.push(nextPush)
        }
    }
    return stack.join('')
};

let str = "10[l]";
console.log(decodeString(str))