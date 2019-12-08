import { PointModule } from "./PointModule";

let a: number;
let b: boolean;
let c: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false]; // not good pratice

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0, Blue = 1, Green = 2};
let backgroundColor = Color.Blue;

//! TYPE ASSERTION
let message2: string | number;
message2 = 'abc';
//let endWithC = (<string>message2).endsWith('c');
//let alternativeWay = (message2 as string).endsWith('c');
//(message2 as string).endsWith('c');


//! ARROW FUCNTION / LAMBDA EXPRESSION
//JS
let log = function(message: string | number){
    console.log(message);
} 

//TS function has multiple line
let doLog = (message: string | number) => {
    console.log(message)
    console.log(message)
    console.log(message)
}

//TS function has only one line
let doLog2 = (message: string | number) => console.log(message);
let doLog3 = message => console.log(message);
let doLog4 = () => console.log;

//!INTERFACE / CUSTOM TYPES
let drawPoint = (x, y) => {
    //... something
}

interface RadiusInterface {
    r: number;
}

interface PointInterface {
    a: number,
    b: number
}


let drawCicle = (middle: PointInterface, radius: RadiusInterface) => {
    console.log('Circle has been drawn!');
    console.log('Middle point i at ' + middle.a + ',' + middle.b + '. Radius: ' + radius.r)
}

drawCicle({a:1,b:2,},{r:5})


//! CLASSES

class PointClass {
    a: number;
    b: number;
    r: number;
    draw(){
        console.log('You draw a cicle, the midle point of the circle is at ' + this.a + ',' + this.b + ' with a radius of ' + this.r)
    }
}

let point2 = new PointClass();

point2.a = 5;
point2.b = 6;
point2.r = 8;
point2.draw()

//! CONSTRUCTOR

class PointConstructor {
    a: number;
    b: number;
    r: number;

    constructor(a: number, b:number, r:number){ //You can make the parameters optional with a ? => note that after the first ? all the others right from that must be ? as well
        this.a = a;
        this.b = b;
        this.r = r;
    }
}

let pointClass = new PointConstructor(1,2,3)

class PointConstructorOptional {
    x: number;
    y: number;
    
    constructor(x?: number, y?:number){
        this.x = x;
        this.y = y;
    }
}

let pointConstructorOptional = new PointConstructorOptional() // => No need for the optional parameters


class PointConstructorPrefix {
    constructor(private x?: number, private y?: number){ // here we would need to specify public modifier!!!
    }   
}

//! PROPERTIES
class PointProperties{
    constructor(private _x?: number, private _y?: number){
    }
    get x(){
        return this._x
    }

    set x(value){
        if (value < 0){
            throw Error('Value can not be less then 0.')
        }
        this._x = value;
    }
}

let pointProperties = new PointProperties(123,1421)
let pointPropertiesX = pointProperties.x;
console.log(pointPropertiesX)
pointProperties.x = 2;
pointPropertiesX = pointProperties.x; // => need to be set the update value
console.log(pointPropertiesX)

//let pointModuleVariable = new PointModule();

let pm = new PointModule(1,2);