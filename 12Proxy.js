// Proxy
let obj1 = {
    a:1,
    b:2,
    c:3,
}
let handler1 = {
    get:function (target,property) {
        if (property == 'b') {
            return 'hadesnow'
        }
    }
}

let proxy1 = new Proxy(obj1,handler1)
proxy1.b = 666
console.log(proxy1.b);
console.log(obj1.b);

obj1.proxy = proxy1
console.log(obj1.proxy.b);

