console.log("Program mencari nilai maksimum dan minimum pada sebuah Array")
let num = [1,2,3,4,5]
let nomor = [(2+3+4+5),(1+3+4+5),(1+2+4+5),(1+2+3+5),(1+2+3+4)]

const cekAngka = (angka) => {
    for(let num=1; num<= angka; num++){
        if(angka % num ==0){
            console.log("Jumlahkan semua bilangan kecuali "+ angka + " = " + nomor[angka-1])
            break
        }
    }
    if(nomor[angka-1] > nomor[1]){
        console.log(nomor[angka-1] + " adalah hasil Maksimum penjumlahan")
    }
    if(nomor[angka-1] < nomor[3]){
        console.log(nomor[angka-1] + " adalah hasil Minimum penjumlahan")
    }
}

// Saya membuat contoh kasus, dengan memasukkan semua Angka
cekAngka(1);
cekAngka(2);
cekAngka(3);
cekAngka(4);
cekAngka(5);