// Contoh pertama
console.log('Program Cek Nama Siswa')
const cekNamaSiswa = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const namaSiswa = ['Andi', 'Dika', 'Fajar', 'Dimas', 'Febri', 'Indra']
            let cek = namaSiswa.find((item) => {
                return item === name
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error('Siswa tidak ditemukan'))
            }
        }, 3000)
    })
}

console.log(cekNamaSiswa('Dika')
.then((name)=>{
  console.log(`${name} sudah terdaftar`)
})
.catch((rejectreason)=>{
  console.log(rejectreason)
}))

// Contoh kedua
console.log('Program Cek Stok Minuman')
const cekStokMinuman = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const namaProduk = ['Cola', 'Fanta', 'Sprite', 'Tebs', 'Sosro']
            let cek = namaProduk.find((item) => {
                return item === name
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error('Produk tidak ada!'))
            }
        }, 1000)
    })
}

console.log(cekStokMinuman('Cola')
.then((name)=>{
  console.log(`Saat ini ${name} masih tersedia`)
})
.catch((rejectreason)=>{
  console.log(rejectreason)
}))