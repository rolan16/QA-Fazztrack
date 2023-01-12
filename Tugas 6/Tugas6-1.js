// jadikan komen salah satu ketika ingin dijalankan 
// then... catch

const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini libur'))
            }
        }, 3000)
    })
}

console.log(cekHariKerja('asd')
.then((day)=>{
  console.log(`hari ${day} adalah hari kerja`)
})
.catch((rejectreason)=>{
  console.log(rejectreason)
}))

// dalam penggunaan then catch, catch akan berjalan jika terjadi error didalam promise tanpa harus menjalankan blok then


// try... catch

const cekHariKerja = (day)=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         const dataDay = ['senin','selasa','rabu','kamis','jumat']
        let cek = dataDay.find((item)=>{
          return item === day
        })
        
        if(cek){
          resolve(cek)
        }
        else{
          reject("Hari ini libur")
        }
       },3000)
    })
  }

try{
    cekHariKerja('minggu')
    .then((day)=>console.log(day))
    .catch((err)=>console.log(err))
}
catch(err){
    console.log("caught by try/catch",err)
}

// dalam penggunaan try catch, seluruh perintah yg ada didalam blok try akan dijalankan, jika ada error maka akan menjalankan blok catch