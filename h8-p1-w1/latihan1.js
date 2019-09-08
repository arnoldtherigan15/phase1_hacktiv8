// OOOOOOTTOPHOOTOO
function stringToBoard(str) {
    let indeks = 0;
    let result = [];
    for (let i = 0; i < 4; i++) {
        result.push([]);
        for (let j = 0; j < 4; j++) {
            result[i].push(str[indeks]);
            indeks++;
        }
    }
    return result;
}
console.log(stringToBoard('OOOOOOTTOPHOOTOO'));
console.log('\n');

console.log(stringToBoard('TOOOOPOHOTOTOTOO'));
