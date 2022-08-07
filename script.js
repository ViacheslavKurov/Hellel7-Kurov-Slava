"use strict";
//1
const sumTo = (n) => (n === 1 ? n : n + sumTo(n - 1));
console.log(sumTo(4));
console.log(sumTo(3));

//2
function findShort(string){
	let shorterWord=string.split(' ').reduce(function(shorter,currentWord){
		if(shorter.length==currentWord.length){
			return shorter
		}
		return shorter.length<currentWord.length ? shorter:currentWord;

	},);
	return shorterWord
}



const sentance = "Lorem ipsum dolor sit amet";
console.log(findShort(sentance)); 
console.log(findShort("Hello world")); 
console.log(findShort("Hi")); 
console.log(findShort("She is David's sister")); 
