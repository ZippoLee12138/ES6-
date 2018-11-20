function* helloWorldGenerator() {
   console.log(yield 1);
   let hh = yield 2
    console.log(hh);
    
    return 'end'
}

let hwGen = helloWorldGenerator()
// console.log(hwGen.next().value);
// console.log(hwGen.next(333));
// console.log(hwGen.next(2222).value);

for (const iterator of hwGen) {
    console.log(iterator);
    
}


let aaa = 10

function* addGenerator() {
    yield aaa = aaa + 1
}

let addGen = addGenerator()

setTimeout(() => {
    addGen.next()
    console.log(`after time out aaa:${aaa}`);

}, 0);

console.log(`aaa:${aaa}`);



// 与 Iterator接口的关系
console.log('与 Iterator接口的关系');

let  myIterator = {}
myIterator[Symbol.iterator] = function* () {
    yield 1
    yield 2
    yield 3
}

for (const iterator of myIterator) {
    console.log(iterator);
    
}


// for...of方法

function* foo() {
    yield 1 
    yield 2
    yield 3
    yield 4 
    yield 5 
    return 6
}

for (const iterator of foo()) {
    console.log(iterator);
    
}


// Generator.prototype.throw()

function* generator1() {
    try {
        yield console.log('generrator 111');
        yield console.log('generrator 222');
        yield console.log('generrator 333');
    } catch (error) {
        console.log(`error222:${error}`);
    }

}

let gen01 = generator1()
gen01.next()
gen01.throw(new Error('错误'))
gen01.next()


// Generator.prototype.return()
console.log('Generator.prototype.return()');

let i = 1
function* generatorReturn() {
    while (true) {
        yield i++
    }
}

let genR = generatorReturn()
console.log(genR.next());
console.log(genR.next());
console.log(genR.return('kkk'));

console.log(genR.next());
console.log(genR.next());

console.log(`i:${i}`);

