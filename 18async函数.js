// async await




async function asy1() {
    console.log('1111');
    
    // try {
        await new Promise(function (resolve, reject) {
            setTimeout(() => {
                reject('xxx')
            }, 1000);
        }).catch(err => {
            console.log('err in asy1::::');
            console.error(err);
            
        })
    // } catch (error) {
    //     console.log(`err:${error}`);
        
    // }

    console.log('2222');

    await 'bbb'
    console.log('3333');

    return new Promise(function (resovle,reject) {
        setTimeout(() => {
            reject('resolve from return')
        }, 1000);
    })
}

asy1().then(data => {
    console.log('data from then:');
    
    console.log(data);
    
}).catch(err => {
    console.log('err from catch:');
    
    console.error(err)
    
})


// 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。

async function asy2(){
    let a = await new Promise(function (resolve,reject) {
        setTimeout(() => {
            console.log('');
                
        }, 1000
        );
    })
}