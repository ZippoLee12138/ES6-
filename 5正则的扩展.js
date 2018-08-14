

// 3.u修饰符
// （1）.点字符
let s = '𠮷'

console.log(/^.$/u.test(s));

// （2）Unicode字符表示法
console.log(/\u{20BB7}/u.test('𠮷'));

// （3）量词
console.log(/𠮷{2}/u.test('𠮷𠮷'));

// （4）预定义模式
console.log(/^\S$/u.test('𠮷'));

function codePointLength(str) {
    var result = str.match(/[\s\S]/gu);
    console.log('result:'+result+'type:'+typeof(result));
    return result ?  result.length : 0;
}

let s2 = '𠮷𠮷'
console.log(s2.length);
console.log(codePointLength(s2));

// （5）i修饰符
console.log(/[a-z]/iu.test('\u212A'));


// 4 . RegExp.prototype.unicode 属性
const r1 = /hello/u
console.log(r1.unicode);


// 5.y修饰符
let s3 = 'aaa_aa_a'
const r2 = /a+/g
const r3 = /a+/y

console.log('s3.r2:'+r2.exec(s3));
console.log('s3.r2(2):' + r2.exec(s3));
console.log('s3.r2(3):' + r2.exec(s3));
console.log('s3.r2(4):' + r2.exec(s3));

console.log('s3.r3:' + r3.exec(s3));
console.log('s3.r3(2):' + r3.exec(s3));
console.log('s3.r3(3):' + r3.exec(s3));
console.log('s3.r3(4):' + r3.exec(s3));

// lastIndex属性
const REGEX = /a+/g
REGEX.lastIndex = 2

let lastIndexStr = 'ayaaza'
let match = REGEX.exec(lastIndexStr)
console.log('lastIndex(1):' +typeof( match) + '+index:' + match.index);

// 5.y修饰符
const regex2 = /a/gy
let str2 = 'aaxa'
let str3 = str2.replace(regex2,'-')
console.log('str3:'+str3);

// 从字符串提取token词元

let token_y = /\s*(\+|[0-9]+)\s*/y
let token_g = /\s*(\+|[0-9]+)\s*/g

let tokenize_y = tokenize(token_y,'38x  + 4')
let tokenize_g = tokenize(token_g,'38x +  4')

function tokenize(token_reg,str) {
    let result = []
    let match;

    while (match = token_reg.exec(str)) {
        console.log('tokenize:'+match);
        result.push(match[1])
    }
    return result
}

console.log('tokenize_y:' + tokenize_y);
console.log('tokenize_g:' + tokenize_g);


//6. RegExp.prototype.sticky 属性 § ⇧
let r = /hello/y;
console.log(r.sticky);

// 7. RegExp.prototype.flags 属性 § ⇧
console.log(r.flags);

// 8. s 修饰符：dotAll 模式 § ⇧
const re9 = /boo.bar/s
console.log(re9.exec('boo\nbar'));
console.log(re9.dotAll);


// 9.后行断言

// 先行断言
let assert01 = /\d+(?=%)/g
let assertStr = '100% of US presidents have been male,20%'
let match01 = assertStr.match(assert01)
console.log(match01);

let assert02 = /\d+(?!%)/g
let match02 = assertStr.match(assert02)
console.log(match02);

// 后行断言

let assert03 = /(?<=\$)\d+/g
let assertStr02 = '$123 sddkj 66$77 ddd88'
let match03 = assertStr02.match(assert03)
console.log('match03:'+match03);

let assert04 = /(?<!\$)\d+/g
let match04 = assertStr02.match(assert04)
console.log('match04:'+match04);

let assert05 = /(?<=(\d+)(\d+))$/
let assert06 = /^(\d+)(\d+)$/

console.log('assert05:'+assert05.exec('1053'));
console.log('assert06:'+assert06.exec('1053'));

// 11.具名组匹配
const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
const matchObj = RE_DATE.exec('1990-12-12')
console.log(matchObj);

// const RE_DATE2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
// const matchObj2 = RE_DATE2.exec('2014-09-17')
// console.log('matchObj2:'+matchObj2);

// 引用
const RE_TWICE = /(\d{4})-(\d{2})-(\d{2})-\2+/
const matchObj3 = RE_TWICE.exec('1991-12-11-12')
console.log('matchObj3:'+matchObj3);


let regex3 = /t(e)(st(\d?))/g
let str4 = 'test1test2test3test4'
let matches = []
let match1 = []
while (match1 = regex3.exec(str4)) {
    matches.push(match1)
}

console.log('matches:'+matches);
