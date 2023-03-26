function mmul(a, b) {
    let r = [[], []]
    let temp = 0
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            temp += a[i][j] * b[j][i]
        }
        r[i][i] = temp
        temp = 0
    }
    let i = 0
    for (let j = 1; j >= 0; j--) {
        for (let k = 0; k < 2; k++) {
            temp += a[i][k] * b[k][j]
        }
        r[i][j] = temp
        temp = 0
        i++
    }

    //00*00+01*10//00    00*01+01*11//01
    //10*00+11*10//10    10*01+11*11//11       
    return r
}
let x = [[1, 2], [3, 5]]
let y = [[2, 3], [3, 1]]
console.log(mmul(x, y))