function vadd(a,b){
    let r = [];
    for( let i= 0; i < a.length; i++){
        r[i]= a[i]+ b[i];
    }
    return r;
}
let x = [1,2]; let y = [1,1];

console.log(vadd(x,y));