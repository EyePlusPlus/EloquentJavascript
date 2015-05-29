var fruits = {
	Apple: ["red","green"],
	Mango: ["yellow","green"],
	Grapes: ["black","green"],
	Orange: [1],
};

var nestedObj = {
	This: {1: {a: {nested: {object: null}}}}
};

var names = ["Ted","Robin","Lily","Marshall","Barney"];
var games = [
	["Cricket",["Bat","Ball",2]],
	["Football",["Ball"]],
	["Hockey",[5,"Stick","Ball"]],
	["Golf",["Club","Ball"]]
];

function isArray(obj){
	return (Object.prototype.toString.call(obj) === "[object Array]");
}

function stringify(data){
	var str = "";
	if(data == null) return "null";
	if(isArray(data)){
		str+="[";
		data.forEach(function(d,i){
			if(typeof d == "object")
				str+=stringify(d);
			else{
				if(isNaN(d))
					str+='"'+d+'"';
				else
					str+=d;
			}
			if(i != (data.length-1)) str+=",";
		});
		str+="]";
	}
	else{
		str+="{";
		for(ele in data){
			str+='"'+ele+'":';
			if(typeof data[ele] == "object")
				str+=stringify(data[ele]);
			else{
				if(isNaN(data[ele]))
					str+='"'+data[ele]+'"';
				else
					str+=data[ele];
			}
			str+=",";
		}
		str = str.substr(0,(str.length-1));
		str+="}";
	}
	return str;
}

console.log(JSON.stringify(fruits));
console.log(stringify(fruits));
console.log(JSON.stringify(nestedObj));
console.log(stringify(nestedObj));
console.log(JSON.stringify(names));
console.log(stringify(names));
console.log(JSON.stringify(games));
console.log(stringify(games));