function deretKaskus(val){
    let array = [];
    let i;
    for(i=3; i <= val*3; i+=3){
        //  console.log(i);
        if(i%5 == 0 && i%6 == 0){
           array.push("kaskus"); 
        }else if(i%5 == 0){
           array.push("kas");    
        }else if(i%6 == 0){
            array.push("kus");
        }      
        else {
           array.push(i);

        }  
    
        
        
        
        
        //  console.log(i);
    } 
    return array;


}

console.log(deretKaskus(10));