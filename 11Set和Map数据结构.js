// 1.Set 没有重复的
const set1 = new Set([1,2,3,4,5,6,7,7,7,7])
console.log(set1);

let a = {a:1,b:{c:2}}
let jsonStr = JSON.stringify(a)
let kk = JSON.parse(jsonStr)
console.log(kk);


let a1 = [1,2,3,4,5,6,7,8,9,0]
let len = a1.length - 1
while (--len > 0) {
    if (a1[len] == 4 ) {
        a1.splice(len,1)
        break
    }
}
console.log(...a1);

// Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
let s1 = new Set([1,2,3,4,4,5,6,6,7])
console.log(s1);

console.log(...new Set([1,1,1,1,1,3]));


let s2 = new Set()
s2.add({})
s2.add({})
console.log(s2);

let s3 = new Set([1,2,3,4,5,5,6,7,8,9,9])
s3.add(2)
s3.delete(3)
console.log(s3.has(4));
s3.clear()
console.log(s3);


const a4 = Array.from(new Set([1,2,3,4,4,5,6]))
console.log(a4);


// 遍历操作

let s4 = new Set([1,2,3,4,5,6,7])

// keys()

for (const item of s4.keys()) {
    console.log(item);
}

// values()
console.log('values()');

for (const item of s4.values()) {
    console.log(item);
}

// entries()

console.log('entries()');

for (const item of s4.entries()) {
    console.log(item);
    
}


// forEach()

s4.forEach((value, key) => {console.log(key + ':' + value);})


// 因此使用 Set 可以很容易地实现并集（ Union）、 交集（ Intersect） 和差集（ Difference）。

let set5 = new Set([1,2,3]),set6 = new Set([3,4,5])

// 并集
let setUnion = new Set([...set5,...set6])
console.log('并集');
console.log(setUnion);

// 交集
let setIntersect = new Set([...set5].filter(item => set6.has(item)))
console.log('交集');
console.log(setIntersect);

// 差集
let setDifference = new Set([...set5].filter(item => !set6.has(item)))
console.log('差集');
console.log(setDifference);

