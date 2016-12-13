function foobar(event) {
	console.log(event)
	console.log(9)
}

$('.js-btn-floral').click(foobar);

// const arr = ['a','b', 'c', 'd'];
// console.log(arr)

// for( let i = 0; i < arr.length; i = i + 1 ) {
// 	console.log('current value of i is: ' + i)
// 	console.log('current iteration is: ' + arr[i]);
// }

function forEach( arr, callbackFunction ) {
	for( let i = 0; i < arr.length; i = i + 1 ) {
		const currentElement = arr[i]
		callbackFunction( currentElement, i );
	}
}

function map( arr, callbackFunction ) {
	const newArr = []
	for( let i = 0; i < arr.length; i = i + 1 ) {
		const currentElement = arr[i]
		newArr[i] = callbackFunction( currentElement, i );
	}

	return newArr;	
}

const newArray = [{
	name: 'taq'
}, {
	name: 'nigel'
}];

forEach( newArray, onEachIteration )
const newNewArray = map( newArray, function(current) {
	return 'Hello ' + current.name;
})
console.log(newNewArray)
function onEachIteration() {
	console.log('YOLO') 
}

// function foobar() {
// 	const arr = [];
// 	for( let i = 0; i < 9; i = i + 1) {
// 		arr[i] = 10;
// 	}
// 	return arr;
// }

// const my10arr = foobar();
// console.log(my10arr)