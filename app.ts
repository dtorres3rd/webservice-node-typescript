console.log('this is a test...');

const testFunction = (param1: string | number, param2: number) => {
  if (typeof param1 === 'number') {
    const testResult = param1 + param2;
    return testResult;
  }
};
const result = testFunction(10, 11);
console.log(result);
