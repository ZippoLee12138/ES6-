// 1.Set 没有重复的
const set1 = new Set([1,2,3,4,5,6,7,7,7,7])
console.log(set1);

let a = {a:1,b:{c:2}}
let jsonStr = JSON.stringify(a)
let kk = JSON.parse(jsonStr)
console.log(kk);


let a = [1,2,3,4,5,6,7,8,9,0]
let len = a.length - 1
while (--len > 0) {
    if (a[len] == 4 ) {
        a.splice(len,1)
        break
    }
}
console.log(...a);
