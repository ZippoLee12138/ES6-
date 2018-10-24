// Objcet.getPrototypeOf()

function Foo(tag = 'Fag') {
    this.tag = tag
}

function Fee(tag = 'Fee') {
    this.tag = tag
}

let f1 = new Foo('kkk')
console.log(Object.getPrototypeOf(f1));
console.log(f1.__proto__);
Object.setPrototypeOf(f1,Object.create(Fee.prototype))
let prototype1 = Object.getPrototypeOf(f1)
let prototype2 = Object.getPrototypeOf(prototype1)
console.log(`prototype1:${prototype1.constructor.name},\nprototype2:${prototype2.constructor.name}`);
let dd = Object.getPrototypeOf(f1).constructor
console.log(dd);


// Object.prototype.isPrototypeOf()
console.log(Foo.prototype.isPrototypeOf(f1));

let arr = new Array(3)
// Object.getOwnPropertyNames() 所有属性（包含可遍历、不可遍历的） 不包含继承的
console.log(Object.getOwnPropertyNames(arr));
// Object.keys() 只获取那些可以遍历的属性
console.log(Object.keys(arr));


// Object.prototype.hasOwnProperty() 

let flag1 = arr.hasOwnProperty('toString')
console.log(`flag1:${flag1}`);

// in运算符常用于检查一个属性是否存在。

// 获得对象的所有可遍历属性（ 不管是自身的还是继承的）， 可以使用for...in循环。

for (const key in arr) {

    console.log(`out key:${key}`);

    if (arr.hasOwnProperty(key)) {
        const element = arr[key];
        console.log(`key:${key}`);
        
    }
}