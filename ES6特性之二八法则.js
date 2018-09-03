// https://www.jianshu.com/p/287e0bb867ae

// 1、变量声明const和let

var funs = []
for (var i = 0; i < 10; i++) {
    funs.push(function () {
        console.log(i)
    })
}

funs.forEach(function (func) {
    func()
})

// ES5 “立即调用函数”
var funs2 = []
for (var i2 = 0; i2 < 10; i2++) {
    funs2.push((function (value) {
            return function () {
                console.log(value);
            }
        })(i2)
    )
}
console.log('-------------------');

funs2.forEach(function (func) {
    func()
})

// 2、字符串
// 模板字符串

// ES5
var name5 = 'lux'
console.log('hello '+name5);

// ES6
const name6 = 'lux'
console.log(`hello ${name6}`);


// ES5
var msg5 = 'Hi \n\
man!\
'
console.log('msg5:'+msg5);

// ES6
const msg6 = `<div>
    <span>hello world</span>
</div>`
console.log(`msg6:${msg6}`);


// 方法
// 1.includes 
const str = 'hahay'
console.log(str.includes('ha'));

// 2.repeat 字符串重复n次
console.log(str.repeat(2));

// 3.startWith & endsWith 
const str1 = 'hello world!'
console.log(str1.startsWith('hello'));
console.log(str1.endsWith('d!'));

// 4.padStart & padEnd
// let startTime = new Date().getTime()
// let interval =  setInterval(() => {
//         const nowDate = new Date()
//         const hours = nowDate.getHours().toString()
//         const minutes = nowDate.getMinutes().toString()
//         const seconds = nowDate.getSeconds().toString()
//         console.log(`${hours.padStart(2,0)}:${minutes.padStart(2,0)}:${seconds.padStart(2,0)}`);
//         if (nowDate.getTime() - startTime > 10000) {
//             clearInterval(interval)
//         }

// },1000)

let myObj = { 
    address : '北京海淀区',
    name : 'lala'
}
let str3 = '${name}在${address}上班...'
// 模拟一个方法 myTemplate(str) 最终输出 'lala在北京海淀区上班...'
function myTemplate(str,obj) {
    console.log('myTemplate');
    
    let reg = /\${(.+?)}/g
    let reg2 = /\${(.+?)}/
    let str2 = str
    while (true) {
        let arr = reg.exec(str)
        if (!arr) {
            break
        }
        console.log(obj[arr[1]]);
      str2 =  str2.replace(reg2, obj[arr[1]])
    }

    return str2
    

}
console.log(myTemplate(str3,myObj)) // lala在北京海淀区上班...


// 实现标签化模板(自定义模板规则) 。
const name = 'cc'
const gender = 'male'
const hobby = 'basketball'
// 实现tag最终输出 '姓名：**cc**，性别：**male**，爱好：**basketball**'
function tag(strings,...values) {
    // do it
    console.log(strings,values);
    
}
const str4 = tag`姓名：${name}，性别：${gender}，爱好：${hobby}`
console.log(str4) // '姓名：**cc**，性别：**male**，爱好：**basketball**'


// 4.拓展的对象功能

const objA = {
    name:'cc',
    age:18,
}

const objB = {
    address:'beijing',
    name:'someone',
}

const objC  = {}

Object.assign(objC,objA,objB)
console.log(`objC:${JSON.stringify(objC)}`);



// Promise
console.log('Promise-------------------------------');

setTimeout(function () {
    console.log(1)
}, 0);
new Promise(function executor(resolve) {
    console.log(2);
    for (var i = 0; i < 10000; i++) {
        i == 9999 && resolve();
    }
    console.log(3);
}).then(function () {
    console.log(4);
});
console.log(5);
