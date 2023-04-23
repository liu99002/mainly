function vdot(a,b){
    let r=0 ;
    for( let i= 0; i< a.length; i++){
        r+= a[i]* b[i];
    }
    return r
}
let x= [1,3,1] 
let y= [1,1,2]
console.log(vdot(x,y))