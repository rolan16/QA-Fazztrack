//Built-in Function
// 1. concat() (Untuk menggabungkan 2 string atau lebih)

var str1 = new String( "Kalimat Pertama" );
var str2 = new String( " Kalimat Kedua" );
var str3 = str1.concat( str2 );      
console.log("Hasilnya adalah :" + str3);

// 2. charAt() (Untuk mengembalikan sebuah karakter pd indeks tertentu dalam sebuah string)

var str = new String( "This is string" );
console.log("Karakternya adalah : " + str.charAt(0));

// 3. indexOF() (Untuk mengembalikan sebuah index pada sebuah string)

var str1 = new String( "This is string one" );
var index = str1.indexOf( "string" );
console.log("index keberapa : " + index ); 
         
var index = str1.indexOf( "one" );
console.log("index keberapa : " + index );

// 4. length() (Untuk mengembalikan nilai panjang sebuah string)

var str = new String( "This is string" );
console.log("Panjang string : " + str.length);

// 5. replace() (Untuk mengganti sebuah string dengan string yg baru)

var re = /apples/gi;
var str = "Apples are round, and apples are juicy."; // oranges are round, and oranges are juicy.
var newstr = str.replace(re, "oranges");        
console.log(newstr); 

// 6. slice() (Untuk memotong sebuah string berdasarkan index yg telah ditentukan)

var str = "Apples are round, and apples are juicy."; //App akan dihapus
var sliced = str.slice(3, -2);         
console.log(sliced);

// 7. split() (Melakukan pemisahan objek string kedalam sebuah array dengan memisahkan string menjadi substrings)

var str = "Apples are round, and apples are juicy.";
var splitted = str.split(" ", 3); // ['Apples', 'are', 'round' ]
console.log(splitted);

// 8. substring() (Mengembalikan substring yg baru berdasarkan parameter yg diberikan)

var str = "Apples are round, and apples are juicy.";         
console.log("(1,2): "    + str.substring(0,10));

// 9. toLowerCase() (Mengembalikan nilai sebuah string kedalam huruf kecil)

var str = "Apples Are Round, And Apples Are Juicy."; // apples are round, and apples are juicy.
console.log(str.toLowerCase( ));

// 10. toUpperCase() (Mengembalikan nilai sebuah string kedalam huruf besar)

var str = "apples are aound, and apples are juicy."; // APPLES ARE ROUND, AND APPLES ARE JUICY.
console.log(str.toUpperCase( ));