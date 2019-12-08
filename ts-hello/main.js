"use strict";
exports.__esModule = true;
var PointModule_1 = require("./PointModule");
var a;
var b;
var c;
var e = [1, 2, 3];
var f = [1, true, 'a', false]; // not good pratice
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
//! TYPE ASSERTION
var message2;
message2 = 'abc';
//let endWithC = (<string>message2).endsWith('c');
//let alternativeWay = (message2 as string).endsWith('c');
//(message2 as string).endsWith('c');
//! ARROW FUCNTION / LAMBDA EXPRESSION
//JS
var log = function (message) {
    console.log(message);
};
//TS function has multiple line
var doLog = function (message) {
    console.log(message);
    console.log(message);
    console.log(message);
};
//TS function has only one line
var doLog2 = function (message) { return console.log(message); };
var doLog3 = function (message) { return console.log(message); };
var doLog4 = function () { return console.log; };
//!INTERFACE / CUSTOM TYPES
var drawPoint = function (x, y) {
    //... something
};
var drawCicle = function (middle, radius) {
    console.log('Circle has been drawn!');
    console.log('Middle point i at ' + middle.a + ',' + middle.b + '. Radius: ' + radius.r);
};
drawCicle({ a: 1, b: 2 }, { r: 5 });
//! CLASSES
var PointClass = /** @class */ (function () {
    function PointClass() {
    }
    PointClass.prototype.draw = function () {
        console.log('You draw a cicle, the midle point of the circle is at ' + this.a + ',' + this.b + ' with a radius of ' + this.r);
    };
    return PointClass;
}());
var point2 = new PointClass();
point2.a = 5;
point2.b = 6;
point2.r = 8;
point2.draw();
//! CONSTRUCTOR
var PointConstructor = /** @class */ (function () {
    function PointConstructor(a, b, r) {
        this.a = a;
        this.b = b;
        this.r = r;
    }
    return PointConstructor;
}());
var pointClass = new PointConstructor(1, 2, 3);
var PointConstructorOptional = /** @class */ (function () {
    function PointConstructorOptional(x, y) {
        this.x = x;
        this.y = y;
    }
    return PointConstructorOptional;
}());
var pointConstructorOptional = new PointConstructorOptional(); // => No need for the optional parameters
var PointConstructorPrefix = /** @class */ (function () {
    function PointConstructorPrefix(x, y) {
        this.x = x;
        this.y = y;
    }
    return PointConstructorPrefix;
}());
//! PROPERTIES
var PointProperties = /** @class */ (function () {
    function PointProperties(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(PointProperties.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw Error('Value can not be less then 0.');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return PointProperties;
}());
var pointProperties = new PointProperties(123, 1421);
var pointPropertiesX = pointProperties.x;
console.log(pointPropertiesX);
pointProperties.x = 2;
pointPropertiesX = pointProperties.x; // => need to be set the update value
console.log(pointPropertiesX);
//let pointModuleVariable = new PointModule();
var pm = new PointModule_1.PointModule(1, 2);
