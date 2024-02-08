const {findingClasses} = require('./FindingClasses')


test('list of classes', () =>{
    let array = ["11:00 AM", "3:00 PM", "9:00 AM", "1:00 PM", "5:00 PM"];
    let newArray = ["3:00 PM", "1:00 PM", "5:00 PM"];
    let result = findingClasses(array);
    expect(result).toEqual(newArray);
})