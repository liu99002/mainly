var month = {
    January: '1',
    February: '2',
    March: '3',
    April: '4',
    May: '5',
    June: '6',
    July: '7',
    August: '8',
    September: '9',
    October: '10',
    November: '11',
    December: '12'
}

function mt (c){
    var e = []
    for (let i in c ){
        var eword = c[i]
        var cword = month[eword]
        e.push(cword)
    }
    return e
}

var e = mt(Deno.args)
console.log(e)