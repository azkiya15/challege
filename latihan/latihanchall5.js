function stringManipulation(word){
    let pertama = word.charAt(0);

    if(pertama==='a'){
        return word;
    }else{
        kata = word.slice(1);
        return kata + pertama + "nyo";
    }

}

console.log(stringManipulation("ayam"));
console.log(stringManipulation("bebek"));
