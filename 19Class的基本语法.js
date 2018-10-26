// es5 对象写法
function Point(x,y) {
    this.x = x
    this.y = y
}

Point.prototype.fun1 = function () {
    console.log(`x:${this.x},y:${this.y}`);
}

let point1 = new Point(1,2)
point1.fun1(0)


// es6 class写法
class PointES6{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    fun1(){
        console.log(`ES6:x:${this.x},y:${this.y}`);
    }
}

let point2 = new PointES6(3,4)
point2.fun1(0)