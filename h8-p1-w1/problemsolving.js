
// function memberSchedule(member) {
//     var keys = Object.keys(member);
//     var counter = 0;
//     for (var i = 7; i <= 31; i++) {
//         if (counter === 0) {
//             console.log(`Tanggal ${i}: ${keys}`);
//         } else if (i % 5 === 0) {
//             console.log(`Tanggal ${i}: Tempat Fitness Tutup`);
//         } else if (counter % 2 === 0 && counter % 4 != 0 && counter % 5 != 0) {
//             console.log(`Tanggal ${i}: Tono`)
//         } else if (counter % 4 === 0 && counter != 20) {
//             console.log(`Tanggal ${i}: Tono, Anton`)
//         } else if (counter % 5 === 0 && counter != 20 && counter != 10) {
//             console.log(`Tanggal ${i}: Budi`)
//         } else if (counter === 20) {
//             console.log(`Tanggal ${i}: Tono, Anton, Budi`)
//         } else if (counter === 10) {
//             console.log(`Tanggal ${i}: Tono, Budi`)
//         } else {
//             console.log(`Tanggal ${i}:`)
//         }
//         counter++;
//     }
// }

// var member = {
//     Tono: 2,
//     Anton: 4,
//     Budi: 5
// }
// memberSchedule(member);
// 
function memberSchedule(members) {
    
    var counter = 0;
    for (var i = 7; i <= 31; i++) {
        if (i % 5 === 0) {
            console.log(`Tanggal ${i}: Tempat Fitness Tutup`);
            counter++;
        }
    else {
        var temp = [];
        for (var person in members) {
            if (counter % members[person] === 0)  {
                temp.push(person);
            } 
        }
        console.log(`Tanggal ${i}: ${temp.join(', ')}`);
        counter++;
    }
    }
}

var members = {
    Tono: 2,
    Anton: 4,
    Budi: 5
}
memberSchedule(members);

// PSEUDOCODE
/*
DECLARATE a FUNCTION Called 'memberSchedule'
WITH A Process
    STORE 'counter' with 0
    STORE i with 7
    FOR i LESS THAN 31
        IF (i MODULUS WITH 5 EQUALS TO 0)
            DO DISPLAY 'Tanggal' PLUS i PLUS ': Tempat Fitness Tutup'
            CALCULATE counter WITH 1
        END IF
        STORE 'temp' WITH empty array
        FOR person in member
            IF 'counter' MODULUS member[person] EQUALS TO 0
            DO PUSH temp with person
            END IF
        END LOOP
        DISPLAY 'Tanggal' PLUS 'i' PLUS temp.join with comma
        CALCULATE counter with 1
    END LOOP
END FUNCTION
    */