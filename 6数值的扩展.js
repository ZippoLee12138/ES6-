// 'use strict'
//1. 二进制和八进制表示法 § ⇧
console.log(Number('0b111'));
console.log(Number('0o10'));

(function () {
    console.log(0o11 === 011);
})()

// 2.Number.isFinite(), Number.isNaN() § ⇧
console.log(Number.isFinite(12));
console.log(Number.isFinite(0.4));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite('f00'));
console.log(Number.isFinite(true));


// 3.Number.parseInt(), Number.parseFloat() § ⇧
console.log(Number.parseFloat('123.45'));
console.log(Number.parseInt('123.45'));

// 4.Number.isInteger() § ⇧
console.log(Number.isInteger(25));
console.log(Number.isInteger(25.0));

console.log(Number.isInteger(null));
console.log(Number.isInteger('15'));

console.log(Number.isInteger(5e-324));

// 5.Number.isInteger() § ⇧

console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);


// 6.安全整数和 Number.isSafeInteger() § ⇧
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.isSafeInteger(9007199254740992));

console.log(Number.MIN_SAFE_INTEGER);

// 7.Math 对象的扩展 § ⇧
console.log(Math.trunc(-4.1));

console.log(Math.trunc('123.45'));
console.log(Math.trunc(true));
console.log(Math.trunc(null));

// Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
console.log(Math.sign(-5));
console.log(Math.sign(-0));

console.log(Math.sign(' 1'));

// Math.cbrt方法用于计算一个数的立方根。
console.log(Math.cbrt(-8));


// Math.hypot方法返回所有参数的平方和的平方根。
console.log(Math.hypot(3,4));

// ES6 新增了 6 个双曲函数方法。
console.log(Math.sinh(60));


// 8.指数运算符 § ⇧
console.log(2**2);

let a = 2
console.log(a **= 2);

