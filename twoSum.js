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

// return index using a map
var twoSum = function(nums, target) {
    var checkedNum = new Map();
    let searchNum = 0;
    for (let i=0; i<nums.length; i++){
      searchNum = target-nums[i];
      if (checkedNum.has(searchNum)){
      	return [checkedNum.get(searchNum),i];
      } else {
      	checkedNum.set(nums[i],i);
      }
    }
    return false;
};

// return index using a set
var twoSum = function(nums, target) {
    var checkedNum = new Set();
    let searchNum = 0;
    for (let i=0; i<nums.length; i++){
      searchNum = target-nums[i];
      if (checkedNum.has(searchNum)){
      	return [nums.indexOf(searchNum),i];
      } else {
      	checkedNum.add(nums[i]);
      }
    }
    return false;
};

// with an object used like a map
var twoSum = function(nums, target) {
	const checkNum = {};
  let sub = 0;
	for (let i=0; i<nums.length; i++){
		sub = target-nums[i];
		if (checkNum[sub] !== undefined ){
			return [checkNum[sub],i];
		}
		checkNum[nums[i]]=i;
	}
  return [];
};
