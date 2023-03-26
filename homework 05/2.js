function fi(x){
    if(x==0) return 0;
    if(x==1) return 1;
    if(x==2) return 1;
    if(x>2) return fi(x-1)+fi(x-2);
}

console.log(fi(10));