/*build an array of unique element without using set
input [1,1,1,2,4,4,6,6] => output [1,2,4,6]
*/

//easy way use a set
function uniqueEl(inputArr){
	const outputArr = [];
	const mySet = new Set(inputArr);
	for (var el of mySet){
		console.log(el);
		outputArr.push(el);
	}
		return outputArr;
}

const inputArr = [1,1,1,2,4,4,6,6];

uniqueEl([1,1,1,2,4,4,6,6]);

//without using a Set
function uniqueEl2(inputArr){
	let index = 1;
	for (let i=1; i<inputArr.length; i++){
		if (inputArr[i] !== inputArr[i-1]){
			inputArr[index] = inputArr[i];
			index ++;
		}
	}
	while (inputArr.length > index){
		inputArr.pop();
	}
	return inputArr;
}

uniqueEl2([1,1,1,2,4,4,6,6]);
