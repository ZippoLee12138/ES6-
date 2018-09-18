let a = {b:33}
Object.defineProperty(a,'a',{
    value:1,
    writable:true,
    enumerable:true,
    configurable:false,
    // set:undefined,
    // get:undefined
})

console.log(`a:${a}`);
console.dir(a)

let aDesc = Object.getOwnPropertyDescriptor(a,'a')
console.log(aDesc);

let allDescs = Object.getOwnPropertyNames(a)
console.log(allDescs);


let arrKeys = Object.keys([])
let arrProNames = Object.getOwnPropertyNames([])
console.log(`arrKeys:${arrKeys},arrProNames:${arrProNames}`);


console.log(a.propertyIsEnumerable('a'));
a.a = 12
console.log(`a.a:${a.a}`);

let aAccessor = {}
Object.defineProperty(aAccessor,'p',{
    get: function(){
        return 'get value'
    },
    set:function (value) {
        console.log(`setter:${value}`);
    }
})
aAccessor.p = 6
console.log(aAccessor.p);

let obj0 = {
    set p(value){
        console.log(`setter:${value}`);
    },
    get p(){
        return 'getter:p'
    }
}
obj0.p = 22
console.log(obj0.p);

let obj1 = {
    $n : 5,
    get next(){
        return this.$n++
    },
    set next(n){
        if (n >= this.$n) {
            this.$n = n
        }else {
            throw new Error('新的值必须大于当前值')
        }
    }
}

console.log(`obj1.next:${obj1.next}`);
obj1.next = 19

Object.preventExtensions(obj1)
obj1.kk = 1
console.log(obj1.kk);
