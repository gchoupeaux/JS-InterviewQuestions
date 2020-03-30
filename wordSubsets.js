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
		}
		if (isUniversal){
			universalList.push(A[j])
		}
	}
	return universalList
};

// -----------------------------------------
// better time complexity the map is not remade every time

function isSubsets2 (mapStrA, strB){
	//check if strB is a subset of strA
	// wrr is a subset of warrior
	// wrr is not a subset of world

	// loop through each character of strB
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



var wordSubsets2 = function(A, B) {
	var isUniversal = true
	var universalList = []
	var mapStrA = {}

	// convert A in a dictionnary like this
	// {'catterpillar': {'c':1, 'a':1, ...}}
	// create an object from strA like this for example "pill"
	// mapStrA = {'p' : 1, 'i' : 1, 'l' : 2}

	var mapStrsA = {}

	for (let j = 0; j < A.length; j++){
		mapStrsA[A[j]] = {}
		for (let i = 0; i < A[j].length; i++){
			if (!mapStrsA[A[j]][A[j][i]]){
				mapStrsA[A[j]][A[j][i]] = 1
			} else {
				mapStrsA[A[j]][A[j][i]] += 1
			}
		}
	}

	//console.log(mapStrA)

	// how to iterate on an object key

	for (let key in mapStrsA){
		isUniversal = true
		// check if word in B is a subset of A
		for (let i = 0; i < B.length; i++){

			mapStrA = {}
			Object.assign(mapStrA, mapStrsA[key])

			console.log(mapStrA, B[i])

			if (!isSubsets2(mapStrA, B[i])){
				isUniversal = false
				break;
			}
		}
		if (isUniversal){
			universalList.push(key)
		}
	}
	return universalList
};


// Even better
// For example, when checking whether "warrior" is a superset of words B = ["wrr", "wa", "or"], we can combine these words in B to form a "maximum" word "arrow", that has the maximum count of every letter in each word in B.

var wordSubsets3 = function(A, B){

	var maximumWordList = []

	function wordCount(word){
		var count = {}
		for (let i = 0; i < word.length; i++){
			if (!count[word[i]]){
				count[word[i]] = 1
			} else {
				count[word[i]] += 1
			}
		}
		return count
	}
	
	// create the maxium word with B {a:1, c:2, ...}
	var maximumWord = {}

	for (let j = 0; j < B.length; j++){
		let count = wordCount(B[j])
		for (var key in count){
			if (!maximumWord[key]){
				maximumWord[key] = count[key]
			} else{
				maximumWord[key] = Math.max(maximumWord[key], count[key])
			}
		}
	}

	// compare each word in A to the maximum word
	for (let i = 0; i < A.length; i++){

		var isMaximum = true  
		let count = wordCount(A[i])

		for (var key in maximumWord){
			if (!count[key]){
				isMaximum = false
				break;
			} 
			if (count[key] < maximumWord[key]){
				isMaximum = false
				break;
			}
		}

		if (isMaximum){
			maximumWordList.push(A[i])
		}

	}

	return maximumWordList

}


//console.log(wordSubsets(['caterpillar', 'coton'], ['cat', 'pillar']))
//console.log(wordSubsets(['cat', 'doggy', 'car', 'bike'], ['caterpillar', 'dog', 'motor']))

console.log(wordSubsets3(["amazon","apple","facebook","google","leetcode"],["loo","eoll"]))

//console.log(wordSubsets2(['caterpillar', 'coton'], ['cat', 'pillar']))
//console.log(wordSubsets2(['cat', 'doggy', 'car', 'bike'], ['caterpillar', 'dog', 'motor']))

