// 1.属性的简洁表示法§⇧

let foo = 'bar'
let baz = {foo}
console.log(baz);

const o = {
    method(){
        return 'Hello!'
    }
}
console.log(o.method());

let birth = '1991/12/11'
const someone = {
    name:'someone',
    birth,
    hello(){console.log(`我的名字是${this.name}`);}
}

someone.hello()

function getPoint() {
    const x = 1
    const y = 3
    return {x,y}
}

console.log(getPoint());


// 2.属性名表达式 § ⇧
let secondName = 'second name'
let obj = {
    'first name':'hade',
    ['last'+' name']:'snow',
    [secondName]:'lee',
}
console.log(obj['last name']);
console.log(obj[secondName]);

let obj2 = {
    ['h'+'ello'](){
        return 'hi'
    }
}

obj2.hello()

// 3.方法的name属性

const person ={
    sayName(){
        console.log('hello!someone!');
    }
}

console.log(person.sayName.name);

let doSomething = function () {
    
}

let do2 = doSomething.bind().name
console.log(`do2:${do2}`);


// 4.Object.is()
console.log(Object.is(+0,-0));
console.log(Object.is(NaN,NaN));

// 5.Object.assgin() 将源对象（source）的所有可枚举属性，复制到目标对象（target）。

const target = {a:1,b:2,}
const source1 = {b:3}
const source3 = {c:4}
Object.assign(target,source1,source3)
console.log(target);

console.log(Object.assign(2));
console.log(typeof 2);

const v1 = 'abc'
const v2 = true
const v3 = 10
console.log(Object.assign({},v1,v2,v3));

console.log(Object.assign([1,2,3],[4,5]));

// 常见用途
class  Point{
    constructor(x,y){
        Object.assign(this,{x,y})
    }
}

// 6、属性的可枚举性和遍历 § ⇧
let obj4 = { foo : 123 }
console.log(Object.getOwnPropertyDescriptor(obj4,'foo'));

Object.setPrototypeOf(obj4,null)
console.log(Object.getPrototypeOf(obj4));


// 9.super关键字

const proto = {
    foo:'Hade'
}

const obj5 = {
    foo:'snow',
    // say:function (){
    //     // return super.foo
    //     console.log(this.foo);
    // },
    say:()=>{
        console.dir(this)
        console.log(this.foo);
    }
}


Object.setPrototypeOf(obj5,proto)
console.log(obj5.say());


// 10. Object.keys() Object.values() Object.entries()

let obj6 = { foo : 'bar',baz : 42 }
let {keys,values,entries} = Object

console.log(`keys:${keys(obj6)},\nvalues:${values(obj6)},\nentries:${entries(obj6)}`);


// 11.对象的扩展运算符 解构赋值必须是最后一个参数
let {x,y,...z} = {x:10,y:11,a:2,b:5}

console.log(`x:${x},y:${y},z:${JSON.stringify(z)}`);

// 扩展运算符
let q = {a:3,b:4}
let n = {...q}
console.log(n);


let kkk = { ...q,
    a: 5,
    b: 9}
console.log(kkk);
