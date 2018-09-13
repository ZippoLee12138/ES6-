var languages = [{
        name: "JavaScript",
        fileExtension: ".js"
    },
    {
        name: "TypeScript",
        fileExtension: ".ts"
    },
    {
        name: "CoffeeScript",
        fileExtension: ".coffee"
    }
];

console.table(languages);

console.time('打印')
console.dir(languages,{colors:true})
console.timeEnd('打印')

 function traceTest(params) {
    console.log('ddd'+params)
    console.trace()
    console.clear()
}

traceTest()

