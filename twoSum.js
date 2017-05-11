// find if 2 numbers sum to the target return true or false

function twoSum(numbers,target){
	const numbersChecked = new Set();
	for (let num of numbers){
		if (numbersChecked.has(target-num)){
			return true;
		}	else {
			numbersChecked.add(num);
		}	
	}
	return false;
}

twoSum([1,2,3,4],8);
