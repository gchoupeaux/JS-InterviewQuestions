function search(array, value) {
	let lIndex = 0;
	let rIndex = array.length-1;
	let midIndex = Math.floor((rIndex-lIndex)/2);
	while (lIndex<rIndex){
		if (array[midIndex] === value){
			return midIndex;
		} else if (array[midIndex] < value){
			lIndex = midIndex + 1;
		} else{
			rIndex = midIndex - 1;
		}
		midIndex = Math.floor((rIndex-lIndex)/2);
	}
	return null;
}

function assertEqual(actual, expected, testName){
	if (actual === expected){
		console.log(`passed [${testName}]`);
	} else {
		console.log(`FAILED [${testName}] expected "${expected}" but got "${actual}"`);
	}
}

assertEqual(search([1, 3, 16, 22, 31, 33, 34], 7), null, 'look for index of target in sorted array');
