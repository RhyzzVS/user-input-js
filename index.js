const readline = require('readline')
const rL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rL.question("Masukkan Your Nama ", (inputNama) => {
    let nama = inputNama;
    rL.question("Berapa Your Age ", (inputUmur) => {
        let umur = inputUmur;

        console.log("Your Nama: " + nama);
        console.log("Age: " + umur)
        console.log("Selesaikan soal berikut\nBerapa kali berapa yang hasilnya 236?")
        rL.question("Angka Pertama: ", (inputHasil1) => {
            rL.question("Angka Kedua: ", (inputHasil2) => {
                if (inputHasil1 == 118 && inputHasil2 == 2) {
                    console.log("Jawaban Benar!!")
                } else {
                    console.log("Jawaban Salah!!")
                }
                rL.close();
            })
        })
    })
});
rL.question("Apakah kamu ingin memakai kalkulator? ", (input) => {
    if (input === "iya") {
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