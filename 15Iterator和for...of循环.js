// 1、Iterator 概念

let  it = makeIterator(['a','b'])

for (let index = 0; index < 3; index++) {
   console.log(it.next());
}

function makeIterator(arr) {
    let index = 0
    return {
        next:function () {
            return index < arr.length ?
            {value:arr[index++], done:false} :
            {value:undefined, done:true}
        }
    }
}

// git amend测试
// 暂存修改