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
let endWithC = (<string>message2).endsWith('c');
let alternativeWay = (message2 as string).endsWith('c');
(message2 as string).endsWith('c');


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

class Point {
    a: number;
    b: number;
    r: number;
    draw(){
        console.log('You draw a cicle, the midle point of the circle is at ' + this.a + ',' + this.b + ' with a radius of ' + this.r)
    }
}

point2 = new Point();

point2.a = 5;
point2.b = 6;
point2.r = 8;
point2.draw()
