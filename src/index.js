module.exports = function reverse(n) {
    let number = Math.abs(n).toString()
    let res = ''
    for (let i = (number.length - 1); i >= 0; i--) {
        res += `${number[i]}`
    }
    return Number(res)


}
