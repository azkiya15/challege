class CarFactory{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        
    }
}

class Model extends CarFactory{
    constructor(brand, mod){
        super(brand);
        this model = mod;
    }
    show(){

    }
}

class MerkBan extends CarFactory{
    constructor(brand, mod, ban){
        super(brand, mod);
        this ban = banmerk;
    }
}