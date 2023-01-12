console.log("Program Bilangan Prima")
const cekBilangan = (angka) => {
    // Pertama saya membuat arrow function cekBilangan
    let pembagi = 0;
    // Saya menggunakan perulangan "For" untuk mencari jumlah pembagi Bilangan yang akan dicek
    for(let i=1; i<= angka; i++){
        if(angka % i ==0){
            pembagi++
        }
    }

    // True = Bilangan Prima, False = Bukan Bilangan Prima
    if(pembagi == 2){
        console.log(angka + " Merupakan Bilangan prima = " + true)
    } else {
        console.log(angka + " Bukan Bilangan = " + false)
    }
}

// Saya membuat beberapa contoh kasus, dengan mengganti angka didalam kurung;

cekBilangan(9);     // Bukan Bilangan Prima
cekBilangan(2);     // Bilangan Prima