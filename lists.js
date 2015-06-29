function arrayToList(arr){
	var list;
	if(arr.length > 0){
		list = {value: arr.shift(), rest: arrayToList(arr)};
	}
	return list;
}

function listToArray(list){
	if(arguments[1] == undefined) var arr = [];
	else arr = arguments[1]
	if(list != null){
		arr.push(list.value);
		listToArray(list.rest,arr);
	}
	return arr;
}

function prepend(ele, list){
	return {value: ele, rest: list};
}
function nth(no, list){
	if(list == null) return undefined;
	else if(no == 0) return list.value;
	else return nth(no-1, list.rest);
}

console.log(arrayToList([1,2,3]));
console.log(listToArray(arrayToList([1,2,3])));
console.log(prepend(4, arrayToList([1,2,3])));
console.log(nth(2, arrayToList([1,2,3])));