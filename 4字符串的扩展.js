

// 7. includes(), startsWith(), endsWith()
let s = 'Hello world!'
let result1 = s.startsWith('Hello')
let result2 = s.endsWith('world!')
let result3 = s.includes(' ')
let result4 = s.indexOf('l')
console.log('result1:'+result1+',result2:'+result2+',result3:'+result3+',result4:'+result4);

// 8.repeat()
let x_repeat = 'x'.repeat(3)
console.log('x_repeat:'+x_repeat);

let zero_repeat = 'na'.repeat(0)
console.log('zeo_repeat:'+zero_repeat);


// 9.padStart(),padEnd()

let padStartStr = 'abc'.padStart(6,'123456')
console.log('padStartStr:'+padStartStr);

let padStartNum = '1'.padStart(10,'0')
console.log('padStartNum:'+padStartNum);

let padEndNum = '123'.padEnd(10,'0')
console.log('padEndNum:'+padEndNum);

let date = '12'.padStart(10,'YYYY-MM-DD')
console.log('date:'+date);

let dateEnd = '2014-09'.padEnd(10,'-DD')
console.log('dateEnd:'+dateEnd);

// 模板字符串
let templateVar = 123
let templateString = `In JavaScript this is 
not legal ${templateVar} \``
console.log('templateString:'+templateString);


// trim() 方法
let trimStr = `
<ul>
    <li>first</li>
    <li>second</li>
</ul>
`.trim();
console.log('trimStr:\n'+trimStr);

let x=1,y=2
console.log(`${x} + ${y*2} = ${x+y}`);

let obj = {x:11,y:12}
console.log(`${obj.x + obj.y}`);

// 调用函数
function fu() {
    console.log('Hello World!');
}

console.log(`foo ${fu()} bar`);


let obj2 = {x:'xxx',y:'yyy'}
console.log(`obj2: ${obj2.toString()}`);

console.log(`Hello ${'World!'}`);

let func = eval.call()

const tmpl = data => `
<table>
    ${data.map(innerData => `
    <tr><td>${innerData.first}</td></tr>
    <tr><td>${innerData.second}</td></tr>
    `)}
</table>
`.trim();
let myData = [
    {first:11,second:22},
    {first:33,second:33}
]

console.log(tmpl(myData));

console.log('myData toString:'+myData.toString());

let funcStr = 'return' + '`Hello ${data}`'
let func01 = new Function('data',funcStr)
console.log(func01('Jack'));

// 12.实例：模板编译

let templateCompile = `
<ul>
    <% for(let i = 0; i < data.supplies.length; i++) { %>
        <li><%= data.supplies[i] %></li>
    <% } %>
</ul>
`

function compile(templateCompile) {
    
const  evalExpr = /<%=(.+?)%>/g
const expr = /<%([\s\S]+?)%>/g

console.log('regex:'+evalExpr.exec(templateCompile));
console.log('regex:02' + expr.exec(templateCompile));

console.log('regex1:'+templateCompile.match(evalExpr));
console.log('regex2:' + templateCompile.match(expr));

templateCompile = templateCompile
.replace(evalExpr,'`); \n  echo( $1 ); \n echo(`')
.replace(expr,'`); \n $1 \n echo(`');
console.log('replace:\ntemplateCompile:'+templateCompile);

templateCompile = 'echo(`' + templateCompile + '`);';

let script = 
`(function parse(data){
    let output = "";

    function echo(html){
        output += html;
    }

    ${ templateCompile }
                console.log('output:'+output);

    return output;
})`;

return script;

}


let parse = eval(compile(templateCompile));
console.log('parse:'+parse+'sdsdsdsdsdsd\n');

console.log(parse({
    supplies: ["broom", "mop", "cleaner"]
}));


// 模板标签
function tag(StringArr, ...values) {
    console.log('StringArr[0]:' + StringArr[0]);
    console.log('StringArr[1]:' + StringArr[1]);
    // console.log('StringArr[2]:' + StringArr[2]);
    console.log('StringArr.length:' + StringArr.length);
    
    console.log(values[0]);
    
}

let a =3,b = 4
tag`${a+b}`

let total = 30
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
    let result = ' ';
    let i = 0;
    console.log('literals:'+literals);
    console.log('arguments:' + arguments.length + 'arguments[0]:' + arguments[0] + 'arguments[1]:' + arguments[1] + 'arguments[2]:' + arguments[2]);
    
    while (i < literals.length) {
        result += literals[i++];
        console.log('while result:'+result);
        
        if (i < arguments.length) {
            result += arguments[i];
            console.log('if result:'+result);
            
        }
    }

    return result;
}

console.log('msg:'+msg);
