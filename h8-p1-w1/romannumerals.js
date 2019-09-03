function toRoman (num) {
    var numbersRoman = {
        M: 1000,
        D: 500,
        CD: 400,
        C: 100,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        VIII: 8,
        VII: 7,
        VI: 6,
        V: 5,
        IV: 4,
        III: 3,
        II: 2,
        I: 1
    }
    var convertResult = '';
    while(num > 0) {
        for (var number in numbersRoman) {
            if (num >= numbersRoman[number]) {
                convertResult += number;
                num -= numbersRoman[number];
                break;
            }
        }
    }
    return convertResult;
}


console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('_____ | ________ | ______');
console.log('4     | IV       |', toRoman(4));
console.log('9     | IX       |', toRoman(9));
console.log('23    | XXIII    |', toRoman(23));
console.log('1453  | MCDLII   |', toRoman(1453));
console.log('1646  | MDCXLVI  |', toRoman(1646));
console.log('33    | XXXIII    |', toRoman(33));

