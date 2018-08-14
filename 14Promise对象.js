// 6 Promise.all

let proArr = [1,2,3,4,5,6].map(function (value,idx){
    return new Promise(function (resolve,reject) {
        let num = Math.round(Math.random()*10) - 5
        if (num > 5) {
            resolve(num)
        }else{
            reject(num)
        }
    }).catch(e => console.log(`error:${e}`) )
})

Promise.all(proArr).then(function (value) {
    console.log(`value:${value}`);
}).catch(function (error) {
    console.error(error)
})

// 7 Promise.race 

let proRaceArr = [1,2,3,4,5,6].map(function (value,idx) {

    return new Promise(function (resolve,reject) {
            let num = Math.round(Math.random() * 10)
            setTimeout(() => {
                resolve(idx)
            }, num * 100);
    })
})

Promise.race(proRaceArr).then(function (value) {
    console.log(`race: ${value}`);
    
})