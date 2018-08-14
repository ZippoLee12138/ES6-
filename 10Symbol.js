// 1.概述

let s = Symbol('a')
console.log(s);
let s1 = Symbol('s1')
let s2 = Symbol(2)
console.log(`s1:${s1.toString()},s2:${s2.toString()}`);

let s1Bool = Boolean(s1)
console.log(`s1Bool:${s1Bool}`);


// 2.作为属性名的 Symbol § ⇧

let a ={}
a[s] = 'Hello!'
console.dir(a)
console.log('a by Symbol :', JSON.stringify(a));

// 3.实例：消除魔术字符串 § ⇧

const shapeType = {
    triangle:Symbol()
}

function getArea(shape,options) {
    let area = 0
    switch (shape) {
        case shapeType.triangle:
            area = .5 * options.width * options.height;
            break;
    
        default:
            break;
    }
    return area
}

console.log(getArea(shapeType.triangle,{width:3,height:4}));


// 4.属性名的遍历 § ⇧
let symbolObj = {}
let aS = Symbol('a')
let bS = Symbol('b')
symbolObj[aS] = 'Hello'
symbolObj[bS] = 'World'
symbolObj.aa = '!'

const objectSymbols = Object.getOwnPropertySymbols(symbolObj)
console.log(objectSymbols);
console.log(Reflect.ownKeys(symbolObj));


// 5.Symbol.for()，Symbol.keyFor() § ⇧
let sf1 = Symbol.for('sf1')
let sf2 = Symbol.for('sf1')

console.log(sf1 === sf2);

console.log(Symbol.keyFor(sf2));

// 7.内置的Symbol 值

class MyClass {
    [Symbol.hasInstance](foo){
        return foo instanceof Array
    }
}

console.log([1,2,3] instanceof new MyClass());

// Symbol.isConcatSpreadable § ⇧
let arr9 = ['c','d']
console.log(`aaaa:${arr9[Symbol.isConcatSpreadable] = false}`); 
console.log(['a', 'b'].concat(arr9, 'e'));


