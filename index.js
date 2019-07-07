const readline = require('readline-sync')

module.exports = (quest) => {
    let ans = readline.question(quest)
    return ans
}