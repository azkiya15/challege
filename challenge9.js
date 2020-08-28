function spiral(param1) {
  //   let number = param1 * param1;
  let array = []; //utk menampung hasil spiral
  let hasil = []; //array full non-spiral

  let count = 0;
  let startCol = 0;
  let endCol = param1 - 1;
  let startRow = 0;
  let endRow = param1 - 1;

  //isi full array non-spiral
  for (let i = 0; i < param1; i++) {
    hasil[i] = [];
    for (let j = 0; j < param1; j++) {
      hasil[i][j] = count;
      count++;
    }
  }

  //hasil array dgn spiral
  while (startCol <= endCol && startRow <= endRow) { //ketika kolom 0 <= kolom 4 dan kolom 0 <= kolom 4 makaa:
    for (i = startCol; i <= endCol; i++) {  //utk i=col0; i<=4; i++
      array.push(hasil[startCol][i]);       //masukan ke array dr baris 0 kolom 0 sampai ke kolom 4
    }
    startRow++;                             //row+1 karena mau masukan mulai dr baris 1
    for(i = startRow; i<=endRow; i++){      //utk i=row1
        array.push(hasil[i][endRow]);
    }
    endCol--;
    for(i = endCol; i>=startCol; i--){
        array.push(hasil[endRow][i]);
    }
    endRow--;
    for(i=endRow; i>=startRow; i--){
        array.push(hasil[i][startCol]);
    }
    startCol++;

  }

  return array;
  
}

console.log(spiral(5));
