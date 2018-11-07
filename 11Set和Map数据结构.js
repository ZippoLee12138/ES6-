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
