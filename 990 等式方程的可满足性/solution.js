/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
	let obj = {};
	let unionEqual = new Union(equations.length * 2);
	let result = true;
    let id = 0;
    for (let i = 0; i < equations.length; i++) {
    	let var1 = equations[i][0];
    	let var2 = equations[i][3];
    	let sign = equations[i].slice(1, 3);
    	if (obj[var1] === undefined) {
    		obj[var1] = id;
    		id++;
    	}
    	if (obj[var2] === undefined) {
    		obj[var2] = id;
    		id++;
    	}
    	if (sign === '==') {
            unionEqual.union(obj[var1], obj[var2], sign);	
    	}
    }
    for (let i = 0; i < equations.length; i++) {
    	let var1 = equations[i][0];
    	let var2 = equations[i][3];
    	let sign = equations[i].slice(1, 3);
    	if (sign === '!=') {
    		if (unionEqual.isConnected(obj[var1], obj[var2])) {
    			return false;
    		}
    	}
    }
    return result;
};

class Union {
	constructor(size) {
		this.parent = [];
		for (let i = 0; i < size; i++) {
            this.parent[i] = i;
		}
	}
	find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);	
        }
        return this.parent[x];
	}
	union(id1, id2, sign) {
        let top1 = this.find(id1);
        let top2 = this.find(id2);
        if (top1 === top2) {
        	return;
        }
        this.parent[top1] = top2;
	}
	isConnected(id1, id2) {
		let top1 = this.find(id1);
		let top2 = this.find(id2);
		if (top1 === top2) {
			return true;
		} else {
			return false;
		}
	}
}

let equations = ["c==c","b==d","x!=z"]
console.log(equationsPossible(equations))