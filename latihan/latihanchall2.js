function deretKaskus(n){
    let arr = [];

    for(let i=3; i<=n*3; i+=3){
        if(i%5==0 && i%6==0){
            arr.push("kaskus");
        }else if(i%6==0){
            arr.push("kus");
        }else if(i%5==0){
            arr.push("kas");
        }else{
            arr.push(i);
        }
    }
    return arr;
}

console.log(deretKaskus(10));