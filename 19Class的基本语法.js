// es5 对象写法
function Point(x,y) {
    this.x = x
    this.y = y
}

Point.prototype.fun1 = function () {
    console.log(`x:${this.x},y:${this.y}`);
}

let point1 = new Point(1,2)
point1.fun1(0)


// es6 class写法
class PointES6{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    fun1(){
        console.log(`ES6:x:${this.x},y:${this.y}`);
    }
}

let point2 = new PointES6(3,4)
point2.fun1(0)

// Object.assign方法可以很方便地一次向类添加多个方法。

Object.assign(PointES6.prototype,{
    fun2(){
        console.log('fun2');   
    },
    fun3(){
        console.log('fun3');
    }
})

point2.fun3()

// 类的属性名，可以采用表达式。

let funName = "fun444"

Object.assign(PointES6.prototype,{
    [funName](){
        console.log(`${funName}`);
    }
})

point2[funName]()

let point2Prototype = Object.getPrototypeOf(point2)
console.log(point2Prototype);


// Class表达式

let myClass = new (class Me{
    constructor(name){
        this.name = name
    }

    hello(){
        console.log(`hello ${this.name}`);
    }
})('Gus Fring')

myClass.hello()


//7、 私有方法和私有属性

// 方法一 ： 方法名前加_

class Widget{

    // 公用方法
    foo(baz) {
        this._bar(baz)
    }

    // 私有方法
    _bar(baz){
        return this.baz = baz
    }
}



// 将私有方法移出模块

class Widget1{
    foo(baz){
        bar.call(this,baz)
    }
}

function bar(baz) {
    return this.baz = baz
}

// 方法三：利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。

let barSymbol = Symbol('bar')
let snafSymbol = Symbol('snaf')

class Widget2 {

    foo(baz){
        this[barSymbol](baz)
    }

    [barSymbol](baz){
        return this[snafSymbol] = baz
    }

}

console.log(Widget2.name);
