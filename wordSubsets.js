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

//console.log(wordSubsets(['caterpillar', 'coton'], ['cat', 'pillar']))
//console.log(wordSubsets(['cat', 'doggy', 'car', 'bike'], ['caterpillar', 'dog', 'motor']))

console.log(wordSubsets2(["amazon","apple","facebook","google","leetcode"],["lo","eo"]))

//console.log(wordSubsets2(['caterpillar', 'coton'], ['cat', 'pillar']))
//console.log(wordSubsets2(['cat', 'doggy', 'car', 'bike'], ['caterpillar', 'dog', 'motor']))