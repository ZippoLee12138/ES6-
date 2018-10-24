// 异步操作的模式

//回调函数 
function f1(callback) {
    console.log('f1');
    callback()
}

function f2() {
    console.log('f2');
    
}

f1(f2)

// 异步操作流程控制

function myAsync(arg,callback,tag) {
    console.log(`${tag}:参数是${arg},1s后返回结果`);
    setTimeout(() => {
        callback(arg * 2)
    }, 1000);
}

function callback2(arg) {
    console.log(`From callback2: ${arg}`);
}

// myAsync(1,callback2)

console.log('------------------------------------------------------------------');


// 串行执行
let items = [1,2,3,4,5,6]
let results = []

function series(allItems,idx = 0) {

    if (idx < allItems.length) {
        myAsync(allItems[idx], function (result) {
            console.log(`串行${allItems[idx]}的执行结果${result}`);
            results.push(result)
            return series(allItems,++idx)
        },'串行')
    }

}

// series(items)

// 并行执行

// for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     myAsync(item,function (result) {
//         console.log(`并行${item}执行结果是${result}`);
//     },'并行')
// }

// 串行 并行 的结合

let limit = 1,running = 0,ranIdx = 0

function serialAndParallel() {
    while (ranIdx < items.length && running < limit) {
        running++

        function insideFun(item) {
            myAsync(item, function (result) {
                console.log(`串行&并行${item}执行结果:${result}`);
                running--
                if (running < limit) {
                    serialAndParallel()
                }
            }, '串行&并行')
        }

        insideFun(items[ranIdx])
        ranIdx++
    }

}

serialAndParallel()