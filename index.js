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
