function dataTable(data){
	console.log(Object.keys(data[0]));
}


//data
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function drawBorders(str1, str2, width){
	var result = "";
	result+=str1;
	result+=repeat(str2,width-2);
	result+=str1+"\n";
	return result;
}


function repeat(str, times){
	var result = "";
	for(var i=0;i<times;i++)
		result+=str;
	return result;
}

function drawBox(width, height){
	var result = "";
	result+=drawBorders("+","-",width);
	for(i=0;i<(height-2);i++)
		result+=drawBorders("|"," ",width);
	result+=drawBorders("+","-",width);
	
	return result;
}
console.log(drawBox(10,4));