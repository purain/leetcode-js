/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

var calcEquation = function(equations, values, queries) {
    let obj = {};

    let union = new Union(2 * equations.length);
    let id = 0;
    for (let i = 0; i < equations.length; i++) {
    	let var1 = equations[i][0];
    	let var2 = equations[i][1];
        let value = values[i];
        if (obj[var1] === undefined) {
        	obj[var1] = id;
        	id++;
        }
        if (obj[var2] === undefined) {
        	obj[var2] = id;
        	id++;
        }
        union.union(obj[var1], obj[var2], value);
    }

    let result = [];
    for (let i = 0; i < queries.length; i++) {
    	let var1 = queries[i][0];
    	let var2 = queries[i][1];
    	if (obj[var1] === undefined || obj[var2] === undefined) {
    		result.push(-1)
    	} else {
    	    result.push(union.isConnected(obj[var1], obj[var2]));	
    	}
    }
    return result;
};

class Union {
    constructor(size) {
    	this.parent = [];
    	this.weight = [];
    	for (let i = 0; i < size; i++) {
    		this.parent[i] = i;
    		this.weight[i] = 1;
    	}
    }
    union(var1, var2, value) {
        let root1 = this.find(var1);
        let root2 = this.find(var2);
        if (root1 === root2) {
        	return;
        }
        this.parent[root1] = root2;
        this.weight[root1] = this.weight[var2] * value / this.weight[var1];
    }
    find(v) {
    	if (this.parent[v] !== v) {
    		let origin = this.parent[v];
    		this.parent[v] = this.find(this.parent[v]);
    		this.weight[v] = this.weight[v] * this.weight[origin];
    	}
    	return this.parent[v];
    }
    isConnected(var1, var2) {
    	let root1 = this.find(var1);
    	let root2 = this.find(var2);
    	if (root1 === root2) {
    		return this.weight[var1] / this.weight[var2];
    	}
    	return -1;
    }
}

const equations  = [["x1","x2"],["x2","x3"],["x1","x4"],["x2","x5"]]
const values = [3.0,0.5,3.4,5.6]
const queries = [["x2","x4"],["x1","x5"],["x1","x3"],["x5","x5"],["x5","x1"],["x3","x4"],["x4","x3"],["x6","x6"],["x0","x0"]]

console.log(calcEquation(equations, values, queries))