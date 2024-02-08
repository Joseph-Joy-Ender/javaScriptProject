const bookClub = (members, books) =>{
    let newArray = [];
    let count = 0;
    for (const member1 of members) {
        newArray.push(member1 + ":" + books[count++]);

    }
    return newArray;

}

module.exports = {bookClub}
