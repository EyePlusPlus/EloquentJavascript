var arr = [
	[1,2],
	[3,4],
	[5,6],
	[7,8],
	[9,10]
];

console.log(arr.reduce(function(newArr,curr){
	curr.forEach(function(ele){
		newArr = newArr.concat(ele);
	});
	return newArr;
}));