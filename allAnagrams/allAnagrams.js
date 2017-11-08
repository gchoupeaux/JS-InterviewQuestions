/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


// work only for string length of 3
var allAnagrams3 = function(string) {
	var result = [];
	for (var a = 0; a < 3; a++){
		for (var b = 0; b < 3; b++){
			for (var c = 0; c < 3; c++){
				if(a !== b && b !== c && a !== c){
					result.push([string[a], string[b], string[c]].join(''));
				}
			}
		}
	}
	return [ ...new Set(result) ];
};

// recursive function to make work for any string length
var allAnagrams = function(string) {
	var results = [];

	var rec = function(result, indexList){
		var result = result || '';
		var indexList = indexList || [];
		if (result.length === string.length){
			return results.push(result);
		}
		for (var i = 0; i < string.length; i++){
			// check if current i allready in result
      		if (indexList.indexOf(i) === -1){
				rec(result + string[i], indexList.concat(i));
      		}
		}
	};
	
	rec();
	
	// remove duplicate if more than one time the same letter
	return [ ...new Set(results) ];
};

allAnagrams3('aab');
allAnagrams('aab');
