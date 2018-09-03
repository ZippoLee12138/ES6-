// Proxy
let obj1 = {
    a:1,
    b:2,
    c:3,
}
let handler1 = {
    get:function (target,property) {
        if (property == 'b') {
            return 'someone'
        }
    }
}

let proxy1 = new Proxy(obj1,handler1)
proxy1.b = 666
console.log(proxy1.b);
console.log(obj1.b);

obj1.proxy = proxy1
console.log(obj1.proxy.b);


// get方法
let person = {
    name:'someone'
}

let proxy2 = new Proxy(person,{
    get:function (target,property) {
        if (property in target) {
            return target[property]
        }else{
            throw new ReferenceError('Property "'+property+'" does not exist.')
        }
    }
})

// console.log(proxy2.name);
// console.log(proxy2.age);

// get 方法的继承
let proxy3 = new Proxy(person,{
    get:function (target,property) {
        console.log('Get "'+property+'" property');
        return target[property]
    }
})

let person2 = Object.create(proxy3)
console.log(person2.name);
console.log(person2.age);

// get 实现数组读取负数索引
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let proxy4 = new Proxy(Array, {
    get:function (target,property) {
        console.log('less than 0 ' + typeof(property) + ' ' + property);
        
        if (Number.parseInt(property) < 0) {
            property = target.length + Number.parseInt(property)
        }
        console.log(`property ${property}`);
        
        return target[property]
    }
})

//  arr1 = Object.create(proxy4)
// arr1[0] = 1
// arr1[1] = 2
// arr1[2] = 3
// arr1[3] = 4

// console.log(arr1[-1]);
