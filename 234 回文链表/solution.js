/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head.next) return true;
    // 快慢指针记中间节点
    let slowPointer = head;
    let fastPointer = head;
    let danshuang = 0;
    while (fastPointer) {
    	slowPointer = slowPointer.next;
    	fastPointer = fastPointer.next;
    	if (!fastPointer) {
    		danshuang = 1;
    		break;
    	}
    	fastPointer = fastPointer.next;
    	if (!fastPointer) {
    		danshuang = 2;
    	}
    }
    // 记录 center，方便还原
    let center = slowPointer;

    // 比较
    let afterReverse = reverse(slowPointer);
    let frontPointer = head;
    while(afterReverse) {
        if (afterReverse.val !== frontPointer.val) {
            reverse(center);
        	return false;
        }
        afterReverse = afterReverse.next;
        frontPointer = frontPointer.next;
    }
    reverse(center);
    return true;
};

// 反转链表
const reverse = (node) => {
	if (!node) {
		return null;
	}
	if (!node.next) {
		return node;
	}
	let third = node.next.next;
	let second = node.next;
    let first = node;
	first.next = null;
    while (second) {
    	second.next = first;
    	first = second;
    	second = third;
    	third = third && third.next;
    }
    return first;
}

let a = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 1,
			next: {
				val: 3,
				next: {
					val: 1,
					next: {
						val: 2,
						next: {
							val: 1
						}
					}
				}
			}
		}
	}
}
console.log(isPalindrome(a))