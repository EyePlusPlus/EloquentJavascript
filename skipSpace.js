// This is the old skipSpace. Modify it...
function skipSpace(string) {
	var match = /^(\s|#.*)*/.exec(string);
	console.log(match[0].length);
	string = string.slice(match[0].length);
	var first = string.search(/\S/);
	if (first == -1) return "";
	return string.slice(first);
}

console.log(skipSpace("# This is hidden \n#This also hidden\nThis shows"));