//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8

const lb = {
	val : 3,
	next : null
};

const la = {
	val : 4,
	next : lb
};

const l1 = {
	val : 2,
	next : la
};


const ly = {
	val : 4,
	next : null
};

const lx = {
	val : 6,
	next : ly
};

const l2 = {
	val : 5,
	next : lx
};

var addTwoNumbers = function(l1, l2) {
	let sum = sumNum(l1) + sumNum(l2);
	return buildLinkedList(sum.toString().split('').reverse());
};


function sumNum(list){
	const nums = [];
	while (list.next !== null) {
		nums.push(list.val);
		list = list.next;
	}
	nums.push(list.val);
	return Number(nums.reverse().join(''));
}

 function ListNode(val) {
	this.val = val;
	this.next = null;
 }

function buildLinkedList(nums){
	var head = new ListNode(Number(nums[0]));
	var lastNode = head;
	for (var i=1; i<nums.length; i++){
		if(lastNode.next !== null){
			lastNode = lastNode.next;
		}
		lastNode.next = new ListNode(Number(nums[i]));
	}
	return head;
}

buildLinkedList([8,0,7]);

addTwoNumbers(l1,l2);
