var list = ['a', 'dog', 'chase', 'a', 'cat']
function count(c) {
    var a = {}
    for (let i of c) {
        var e = a[i]
        if (e == null) {
            a[i] = 1
        }
        else a[i] += 1
    }
    return a
}
var cmap = count(list)
console.log(cmap)