/* function foobar(event) {
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
// console.log(my10arr) */




const Macallan = {
	name:'Macallan',
	lat:57.4845275,
	long:-3.2103307,
}

const Bowmore = {
	name:'Bowmore',
	lat:55.756868,
	long: -6.289846

}

 const Talisker ={
 	name:'Talisker',
 	lat:57.3023159,
 	long:-6.3570732
 }

 const Lagavulin = {
 	name:'Lagavulin',
 	lat:55.6355151,
 	long:-6.1262054
 }

// is it ok I removed the space?
const OldPultney = {
	name:'OldPultney',
	lat:58.4354,
	long:-3.0847
}

const Glenfiddich = {
	name:'Glenfiddich',
	lat:57.4547645,
	long:-3.1286601,
}

const Springbank = {
	name:'Springbank',
	lat:55.4257842,
	long:-5.6097508
}

const Cragganmore = {
	name:'Cragganmore',
	lat:57.4097188,
	long:-3.3953227
}

const Laphroiag = {
	name:'Laphroiag',
	lat:55.6300569,
	long:-6.1543927
}

const Cardhu = {
	name:'Cardhu',
	lat:57.4704521,
	long:3.3523197

}

const distilleryList1 = [Macallan,Bowmore,Talisker,Lagavulin,OldPultney,Glenfiddich,Springbank,Cragganmore,Laphroiag,Cardhu];

console.log(distilleryList1)
