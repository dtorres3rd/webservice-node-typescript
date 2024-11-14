console.log('this is a test...');
var testFunction = function (param1, param2) {
    if (typeof param1 === 'number') {
        var testResult = param1 + param2;
        return testResult;
    }
};
var result = testFunction(10, 11);
console.log(result);
