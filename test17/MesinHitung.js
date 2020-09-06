// let Pi = 22/7 * this.x;
class Arithmetic {
    constructor() {
      this.value = 1;
      this.value2 = 1;
      this.hasilKel = 1;
      this.sqr;
      this.x = 0;
    // console.log("mesin hitung");
    }
    add(nilai) { 
      if(this.x!=0){
        this.value = 0
        this.value2 = this.value2 + nilai;
        return this;
      }else{
        this.value = this.value + nilai;
        return this;
      }
    }
    subtract(nilai) {
      if(this.x!=0){
        this.value = 0
        this.value2 = this.value2 - nilai;
        return this;
      }else{
        this.value = this.value - nilai;
        return this;
      }
    }
    multiply(nilai){
     let Pi = 22/7;
      if(this.x!=0){
        this.value = 0;
        if(nilai == Pi){
          this.value2 = this.value2 * Pi * this.x;
          return this;
        }else{
          this.value2 = this.value2 * nilai;
          return this;
        } 
      }else{
        this.value = this.value * nilai;
        return this;
      }
    }
    square(){
      if(this.x!=0){
        this.value = 0
        this.value2 = (Math.pow(this.x, 2)) / this.x;
        return this;
      }else{
        this.value = this.value / nilai;
        return this;
      }
    }
    
    divide(nilai){
      if(this.x!=0){
        this.value = 0
        this.value2 = this.value2 / nilai;
        return this;
      }else{
        this.value = this.value / nilai;
        return this;
      }
    }

    exponent(nilai){ //nilai=2 x=3
      if(this.x!=0){
        this.value = 0
        this.value2 = Math.pow(this.x, nilai)
        return this;
      }else{
        this.value = this.value / nilai;
        return this;
      }
    }
    squareRoot(){
      if(this.x!=0){
        this.value = 0
        this.value2 = Math.sqrt(this.value2)
        return this;
      }else{
        this.value = this.value / nilai;
        return this;
      }
    }
    x(value){
      this.x = this.x + value;
        return this;
    }
    result(){
      if(this.x!=0){
        
        console.log(this.value2);
      }else{
        console.log(this.value);
      }
    }
    average(...args) {
      this.value = args.length
        ? (this.sum(...args).value) / args.length
        : undefined;
      return this;
    }

  }

  export default Arithmetic;