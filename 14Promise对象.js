// 基本用法
// function getPromise1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log('before resolve');
//         }, 0);
//         resolve()
//     })
// }


// getPromise1().then(function () {
//   console.log('then function');
// })

// console.log('hello');


// function loadImageAsync(url) {
//     return new Promise(function (resolve,reject) {
//         const image = new Image()

//         image.onload = function () {
//            console.log('onload');
//             resolve(image)
//         }

//         image.onerror = function () {
//             console.log('onerror');
//             reject(new Error('Could not load image at '+url))
//         }

//         image.src = url
//     })
// }

// // loadImageAsync("http://static-1253586872.file.myqcloud.com/mfq/production/url/5b639ba994b94da295eb8c083740a6b0.jpg")

// // Ajax操作
// const getJSON = function (url) {
//     return new Promise(function (resolve,reject) {
//         const handler = function () {
//             if (this.readyState != 4) {
//                 return;
//             }
//             if (this.status == 200) {
//                 resolve(this.reponse)
//             }else{
//                 reject(new Error(this.statusText))
//             }
//         }

//         const client = new XMLHttpRequest()
//         client.open("GET",url)
//         client.onreadystatechange = handler
//         client.responseType = 'json'
//         client.setRequestHeader('Accept','application/json')
//         client.send()
//     })
// }

// // getJSON('http://localhost:8001/db').then(function (reponse) {
// //     console.log(reponse);
// // }).catch(function (error) {
// //     console.error('出错了',error);    
// // })
// console.log('--------------------------------------------------------');


// function p1() {
//     return new Promise(function (resolve, reject) {
//                 setTimeout(() => {
//                     console.log('p1 reject');
//                     reject(new Error('fail'))
//                 }, 3000);
//             })
// }

// function p2() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log('p2 resolve');
//             resolve(p1())
//         }, 1000);
//     })
// }

// p2().then((result) => {
//   console.log('then ');
// }).catch((err) => {
//     console.log('err');
// });

// Promise.prototype.finally = function (callback) {
//     let p = this.constructor;
//     return this.then(
//         value => p.resolve(callback()).then(() => value),
//         reason => p.resolve(callback()).then(() => {throw reason})
//     );
// };

// let p3 = Promise.resolve(2).then(() => {})
// let p4 = Promise.reject(3).finally(() => {})
// console.log(`p3:${p3},p4:${p4}`);


// // 6 Promise.all
// let proArr = [1, 2, 3, 4, 5, 6].map(function (value, idx) {
//     return new Promise(function (resolve, reject) {
//         let num = Math.round(Math.random() * 10) - 5
//         if (num > 5) {
//             resolve(num)
//         } else {
//             reject(num)
//         }
//     }).catch(e => console.log(`error:${e}`))
// })
// Promise.all(proArr).then(function (value) {
//     console.log(`value:${value}`);
// }).catch(function (error) {
//     console.error(error)
// })

// // 7 Promise.race 
// let proRaceArr = [1, 2, 3, 4, 5, 6].map(function (value, idx) {
//     return new Promise(function (resolve, reject) {
//         let num = Math.round(Math.random() * 10)
//         setTimeout(() => {
//             resolve(idx)
//         }, num * 100);
//     })
// })
// Promise.race(proRaceArr).then(function (value) {
//     console.log(`race: ${value}`);

// })


// 8 Promise.resolve()
// console.log('Promise.resolve()\n-------------------------------------------------------');

// // （2）参数是一个thenable对象


// setTimeout(() => {
//     console.log('next event loop');
    
// }, 0);

// let thenable = {
//     then:function (resolve,reject) {
//         resolve(42)
//     }
// }

// let p5 = Promise.resolve(thenable)
// p5.then(function (value) {
//     console.log(value);
    
// })

// const p7 = Promise.resolve()
// p7.then(function () {
//     console.log('p7');

// })

// console.log('middle event');


// const p6 = Promise.resolve('Hello')
// p6.then(function (s) {
//     console.log(`p6 s :${s}`);
    
// })

// // 9 Promise.reject()
// const p = Promise.reject('出错了')
// p.catch(function (error) {
//     console.log(error);
    
// })

// const  thenable2 = {
//     then(resolve,reject){
//         reject('出错了2')
//     }
// }

// Promise.reject(thenable2).catch(function (err) {
//     console.log(err === thenable2);
    
// })

let a = 1

let promise11 = new Promise(function (resolve,reject) {
    
    setTimeout(() => {
        if (a == 1) {
            resolve()
        } else {
            reject()
        }
    }, 100);

})

setTimeout(() => {
    a = 2
}, 10);

promise11.then((result) => {
    console.log(`sucess ${result}`);
    
}).catch((err) => {
    console.log(`err ${err}`);
    
});

