// create a fucntion that reverse a string
// input "abc"
// output "cba"

function reverse(str){
	var strOut = ""
	for (i = (str.length -1); i >= 0; i--){
		strOut += str[i]
	}
	return strOut
}

function reverse1(str){
	var strOut = []
	for (i = 0; i < str.length; i++){
		strOut.push(str[i])
	}
	return strOut.reverse().join('')
}

function reverse2(str){
	if (typeof(str) === "string"){
		return str.split('').reverse().join('')
	} else{
		return null
	}
}

reverse("baba")