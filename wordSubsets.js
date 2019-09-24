/*
We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a. 

Return a list of all universal words in A.  You can return the words in any order.
*/

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */

/* example
wrr is a subset of warrior
a word is universal if every is a subset of this world

A = ['cat', 'doggy', 'car', 'bike']
B = ['caterpillar', 'dog', 'motor']

is 'caterpillar' a subset of 'cat' => no, so cat is not universal
is 'caterpillar' a subset 

--------------

A = ['caterpillar', 'coton']
B = ['cat', 'pillar']

cat is a subset of caterpillar
pillar is a subset of caterpillar
caterpillar is universal

*/

function isSubsets (strA, strB){
	//check if strB is a subset of strA
	// wrr is a subset of warrior
	// wrr is not a subset of world

	// create an object from strA like this for example "pill"
	// mapStrA = {'p' : 1, 'i' : 1, 'l' : 2}

	var mapStrA = {}

	for (let i = 0; i < strA.length; i++){
		if (!mapStrA[strA[i]]){
			mapStrA[strA[i]] = 1
		} else {
			mapStrA[strA[i]] += 1
		}
	}

	// then loop through each character of strB
	// if key exist in mapStrA and value > 0, decrease value by one, and go to next chacrater
	// if key doesn't exist strB is not a subset of strA
	// if key exist but value equal 0 strB is not a subset of str A
	for (let i = 0; i < strB.length; i++){
		if (!mapStrA[strB[i]]){
			return false
		} else if (mapStrA[strB[i]] === 0){
			return false
		} else {
			mapStrA[strB[i]] -= 1
		}
	}

	return true

}

var wordSubsets = function(A, B) {
	var isUniversal = true
	var universalList = []

	for (let j = 0; j < A.length; j++){
		isUniversal = true
		// check if word in B is a subset of A
		for (let i = 0; i < B.length; i++){
			if (!isSubsets(A[j], B[i])){
				isUniversal = false
				break;
			}
			if (universal){
				universal.push()
			}

		}

	return universal

	}


};