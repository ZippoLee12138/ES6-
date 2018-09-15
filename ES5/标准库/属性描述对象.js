let a = {b:33}
Object.defineProperty(a,'a',{
    value:1,
    // writable:false,
    enumerable:true,
    configurable:false,
    // set:undefined,
    // get:undefined
})

console.log(`a:${a}`);
console.dir(a)
