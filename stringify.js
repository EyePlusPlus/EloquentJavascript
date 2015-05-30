//Some predefined objects to test the function
var fruits = {
	Apple: ["red","green"],
	Mango: ["yellow","green"],
	Grapes: ["black","green"],
	Orange: ["1"],
};

var nestedObj = {
	This: {1.2: {a: {nested: {object: null}}}}
};

var names = ["Ted","Robin","Lily","Marshall","Barney"];
var games = [
	["Cricket",["Bat","Ball",2]],
	["Football",["Ball"]],
	["Hockey",[5.1,"Stick","Ball"]],
	["Golf",["Club","Ball"]]
];

function isArray(obj){
	return (Object.prototype.toString.call(obj) === "[object Array]");
}

//Abstracted the code that checks the type of element and accordingly concatenates
function concatElement(ele){
	var str = "";
	if(typeof ele == "object")
		str+=stringify(ele);
	else if(typeof ele == "number")
		str+=ele;
	else
		str+='"'+ele+'"';
	return str; 
}


function stringify(data){
	var str = "";
	if(data == null) return "null";
	if(isArray(data)){
		str+="[";
		data.forEach(function(d,i){
			str+=concatElement(d);
			if(i != (data.length-1)) str+=",";
		});
		str+="]";
	}
	else{
		str+="{";
		for(ele in data){
			str+='"'+ele+'":';
			str+=concatElement(data[ele])+",";
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