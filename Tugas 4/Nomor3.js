const seleksiNilai = (nilaiAwal,nilaiAkhir,dataArray) => {
    var dataArray = [2, 25, 4, 14, 17, 30, 8]
    
    dataArray.forEach(function(e){
        if([e] > nilaiAwal && [e] < nilaiAkhir && dataArray.length > 5){
            console.log(e)
        }else if(nilaiAkhir < nilaiAwal){
            console.log('Nilai akhir harus lebih besar dari nilai awal')
        }else if(dataArray.length < 5){
            console.log('Jumlah angka dalam array harus lebih dari 5')
        }else{
            console.log('Nilai tidak ditemukan')
        }
    })
}

seleksiNilai(4,20)