const fs = require('fs')
const readline = require('readline')
const atm = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getSaldo() {
    if (fs.existsSync("database.json")) {
        const data = JSON.parse(fs.readFileSync("database.json", "utf8"));
        return data.saldo;
    }
    return 0;
}

function saveSaldo(saldo) {
    fs.writeFileSync("database.json", JSON.stringify({saldo}))
}
function menuATM() {
    let saldo = getSaldo()
    
    atm.question("Apakah kamu ingin menggunakan ATM? ", (jawaban) => {
        const answer = jawaban.trim().toLowerCase();
        const opsiYa = ["iya", "ya", "yes", "y"]
        if (opsiYa.includes(answer)) {
            console.log(`Saldo saat ini: ${saldo}\n`)
            atm.question("Silakan Pilih Opsi Bank\n1. Transfer\n2. Setor Uang\n3. Tarik Uang\n4. Cek Saldo\n5. Keluar\nPilihan Opsi: ", (opsiAtm) => {
                if (opsiAtm === "1") {
                    console.log("Dalam Pengembangan!!\n")
                    menuATM();
                } else if (opsiAtm === "2") {
                    atm.question("Masukkan jumlah uang yang ingin di setor: ", (setor) => {
                        const saldoTambah = parseInt(setor);
                        saldo += saldoTambah;
                        saveSaldo(saldo);
                        console.log("Setor Berhasil!!\n")
                        menuATM();
                    })
                } else if (opsiAtm === "3") {
                    atm.question("Masukkan jumlah uang yang ingin di tarik: ", (tarik) => {
                        const saldoKurang = parseInt(tarik);
                        if (saldoKurang <= saldo) {
                            saldo -= saldoKurang;
                            saveSaldo(saldo)
                            console.log("Penarikan Berhasil!!\n")
                        } else {
                            console.log("Saldo tidak mencukupi!!")
                        }
                        menuATM();
                    })
                } else if (opsiAtm === "4") {
                    console.log(`Saldo saat ini: ${saldo}`)
                } else if (opsiAtm === "5") {
                    console.log("Sampai Jumpa!!!")
                    atm.close()
                }
            })
        } else {
            console.log("Baik terimakasih, Sampai Jumpa!!!")
            atm.close();
        }
    })
}

menuATM();