// 判断对象的类型


function type(obj) {
    let str1 = Object.prototype.toString.call(obj)    
    let reg = /\[object (.*?)\]/
    let matchResult = str1.match(reg)
    return matchResult[1].toLowerCase()
}

[
    'Array',
    'String',
    'Number',
    'Object,',
    'Boolean',
    'Null',
    'Undefined',
    'Function',
    'RegExp',
    'Symbol'
].forEach(function (t) {
    type['is' + t] = function (str) {
        return t.toLowerCase() == type(str)
    }
})

let r = type.isNull(null)
console.log(r);
console.log(typeof(type));
console.dir(type)


module.exports = {
    isNumber:type.isNumber,
    isString:type.isString,
    isArray: type.isArray,
    isObject:type.isObject,
    isBoolean: type.isBoolean,
    isNull: type.isNull,
    isUndefined: type.isUndefined,
    isFunction: type.isFunction,
    isRegExp: type.isRegExp,
    isSymbol: type.isSymbol,
}