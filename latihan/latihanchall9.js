function spiral(num){
    
    //array non spiral
    let arr=[];
    let counter = 0;
    for(let i=0;i<num;i++){
        arr[i]=[];
        for(let j=0;j<num;j++){
            arr[i][j] = counter;
            counter++
        }
    }

    let arrHasil = [];
    let startCol = 0;
    let endCol = num-1;
    let startRow = 0;
    let endRow = num-1;
    while(startCol<=endCol && startRow<=endRow){
        for(i=startCol; i<=endCol; i++){
            arrHasil.push(arr[startCol][i]);
        }startRow++;
        for(i=startRow; i<=endRow; i++){
            arrHasil.push(arr[i][endRow]);
        }endCol--;
        for(i=endCol; i>=startCol; i--){
            arrHasil.push(arr[endRow][i]);
        }endRow--;
        for(i=endRow; i>=startRow; i--){
            arrHasil.push(arr[i][startCol]);
        }startCol++;
    }
    return arrHasil;

}
console.log(spiral(5));