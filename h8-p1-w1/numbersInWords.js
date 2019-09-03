function in_words(num){
var numbersInWords = {
    seratus: 100,
    sebelas: 11,
    sepuluh: 10,
    sembilan: 9,
    delapan: 8,
    tujuh: 7,
    enam: 6,
    lima: 5,
    empat: 4,
    tiga: 3,
    dua: 2,
    satu: 1
}
var result = '';
    for (var number in numbersInWords) {
        if (num === numbersInWords[number]) {
            result += number + ' ';
            // break;
        } 
        // Angka Belasan dan Puluhan
        else if (num > 11 && num < 20) {
            if (Number(String(num)[1]) === numbersInWords[number]){
                result += number + ' belas';
                // break;
            }
        } else if (num > 19 && num <= 99) {
            if (Number(String(num)[0]) === numbersInWords[number] && Number(String(num)[1]) === 0){
                result += number + ' puluh';
                // break;
            } 
            else if (Number(String(num)[0]) === numbersInWords[number] && Number(String(num)[1]) != 0) {
                result += number + ' puluh ';
                for(var number in numbersInWords) {
                    if (Number(String(num)[1]) === numbersInWords[number]) {
                        result += number;
                        // break;
                    }
                }
            }
        } 
        // Angka Ratusan
        else if (num > 99 && num <= 199) {
            if (num === numbersInWords[number]){
                result += number;
                // break;
            } 
            else {
                result += number + ' ';
                num -= 100;
            }
        }
        // ----
        else if (num > 199 && num < 1000) {
            if (Number(String(num)[0]) === numbersInWords[number] && Number(String(num)[1]) === 0 && Number(String(num)[2]) === 0){
                result += number + ' ratus ';
                // num -= numbersInWords[number]*100;
                // console.log(num);
            } 
            else {
                if (Number(String(num)[0]) === numbersInWords[number]) {
                    result += number + ' ratus ';
                num -= numbersInWords[number]*100;
                    console.log(num);
                    
                } 
            }
        }
        // ----
    }
return result;
}
console.log(in_words(4));
// empat
console.log(in_words(13));
console.log(in_words(99));
console.log(in_words(100));
console.log(in_words(199));
console.log(in_words(539));
// dua puluh tujuh
// in_words(102);
// seratus dua
// in_words(38079);
// tiga puluh delapan ribu tujuh puluh sembilan
// in_words(82102713);
// delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas