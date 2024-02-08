const {increaseScores} = require('./IncreaseScores')

test('increasing scores of student', () =>{
    let array = [85, 92, 78, 88, 95];
    let newArray = [90, 97, 83, 93, 100];
    let result = increaseScores(array);
    expect(result).toEqual(newArray);
})