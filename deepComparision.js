function deepEqual(val1, val2){
	if(val1 === val2) return true;

	if(typeof val1 != "object" || typeof val2 != "object" || val1 == null || val2 == null) return false;

	var cnt = [];
	for(vals in arguments){
		var i = 0;
		for(ele in vals) i++;
		cnt.push(i);
	}
	if(cnt.length == 2){
		if(cnt[0] == cnt[1]){
			for(ele in val1){
				if((ele in val2) && (deepEqual(val1[ele], val2[ele]))) return true;
				else return false;
			}
		}
		else return false;
	}
	return val1 == val2;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true