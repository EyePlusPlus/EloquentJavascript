function countBs(str){
	str = String(str);
	var pos = 0, cnt = 0; 
	while(pos < str.length){
		if(str.charAt(pos) == 'B')
			cnt++;
		pos++;
	}
	return cnt;
}

function countChar(str, chr){
	str = String(str);
	chr = String(chr);
	var pos = 0, cnt = 0;
	while(pos < str.length){
		if(str.charAt(pos) == chr)
			cnt++;
		pos++;
	}
	return cnt;
}


function printCharCount(str, chr){
	console.log("'"+chr+"'s in "+str+" = "+countChar(str, chr));
}

console.log("Counting characters...");
printCharCount("Bilbo Baggins",'B');
printCharCount("Frodo Baggins",'d');
printCharCount("Gandalf Grey",'G');