// 子类的constructor方法中必须调用super()方法
// 之后才能产生this

class Point{
    constructor(x,y){
        this.x = x
        this.y = y
    }
}

class ColorPoint extends Point{
    constructor(color,x,y){
        super(x,y)
        this.color = color
    }

    toString(){
        return 'color:'+this.color+super.toString()
    }
}

let colorPoint = new ColorPoint('red',1,2)
console.log(colorPoint);

let point = new Point(3,4)
console.log(point);


// Object.getPrototypeOf方法可以用来从子类上获取父类。
let myClass = Object.getPrototypeOf(ColorPoint)
console.log(myClass == Point);

console.log(`myClass:${myClass}`);
