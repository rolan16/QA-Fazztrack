// Tugas 6 Nomor 2

const getMonth = (callback) => {
    setTimeout(() =>{
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April', 
                    'Mei', 'Juni', 'Juli', 'Agustus', 
                    'September', 'Oktober', 'November', 'Desember']
        
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }    
    }, 4000)
}

// buat function showMonth dengan menggunakan method map untuk menampilkan semua bulan
const showMonth = (err,data)=>{
    if(!err){
     data.map(month=>console.log(month))
    }
    return err;
 
 }

 getMonth(showMonth)