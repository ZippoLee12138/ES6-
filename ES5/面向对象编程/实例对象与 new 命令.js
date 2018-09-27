let Vehicle = function (name) {
    this.name = name
}

let car = new Vehicle('car')
console.dir(car)

// 不使用 new 引起的变量问题
let Vehicle2 = function (name) {
    'use strict'
    this.name = name
}

let car2 = new Vehicle2()
console.dir(car2)


// instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

let Vehicle3 = function (name) {
    if (!(this instanceof Vehicle3)) {
        return new Vehicle3(name)
    }
    this.name = name
}

Vehicle3.prototype.call = function () {
    console.log(`hello:${this.name}`);
    
}

let car3 = Vehicle3('ccc')
console.dir(car3)
car3.call()


let a1 = function (name) {
    this.a1 = name
}

let a2 = function (name) {
    this.a2 = name
}

let a3 = function (name) {
    this.a3 = name
}

a2.prototype = new a1('a1')
a3.prototype = new a2('a2')

let instanceA3 = new a3('a3')
console.log(instanceA3.a1)