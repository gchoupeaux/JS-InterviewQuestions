/*Java Script sorting function*/
// sorting char
const arrChar = 'guillaumechoupeaux'.split('');
console.log(arrChar.sort(function(ch1,ch2){
	if (ch1>ch2) return 1;
	else if (ch2>ch1) return -1;
	else return 0;
})); 

// sorting num
const arrNum =  [10,40,5,8,78,100,100,2,0,1,-2.1,3.4];
console.log(arrNum.sort(function(ch1,ch2){
	return ch2-ch1; //descending
	//return ch1-ch2; asending
})); 

/*sorting array of NOT unique element*/
const arr = [10,40,5,100,8,78,2,100,2,0,1,-2.1,3.4];

function mySort(arr){
	const sortedArr = [];
	let minVal = Infinity;
	let minIndex = 0;
	while (sortedArr.length !== arr.length){
		minVal = Infinity;
		for (let i=0; i<arr.length; i++){
			if (arr[i]<minVal){
				minVal = arr[i];	
				minIndex = i;
			}	
		}
		arr[minIndex] = undefined;
		sortedArr.push(minVal);
	}
	return sortedArr;
} 

mySort(arr); //O(n^2)

/*
var array = [];

for(var i = 0; i < 20; i++) {
	array.push(Math.round(Math.random() * 100));
}
*/