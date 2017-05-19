/*find the index first non iterative letter
exemple 'leetcode' => 0 (index of the letter l)
exemple 'loveleeetcode' => 1 (index of the letter o)*/

function firstUnique1(str){
	const myMap = new Map();
	for (let char of str){
		if (myMap.has(char)){
			myMap.set(char, false);
		} else {
			myMap.set(char, true);
		}
	}
	for (let i=0; i<str.length; i++){
		if (myMap.get(str[i]) === true){
			return i;
		}
	}
	return -1;
}

function firstUnique2(str){
	const charsMap = new Map();
	for (let char of str){
		charsMap.set(char, charsMap.get(char)+1||1);
	}
	for (let char of str){
		if (charsMap.get(char) === 1){
			return str.indexOf(char);
		}
	}
	return -1;
}
