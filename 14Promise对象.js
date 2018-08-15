// 基本用法
function getPromise1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('before resolve');
        }, 0);
        resolve()
    })
}


getPromise1().then(function () {
  console.log('then function');
})

console.log('hello');


function loadImageAsync(url) {
    return new Promise(function (resolve,reject) {
        const image = new Image()

        image.onload = function () {
           console.log('onload');
            resolve(image)
        }

        image.onerror = function () {
            console.log('onerror');
            reject(new Error('Could not load image at '+url))
        }

        image.src = url
    })
}

// loadImageAsync("http://static-1253586872.file.myqcloud.com/mfq/production/url/5b639ba994b94da295eb8c083740a6b0.jpg")

// Ajax操作
const getJSON = function (url) {
    return new Promise(function (resolve,reject) {
        const handler = function () {
            if (this.readyState != 4) {
                return;
            }
            if (this.status == 200) {
                resolve(this.reponse)
            }else{
                reject(new Error(this.statusText))
            }
        }

        const client = new XMLHttpRequest()
        client.open("GET",url)
        client.onreadystatechange = handler
        client.responseType = 'json'
        client.setRequestHeader('Accept','application/json')
        client.send()
    })
}

// getJSON('http://localhost:8001/db').then(function (reponse) {
//     console.log(reponse);
// }).catch(function (error) {
//     console.error('出错了',error);    
// })
console.log('--------------------------------------------------------');


function p1() {
    return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    console.log('p1 reject');
                    reject(new Error('fail'))
                }, 3000);
            })
}

function p2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('p2 resolve');
            resolve(p1())
        }, 1000);
    })
}

p2().then((result) => {
  console.log('then ');
}).catch((err) => {
    console.log('err');
});

Promise.prototype.finally = function (callback) {
    let p = this.constructor;
    return this.then(
        value => p.resolve(callback()).then(() => value),
        reason => p.resolve(callback()).then(() => {throw reason})
    );
};

let p3 = Promise.resolve(2).then(() => {})
let p4 = Promise.reject(3).finally(() => {})
console.log(`p3:${p3},p4:${p4}`);
