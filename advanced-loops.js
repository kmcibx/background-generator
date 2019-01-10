const littlefeature = {
	1: thing;
	2: thingy;
	3: thingys;
}

const basket = ['apples', 'oranges', 'grapes'];

for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
} 

basket.forEach(item => {
	console.log(item);
})

//for of - item is a var created in for brackets,
//for of iterates arrays and strings (these are iterable)
//like a for each
for(item of basket) {
	console.log(item)
}


//for in - used for object properties,
// enurmerating lists out properties in objs (returns apples/oranges/grapes)
// like key, values and entries
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000,
}

for (item in detailedBasket) {
	console.log(item)
}