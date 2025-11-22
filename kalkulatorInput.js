const readline = require('readline')
const rL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rL.question("Apakah kamu ingin memakai kalkulator? Y/n ", (input) => {
    if (input === "y") {
        rL.question("Pilih lah!\n1. penjumlahan\n2. pengurangan\n3. perkalian\n4. pembagian\n", (jawaban) => {
            if (jawaban === "1") {
                rL.question("Angka Pertama: ", (angka1) => {
                    rL.question("Angka Kedua: ", (angka2) => {
                        let hasilPenjumlahan = parseInt(angka1) + parseInt(angka2);
                        console.log(`Hasil Penjumlahan adalah: ${hasilPenjumlahan}`)
                        rL.close()
                    })
                })
            } else if (jawaban === "2") {
                rL.question("Angka Pertama: ", (angka1) => {
                    rL.question("Angka Kedua: ", (angka2) => {
                        let hasilPengurangan = parseInt(angka1) - parseInt(angka2);
                        console.log(`Hasil Penjumlahan adalah: ${hasilPengurangan}`)
                        rL.close()
                    })
                })
            } else if (jawaban === "3") {
               rL.question("Angka Pertama: ", (angka1) => {
                    rL.question("Angka Kedua: ", (angka2) => {
                        let hasilPerkalian = parseInt(angka1) * parseInt(angka2);
                        console.log(`Hasil Penjumlahan adalah: ${hasilPerkalian}`)
                        rL.close()
                    })
                })
            } else if (jawaban === "4") {
                rL.question("Angka Pertama: ", (angka1) => {
                    rL.question("Angka Kedua: ", (angka2) => {
                        let hasilPembagian = parseInt(angka1) / parseInt(angka2);
                        console.log(`Hasil Penjumlahan adalah: ${hasilPembagian}`)
                        rL.close()
                    })
                })
            }
        })
    } else {
        console.log("GoodBye!!!")
        rL.close()
    }
})