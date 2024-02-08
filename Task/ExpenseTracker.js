

const expenses = (object) =>{
    let result = 0;

    for (const key in object) {
        result += object[key];

    }
    return result;


}
// let object = {
//     groceries: 150,
//     diningOut: 100,
//     transportation: 50,
//     entertainment: 80}
// console.log(expenses(object));

module.exports = {expenses}