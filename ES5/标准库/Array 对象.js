
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

