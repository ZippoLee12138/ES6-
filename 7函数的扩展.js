// 1.函数参数的默认值 § ⇧

// es5
function test(x,y) {
    if (typeof(y) === 'undefined') {
        y = 'World'
    }
    console.log(x,y);
}

test('Hello',0)

// es6
let a = 10
function test2(x = 1, y = a + 2) {
    console.log(`${x}+${y}=${x+y}`);
}
a = 100
test2(3)



function foo({x,y = 5} = {}) {
    console.log(`foo:${x}+${y}=${x+y}`);
}

foo({x:4})


function m1({x = 0,y = 0} = {}) {
    console.log(`m1:${x}+${y}=${x+y}`);
}

function m2({x,y} = {x:0,y:0}) {
    console.log(`m2:${x}+${y}=${x+y}`);
}

m1({x:3})
m2({x:3})

// 参数默认值的位置 § ⇧
function f1(x=1,y) {
    console.log(`f1:${x}+${y}=${x+y}`);
}
f1(null,3)

console.log(f1.length);


// 作用域
let x = 1
function f2(x=x) {
    // let x = 2
    console.log(`f2:x:${x}`);
}

// f2()

// 2.rest参数
function restTest(a,...values) {
    console.log(values);
    
    let sum = 0
    for (const val of values) {
        console.log(val);
    }
}

restTest(1,2,3,4,5,6,7,8,9)

// 4. name属性
console.log(restTest.name);


// 5.箭头函数

let f = v => v

let f3 = (num1,num2) =>  { 
    console.log(`num1:${num1},num2:${num2}`);
    return  num1 + num2
}
console.log(f3(3,4));

let getTempItem = id => {return {id:id,name:'Temp'}}

console.log(getTempItem(23));
 
let fn = ({first,last}) => first + ' k ' +last
console.log(fn({first:2,last:3}));

const isEven = n => n%2 == 0
const square = n => n*n

console.log('isEven:' + isEven(2));

console.log([1, 2, 3, 4].map(x => x * x));
 
let result = [4,32,7,10,98,1,3].sort((a,b) => a - b)
console.log('result:'+result);

const headAndTail = (head,...tail) => [head,tail]
console.log(headAndTail(1,2,3,4,5,6,7,8,9,10));

// 箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域
function foo1() {
    setTimeout(() => {
        console.log('id:' + this.id);
        console.log('this:' + JSON.stringify(this));
    }, 100);
}

var id = 12;
foo1.call({id:24},1)

console.log('global:foo1:'+JSON.stringify(foo1));


// 

function  Timer() {
    this.s1 = 0;
    this.s2 = 0;

    setInterval(() => {
        this.s1++
        console.log('s11111111')
    },1000)
    setInterval(function () {
        this.s2++;
        console.log('s222222222222');
    },1000);
}

// let timer = new Timer();

// setTimeout(() => {
//     console.log('s1：',timer.s1);
//     console.log(JSON.stringify(timer));
    
// }, 3100);

// setTimeout(function () {
//     console.log('s2：',timer.s2);
//     console.log(JSON.stringify(timer));

// }, 3100);


// 尾调用优化 尾递归
function factorial(n,total) {
    if (n == 1) {
        return total
    }
    return  factorial(n-1,n*total)
}

console.log('阶乘：'+factorial(5,1));


// 柯里化
function keliFactorial(fn,n) {
    return function (m) {
        console.dir("keli:"+this);
        
        return fn.call(this,m,n)
    }
}

const kk = keliFactorial(factorial,1)
console.log('阶乘2：'+kk(5));


// 实现尾递归优化
function tco(f) {
    let value;
    let active = false;
    let accumulated = [];

    return function () {
        accumulated.push(arguments)
        console.dir(accumulated);
        
        if (!active) {
            active = true
            while (accumulated.length) {
                    
              value =  f.apply(this,accumulated.shift())
              
            }
            active = false
            return value;
        }
    }
}

let sum = tco(function (x,y) {
    console.log('yyyyy:'+y);
    
    if (y > 0) {
        return sum(x+1,y-1)
    }else{
        return x
    }
})

console.log(sum(1,10));

