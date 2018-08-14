let [a,b,c] = [1,2,3]
console.log('a:'+a+',b:'+b+',c:'+c);
let dic = {aaa:1,bbb:2,ccc:3}
let {aaa,ccc,bbb}= dic
console.log('aaa:'+aaa+',bbb:'+bbb+',ccc:'+ccc);

let [d,[e],f,g] = [4,[5,8],6]
console.log('d:'+d+',e:'+e+',f:'+f+',g:'+g);

// set赋值
let [x,y,z] = new Set(['a','b','c'])
console.log('x:'+x+',y:'+y+',z:'+z);


// 默认值

let [foo = true] = [undefined]
console.log('foo:'+foo);

function foo1() {
    console.log('foo1');
    return 1234
}

let [foo11 = foo1] = [222]
console.log('foo1:'+foo11);


let [a1=1,a2=a1] = [3,4]
console.log('a1:'+a1+',a2:'+a2);



//2. 对象的解构赋值

let {foo2,bar,foo3} = {bar:'bar',foo2:'foo2'}
console.log('foo2:'+foo2+',bar:'+bar+',foo3:'+foo3);


let {foo4:bar1,bar1:foo4} = {foo4:'foo4',bar1:'bar1'}
console.log('bar1:'+bar1+',foo4:'+foo4);


let obj = {
    p:[
        'Hello',
        {y:'World'}
    ]
}

let {p,p:[{y:j01},{y:j}]} = obj,k=000
console.log('p:'+p+',k:'+k+',j:'+j);


const node = {
    loc:{
        start:{
            line:1,
            column:5
        }
    }
}

let {loc,loc:{start},loc:{start:{column:my_column}}} = node
console.log('my_column:'+my_column+',start:'+start);

let obj01 = {}
let arr01 = [];
({foo: obj01.prop ,bar: arr01[0] } = {foo:123,bar:true})
console.log('obj01:'+obj01+',arr01:'+arr01);


// 对象的属性值严格等于undefined
let {x_undefined = 3} = {x_undefined:100}
console.log('x_undefined:' + x_undefined);

// let {foo5:{bar}} = {bar:'baz'}

let arr6 = [1,2,3]
let {0:first,[arr6.length - 1]:last} = arr6
console.log('first:'+first+',last:'+last);

// 3. 字符串的解构赋值

const [str1,str2,str3,str4] = 'Hello'
console.log('str1:'+str1+',str2:'+str2+',str3:'+str3);

let {length:len} = 'hello'
console.log('length:'+len);

// 4. 数值和布尔值的解构赋值
let {toString : s} = 123
console.log(s === Number.prototype.toString);

let {toString : s2} = true
console.log(s2 === Boolean.prototype.toString);


// 5.函数参数的解构赋值

function add([x,y] = [0,0]) {
    console.log('add.x:'+x+',add.y:'+y);
}

add([1]);


[[1, 2], [3, 4]].map(([a, b]) => a + b);

[[1,2],[3,4]].map( ([a,b]) => {
    let c = a+b
    console.log('map.a:'+a+'map.b:'+b)
});

[[1, 2], [3, 4]].map(([a, b]) => a + b);


[1,undefined,3].map((x='yes')=>{console.log('x:'+x);})


// 用途
let x9 = 1,
x10 = 2;
[x9,x10] = [x10,x9]
console.log('x9:'+x9+',x10:'+x10);


function example() {
    return [1,2,3]
}

let [a10,a11,a12] = example()
console.log('a10:'+a10+',a11:'+a11);


function f007({x,y,z}) {
    console.log('f007:x:'+x+',y:'+y+',z:'+z);
}

f007({y:9,z:10,x:11})

let jsonData = {
    id:42,
    status:'OK',
    data:[867,5309]
}

let {id,status,data} = jsonData
console.log('jsonData:'+id+status+data);


function kkk(url,{a = 111,b=222}) {
    console.log('a:'+a+',b:'+b);
}

kkk('url',{a:100})

// (6)遍历Map结构
const map = new Map()
map.set('first','hello')
map.set('second','world')

for (const [key,value] of map) {
    console.log(key+' is '+value);
}

for (const [,value] of map) {
    console.log(value+'00');
}
