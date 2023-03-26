function isprime(x){
    for(var i=2;i<x;i++){
        if(x%i==0)return true;
        else return false;
    }  
}
console.log(isprime(4));