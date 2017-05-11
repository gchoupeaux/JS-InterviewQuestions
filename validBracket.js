//Valid bracket
// '[aa]{(aa)}b()' true
// ']b(a)' false
// 'a{(}b)' false

function validBracket(str){
	const openers = new Set('(','{','[');
	const closers = new Set(')','}',']');
	const pairs = new Map([["{", "}"], ["[", "]"], ["(", ")"]]);
	const stack = [];
	
	for (let char of str){
		if (openers.has(char)){
			stack.push(char);
		}	else if (closers.has(char)){
			if (stack.length===0){
				return false;
			} else if(pairs.get(stack.pop()) !== char){
				return false;
			}
		}	
	}
	return stack.length === 0;
}

validBracket('a{(}b)');