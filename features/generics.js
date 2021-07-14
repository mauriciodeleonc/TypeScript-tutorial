var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        var _this = this;
        this.collection = collection;
        this.get = function (index) {
            return _this.collection[index];
        };
    }
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        var _this = this;
        this.collection = collection;
        this.get = function (index) {
            return _this.collection[index];
        };
    }
    return ArrayOfStrings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        var _this = this;
        this.collection = collection;
        this.get = function (index) {
            return _this.collection[index];
        };
    }
    return ArrayOfAnything;
}());
new ArrayOfAnything(['a', 'b']);
//  Example of generics with functions
var printAnything = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
printAnything(['a', 'b']);
// Generic constraints
var Car = /** @class */ (function () {
    function Car() {
        this.print = function () {
            console.log('I am a car');
        };
    }
    return Car;
}());
var printHorCM = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
};
printHorCM([new Car(), new Car()]);
