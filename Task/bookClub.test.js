const  {bookClub} = require('./bookClub')


test('calculating expenses', () =>{
    let member = ["Emily", "Jack", "Sophia", "Daniel"];
    let books = ["Morning comes softly", "Danger zone", "Bitter sweet love", "Thrilled"];
    let result = bookClub(member,books);
    let answer = ['Emily:Morning comes softly',
        'Jack:Danger zone',
        'Sophia:Bitter sweet love',
        'Daniel:Thrilled'
    ]
    expect(result).toEqual(answer);

})