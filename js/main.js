// var myArray = ["dumbo", "dumb", "dumber", "stupid", "retard"];

// console.log(myArray.length);


// for(i = 0; i < myArray.length; i++) {
// 	console.log(myArray[i]);
// 	console.log(myArray[i].length);
// }


// var copy = [];
// for(i = 0; i < myArray.length; i++) {
// 	copy.push(myArray[i])

// }

// var reversedArray = copy.reverse

// myArray.sort()


// var numArray = [76, 23, 58, 15, 275]

// numArray.sort(function(a, b) {
// 					return a - b;
// })

// numArray.sort(function(a,b) {
// 					return b - a;
// })


// var newArray = ["danisa", "is", "dirty"]

// newArray.push("really", "dirty");

// newArray.shift();

// 4 strings

var nextArray = [];


function updateArray() {
	var userInput = document.getElementById("userInput").value;
	var listItem = document.getElementsByTagName('ul')[0];
	var item = document.createElement("li");
	nextArray.push(userInput)
	for(i = 0; i < nextArray.length; i++) {
		item.textContent = nextArray[i];
		listItem.appendChild(item);
	}
}