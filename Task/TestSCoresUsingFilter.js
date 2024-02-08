const testScore = (testScores) =>{
    return testScores.filter((num) => num > 70 || num === 70)
}

module.exports = {testScore}