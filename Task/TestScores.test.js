const {testScore} = require('./TestSCoresUsingFilter')

test('test scores using filter', () =>{
    let array = [20, 80, 40, 30, 70, 50, 77, 45, 90, 20];
    let newArray = [80, 70, 77, 90];
    let result = testScore(array);
    expect(result).toEqual(newArray);
})