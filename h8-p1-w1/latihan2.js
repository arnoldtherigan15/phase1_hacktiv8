
const input = "OOOOOOTTOPHOOTOO" // 7
// const input = "TOOOOPOHOTOTOTOO" // 14
let treasure = []
let pirate = []
let harbour = []
let jarak = 0

function main () {
    cariKordinat()
    display()
    while (treasure.length != 0){
        cariTreasureTerdekat()
        display()
    }
    cariHarbour()
    display()
    return jarak
}

function cariKordinat (){
    let angka = 0
    for(let i = 0 ; i<4 ; i++){
        for(let j = 0 ; j<4 ; j++){
            if (input[angka] == 'T'){
                treasure.push([i, j])
            }
            else if (input[angka] == 'P'){
                pirate.push(i, j)
            }
            else if (input[angka] == 'H'){
                harbour.push(i, j)
            }
            angka++
        }
    }
}

function cariTreasureTerdekat (){
    let terpendek = Infinity
    let index = 0
    for(let i = 0 ; i<treasure.length ; i++){
        if(Math.abs(treasure[i][0] - pirate[0]) + Math.abs(treasure[i][1] - pirate[1]) < terpendek){
            terpendek = Math.abs(treasure[i][0] - pirate[0]) + Math.abs(treasure[i][1] - pirate[1])
            index = i
        }
    }
    jarak += terpendek
    pirate = treasure[index]
    treasure.splice(index, 1)
}

function cariHarbour (){
    let terpendek = Math.abs(harbour[0] - pirate[0]) + Math.abs(harbour[1] - pirate[1])
    jarak += terpendek
    pirate = harbour
}

function display (){
    clearScreen()
    let arr = []
    for(let i = 0 ; i<4 ; i++){
        arr.push([])
        for(let j = 0 ; j<4 ; j++){
            arr[arr.length-1].push("O")
        }
    }
    for(let i = 0 ; i<treasure.length ; i++){
        arr[treasure[i][0]][treasure[i][1]] = "T"
    }
    arr[harbour[0]][harbour[1]] = "H"
    arr[pirate[0]][pirate[1]] = "P"
    console.log(arr);
    sleep(1000)
}

function sleep (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
        break;
        }
    }
}

function clearScreen () {
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
}
    
console.log(main());

// OOOO
// OOTT
// OPHO
// OTOO

// TOOO
// OPOH
// OTOT
// OTOO