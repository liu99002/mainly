function madd(a,b){
    let r= [];
    let t= 0;
    for( let i= 0; i< a.length; i++){
        r[t]= a[i];
        t++;
    }
    for( let i= 0; i< b.length; i++){
        r[t]= b[i];
        t++;
    }
    return r;
}
let x= [ 2, 1, 3, 4]
let y= [ 1, 2]
console.log(madd(x,y))