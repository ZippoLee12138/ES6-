
const type = require('../通用方法.js')

// 静态方法
let a = []
console.log(Array.isArray(a));


// 实例方法

// push() pop()
a.push('aaa')
a.pop('aaa')
console.log(a);

// shift() unshift()
a.unshift(1)
a.unshift(2)
// a.shift()
console.log(a);
a.shift()

// join()
a.push('a')
a.unshift(0)
let aStr = a.join('--')
console.log(aStr);

// concat()
let b = [,'b','c']
let c = a.concat(b)
console.log(c);

 type.isNumber([])
// filter()
let d = c.filter(function (element,index,arr) {
    return type.isNumber(element)
})
console.log(d);


// reverse()
// console.log(c);

let dArr = [1,2,3,4,5,6,7,8]
console.log(dArr.reverse());
console.log(dArr);


let eArr = dArr.slice(2,5)
console.log(eArr);

let fArr = dArr.splice(2,1,'a','b')
console.log(dArr);
console.log(fArr);

dArr.sort((e1,e2) => e1 > e2)
console.log(dArr);


let gArr = dArr.map((value) => value + 4)
console.log(gArr);

let someFlag = dArr.some(value => type.isNumber(value))
console.log(someFlag);

let everyFlag = dArr.every(value => type.isNumber(value))
console.log(everyFlag);

let reduce = dArr.reduce((preValue,currentValue) => preValue + currentValue)
console.log(reduce);

let reduceRight = dArr.reduceRight( (preValue,currentValue) => preValue + currentValue)
console.log(reduceRight);


let index = dArr.indexOf(5)
let lastindex = dArr.lastIndexOf(5)
console.log(`${index},${lastindex}`);



