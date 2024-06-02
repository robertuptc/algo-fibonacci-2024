const fibonacci = (num) => {
    let fibArr = [0, 1]

    if (num == 0) {
        return fibArr[0];
    } else if (num == 1) {
        return fibArr[1];
    } else {
        for (let i = 0; i < num -1 ; i++) {
            fibArr.push(fibArr[i] + fibArr[i + 1])
        }
    }
    return fibArr[fibArr.length - 1]
}

module.exports = {fibonacci}
