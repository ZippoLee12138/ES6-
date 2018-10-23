
// instanceof 运算符

var s = "String"
console.log(s instanceof String);


// 利用instanceof运算符，还可以巧妙地解决，调用构造函数时，忘了加new命令的问题。

function Fubar(foo,bar) {
    if (this instanceof Fubar) {
        this._foo = foo
        this._bar = bar
    }else {
        return new Fubar(foo,bar)
    }
}

// 构造函数的继承

// 整体继承
 function F(fatherName) {
    this.fname = fatherName
}

function S(sonName) {
    //方法一
    // F.call(this)

    //方法二
    this.base = F
    this.base()
    this.sname = sonName
}

S.prototype = Object.create(F.prototype)
S.prototype.constructor = S

let s1 = new S('jack')
console.log(s1 instanceof S);
console.log(s1 instanceof F);
console.log(`s1:${s1.sname}`);


// 单个方法的继承

function F2() {
    
}

F2.prototype.makeMoney = function () {
    console.log(this instanceof S2);
    
    console.log('Method makeMoney of Father2');
}

function S2() {
    
}

// S2.prototype.makeMoney = F2.prototype.makeMoney

S2.prototype.makeMoney = function () {
    F2.prototype.makeMoney.call(this)
}

let f2 = new F2()
let s2 = new S2()

f2.makeMoney()
s2.makeMoney()


// 多重继承
function M1() {
    this.hello = 'Hello'
}

function M2() {
    this.world = 'world'
}

function S3() {
    M1.call(this)
    M2.call(this)
}

S3.prototype = Object.create(M1.prototype)
Object.assign(S3.prototype,M2.prototype)

S3.prototype.constructor = S3

let s3 = new S3()
console.log(s3.hello);
console.log(s3.world);




// 闭包测试

function outside(x) {
    function inside(y) {
        console.log(`x:${x}`);
        console.log(`y:${y}`);
        return x + y
    }
    return inside
}

let oOutside = outside(3)
console.log(`oOutside:${oOutside}`);

let o2Outside = oOutside(5)
console.log(`o2Outside:${o2Outside}`);
