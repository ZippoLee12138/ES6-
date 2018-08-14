// 1扩展运算符
console.log(...[1,2,3]);

function add(a,b) {
    return a+b
}

console.log(add(...[4,48]));

let x = [...( 1<2 ?  [] : [2,3]),4]
console.log(...x);

let args = [18,33,4]
console.log(Math.max(...args));


let arr1 = [1,2,3],arr2 = [4,5,6,]
arr1.push(...arr2)
console.log(`arr1:${arr1}`);


// 扩展运算符的应用

// 1 复制函数
let arr4 = [5,6]
let arr5 = [...arr4]
let [...arr6] = arr4
console.log('arr5:'+arr5);
console.log('arr6:'+arr6);

// 2 合并数组
let arr7 = ['a','b']
let arr8 = ['c']
let arr9 = ['d','e']

let arr10 = [...arr7,...arr8,...arr9]
let arr11 = arr7.concat(arr8,arr9)
console.log(arr10[0] === arr11[0]);

// 3与解构赋值结合
let [ab,...rest] = [1,2,3,4,5]
console.log(`${ab}+${rest}`);

[ab,...rest] = []
console.log(`${ab}+${rest}`);

// 4字符串
console.log([...'Hello']);
let str0 = 'x\uD83D\uDE80y'
console.log(`str0.length: ${[...str0].length}`);
console.log([...str0].reverse().join('-'));


// 5 实现了 Iterator 接口的对象


// 6 Map 和 Set 结构，Generator 函数
let map = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three'],
])
let arrMap = [...map.values()]
console.log(arrMap);

const go = function *() {
    yield 1;
    yield 2;
    yield 3;
}
console.log(...go());


// 二、 Array.from() § ⇧
let arraryLike = {
    '0':'1',
    '1':'2',
    '2':'3',
    length:3
}

let arrFrom = Array.from(arraryLike)
console.log(arrFrom);

let arrFrom2 = Array.from([3,5,7],x => x*x)
console.log(arrFrom2);


function strLength(str) {
    return Array.from(str).length
}


// 三、Array.of()
console.log(Array.of(3));
console.log(Array.of(undefined));

function ArrayOf() {
    return [].slice.call(arguments)
}

console.log(ArrayOf(1,2,3,4,5,6,7));

// 四、数组实例的 copyWithin() § ⇧

console.log([1,2,3,4,5,6,7,8].copyWithin(0,6,9));


// 五、数组实例的 find() 和 findIndex() § ⇧

let findArr = [3,43,65,12,87,9]
let findx = findArr.find(x => x>10)
console.log(findx);

let findIndex = findArr.findIndex(function (value,index,arr) {  return value >60 })
console.log(findIndex);

let person = {name:'John',age:33}
let findPerson = findArr.find(function (x) {
    return x > this.age;
},person)
console.log(findPerson);

// 六、数组实例的fill()
['a','b','c'].fill(4)
Array.of(1,2,3).fill('a')

let fillArr = new Array(3).fill({name:'John'})
fillArr[0].name = 'Jack'
console.log(fillArr);

// 七、数组实例的entries() values() keys()
// let arrKK = ['a','b']
// for (const elem of arrKK.values()) {
//     console.log(elem);
// }

//八、 数组实例的 includes() § ⇧
let includes1 = [1,2,3,4].includes(2)
let includes2 = [1,2,NaN].includes(NaN)
let includes3 = [3,4,5,6,7].includes(4,-2)


// 九、数组的空位 § ⇧
let kong = Array(3)
let kong2 = [ , ,]


let arrKong = [,,]
for (let i in arrKong) {
    console.log(i);
}