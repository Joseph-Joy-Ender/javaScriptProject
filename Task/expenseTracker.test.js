const {expenses} = require('./ExpenseTracker')

test('calculating expenses', () =>{
     let object = {
     groceries: 150,
     diningOut: 100,
     transportation: 50,
     entertainment: 80
 }
     let result = expenses(object);
     let answer = 380;
    expect(result).toEqual(answer);

})