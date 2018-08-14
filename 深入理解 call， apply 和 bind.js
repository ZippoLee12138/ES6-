// 深入理解 call， apply 和 bind http://www.cnblogs.com/onepixel/p/5143863.html

console.log('深入理解call,applu,bind');

function callTest() {
    console.dir(this)
}

function b() {}

// callTest()
// callTest.call( null)
// callTest.call( undefined)

let obj = {a:24}

callTest.call(1)
callTest.call('d')
callTest.call(true)
callTest.call(b)

let a = {
    name:'lzb',
    say:function () {
        console.log('Hi,I\'m function a !');
    }
}

function b(name) {
    console.log(`Post params:${name}`);
    console.log(`I'm ${this.name}`);
    this.say()
}

// b.call(a,'test')

function applyTest(x,y,z) {
    console.log(x,y,z);
}

applyTest.apply(null,[1,2,3],2)


let c = b.bind(a,'bindtest')
c()


// bind 函数

this.x = 9;

let module01 = {
    x:81,
    getX:function () { console.log(this.x);}
}

module01.getX()

let retrieveX = module01.getX
retrieveX()

let boundGetx = retrieveX.bind(module01)
boundGetx()


function Foo() {
    getName = function () {
        console.log(1);
    }
    return this
}

Foo.getName = function () {
    console.log(2);
}

Foo.prototype.getName = function () {
    console.log(3);
}

let getName = function () {
    console.log(4);
}

// function getName() {
//     console.log(5);
// }

// Foo.getName()
// getName()

// new Foo.getName()
console.log('----------');

let fun3 = new Foo().getName()
console.log(typeof(fun3))
// new new Foo().getName()


// let obj2 = {}
// let fun2 = Foo().getName().call(obj2)
// console.dir(fun2);


let func = new Function('num','console.log(num)')
func('lzb')