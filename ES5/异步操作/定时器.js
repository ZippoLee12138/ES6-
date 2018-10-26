// setTimeout()

let a = 2

let obj = {
    a:1,
    y:function () {
        console.log(this.a);
    }
}

obj.y()

setTimeout(obj.y, 0);

setTimeout(() => {
    obj.y()
}, 10);

let time1 = setTimeout(obj.y.bind(obj), 100);


// setInterval()

// let timer = setInterval(function () {
//     console.log('setInterval 1111');
    
// },10)

clearTimeout(time1)
console.log(`time1:${time1}`);
