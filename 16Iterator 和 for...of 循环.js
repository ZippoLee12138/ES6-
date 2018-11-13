// Iterator（ 遍历器） 的概念

// 实现Iterator



let myIterator = function () {
    let idx = 0
    return {
        next:function () {
            return {value:idx++,done:false}
        }
    }
}

let i1 = myIterator()

for (let i = 0; i < 5; i++) {
    console.log(i1.next());   
}
