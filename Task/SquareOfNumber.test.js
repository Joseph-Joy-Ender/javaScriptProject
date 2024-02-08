const {squareOfNumber} = require('./squareOfNumber')

test('increasing scores of student', () =>{
    let array = [2, 4, 6, 8, 10];
    let newArray = [4, 16, 36, 64, 100];
    let result = squareOfNumber(array);
    expect(result).toEqual(newArray);
})