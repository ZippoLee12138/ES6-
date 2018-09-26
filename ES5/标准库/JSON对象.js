
// JSON.stringify方法练习

let a = {a:1,b:2,c:'c',d:{d:4}}
let json1 = JSON.stringify(a)
console.log(json1);


let properties = ['b','c']
let json3 = JSON.stringify(a,properties)
console.log(`json3:${json3}`);



function jsonTest(key,value) {
    console.log(`jsonTest key:${key},${value}`);
    if (typeof(value) == 'number') {
            return 1 + value
    }
    return value
}

let json2 = JSON.stringify(a,jsonTest,2)
console.log(`json2${json2}`);
console.log(a);

// toJSON方法

let reg = /dd/
RegExp.prototype.toJSON = RegExp.prototype.toString
let json4 = JSON.stringify(reg)
console.log(`json4:${json4}`);

