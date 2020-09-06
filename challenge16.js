class CarFactory{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'Mobil '+ this.carname
    }
}

class Model extends CarFactory{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    mdl(){
        return this.present()+ ' dengan brand '+ this.model
    }
}

class MerkBan extends Model{
    constructor(brand, mod, banmerk){
        super(brand, mod);
        this.ban = banmerk;
    }
    nab(){
        return this.mdl()+ ' dengan ban '+ this.ban
    }
}

class Kursinya extends MerkBan{
    constructor(brand, mod, banmerk, kursi){
        super(brand, mod, banmerk)
        this.chair = kursi;
    }
    krs(){
        return this.nab() + ' dengan kursi '+ this.chair
    }
}

class produksi{
    constructor(hasil){
        this.hasilproduksi = hasil;
    }
    hsl(){
        return `Hasil produksi sebanyak : ` + this.hasilproduksi;
    }
}

class kelasgaransi{
    constructor(guarantee){
        this.garansi = guarantee;
    }
    grs(){
        return `Dengan garansi : ${this.garansi} tahun`;
    }
}

let myCar = new Kursinya("Toyota", "Avanza", "Dunlop", 6);
console.log(myCar.krs());

let hslproduk = new produksi(Math.floor(Math.random() * 100));
console.log(hslproduk.hsl());

let garansi = new kelasgaransi(Math.floor(Math.random()*3));
console.log(garansi.grs());
