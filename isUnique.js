/**
* Is Unique
*
* Tags: Map
*
* Implement an algorithm to determine if a string has all unique characters.
* What if you cannot use additional data structures.
*/

const str = 'Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures.';

const str2 = 'abcdefghijkln';

isUnique(str2);

function isUnique(str){
	const charMap = new Map();
	for (let ch of str){
		charMap.set(ch, charMap.get(ch)+1||1);
	}
	//console.log([...charMap]);
	for (let [key,val] of charMap){
		if (val===1){
			charMap.delete(key);
		}
	}
	//console.log([...charMap]);
	return (charMap.size === 0)?true:false;
}

function isUnique2(str){
	const charSet = new Set();
	for (let ch of str){
		if (charSet.has(ch)){
			return false;
		} else {
			charSet.add(ch);
		}
	}
	return true;
}

isUnique2(str);










	
