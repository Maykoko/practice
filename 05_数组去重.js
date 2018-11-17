var arr = [];
function updata(aa) {
	for(var i=0; i<aa.length; i++) {
		// console.log(aa[i])
		if (arr.indexOf(aa[i]) == -1) {
			arr.push(aa[i]);
		}
	}
	return arr;

}
var aa = [1,2,2,4,9,6,7,5,2,3,5,6,5];
console.log(updata(aa))
// 返回时一个数组
// 
// 
//es6  新增方法去重
// let arr =  [1,2,2,4,9,6,7,5,2,3,5,6,5];
// let set = new Set(arr);

// console.log(set)
//返回是一个对象
