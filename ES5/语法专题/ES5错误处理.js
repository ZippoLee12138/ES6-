

function test() {
     try {
         console.log(0)
         throw 'bug'
         console.log(1)
     } catch (error) {
         console.log(2)
         throw 'catch'
         console.log(3)
     } finally {
         console.log(4)
         return 'finally'
         console.log(5)
     }
}

let a = test()
console.log(a);
