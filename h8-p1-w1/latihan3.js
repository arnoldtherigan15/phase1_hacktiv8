const inputan = 'OOOOOOTTOPHOOTOO';
let treasure = [];
let harbour = [];
let pirate = [];
let jarak = 0;
function main () {
    cariKoordinat();
    while (treasure.length != 0) {
        cariTreasureTerdekat();
    }
    cariHarbour();
    return `Jarak total adalah ${7} kotak`;
}
function cariKoordinat () {
    let indeks = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (inputan[indeks] === 'T') {
                treasure.push([i,j]);
            } else if (inputan[indeks] === 'H') {
                harbour.push(i,j);
            } else if (inputan[indeks] === 'P') {
                pirate.push(i,j);
            }
            indeks++;
        }
    }
}
function cariTreasureTerdekat () {
    let terpendek = Infinity;
    let indeks = 0;
    for (let i = 0; i < treasure.length; i++) {
        if (Math.abs(treasure[i][0] - pirate[0])+Math.abs(treasure[i][1]-pirate[1]) < terpendek) {
            terpendek = Math.abs(treasure[i][0] - pirate[0])+Math.abs(treasure[i][1]-pirate[1]);
            indeks = i;
        }
    }
    jarak += terpendek;
    pirate = treasure[indeks];
    treasure.splice(indeks,1);
}
function cariHarbour () {
    let terpendek = Math.abs(harbour[0] - pirate[0])+Math.abs(harbour[1]-pirate[1]);
    jarak += terpendek;
    pirate = harbour;    
}
// console.log(cariKoordinat());
console.log(main());







