const fs = require('fs');
const readline = require('readline');
const siswa = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getData() {
    if (fs.existsSync("datasiswa.json")) {
        const data = JSON.parse(fs.readFileSync("datasiswa.json", "utf8"));
        return data.dataSiswa || [];
    }
    return [];
}

function saveData(dataSiswa) {
    fs.writeFileSync("datasiswa.json", JSON.stringify({dataSiswa}, null, 2));
}
function inputSiswa() {
    let dataSiswa = getData();

    console.log(`Pendaftar Saat Ini: ${dataSiswa.length}\n`)
    siswa.question("Silakan PIlih Opsi\n1. Pendaftaran\n2. Cek Data\n3. Hapus Data\n4. Batal & Keluar\n\nPilihan Opsi: ", (inputOpsi) => {
        if (inputOpsi === "1") {
            siswa.question("Silakan Masukkan Nama Anda: ", (inputNama) => {
                siswa.question("Silakan Masukkan Umur Anda: ", (inputUmur) => {
                    siswa.question("Silakan Masukkan Kelas & Jurusan: ", (inputKelas) => {
                        siswa.question("Silakan Masukkan Nomor Telpon: ", (inputTelpon) => {
                            const newData = {
                                nama: inputNama,
                                umur: inputUmur,
                                kelas: inputKelas,
                                telpon: inputTelpon
                            };

                            dataSiswa.push(newData);
                            saveData(dataSiswa);
                            console.log(`\n\nData berhasil ditambahkan!\n\n`);
                            inputSiswa();
                        });
                    });
                });
            });
        } else if (inputOpsi === "2") {
            siswa.question(`Anda ingin mengecek data? `, (cekData) => {
                const jawabanCekData = cekData.trim().toLowerCase()
                const opsiJawaban = ["iya", "ya", "y", "yes"]
                if (opsiJawaban.includes(jawabanCekData)) {
                    if (dataSiswa.length <= 0) {
                        console.log("\n\nTidak ada data yang tersedia!!\n\n")
                        siswa.question(`Kembali? `, (back) => {
                            const jawabanBack = back.trim().toLowerCase();
                            if (opsiJawaban.includes(jawabanBack)) {
                                inputSiswa();
                            }
                        })
                    } else {console.log(`=== DAFTAR NAMA SISWA ===\n`)
                    dataSiswa.forEach((s, i) => {
                        console.log(`${i + 1}. ${s.nama}`)
                    });
                    
                    console.log(`\n0. Batal`)
                    siswa.question("Pilihan opsi: ", (nomor) => {
                        const indexNomor = parseInt(nomor) - 1;

                        if (parseInt(nomor) <= 0) {
                            inputSiswa()
                        }
        
                        if (indexNomor >= 0 && indexNomor < dataSiswa.length) {
                            const s = dataSiswa[indexNomor];
                            console.log(`\nNama: ${s.nama}\nUmur: ${s.umur}\nKelas: ${s.kelas}\nNomor Tlp: ${s.telpon}\n`);
                            siswa.question(`Apakah kamu ingin keluar? `, (cekDataKeluar) => {
                                const jawabanKeluar = cekDataKeluar.trim().toLowerCase()
                                if (opsiJawaban.includes(jawabanKeluar)) {
                                    inputSiswa()
                                }
                            })
                        };
                    });
                }
                    
                } else {
                    inputSiswa()
                }
            })
        } else if (inputOpsi === "3") {
            if (dataSiswa.length <= 0) {
                console.log("\n\nTidak ada data siswa untuk dihapus!!\n\n")
                inputSiswa()
                return;
            }

            console.log(`=== DAFTAR NAMA SISWA ===\n`)
            dataSiswa.forEach((s, i) => {
                console.log(`${i + 1}. ${s.nama}`)
            });

            console.log(`\n0. Batal`)
            siswa.question("Pilih data yang ingin dihapus: ", (hapus) => {
                const indexHapus = parseInt(hapus) - 1;

                if (parseInt(hapus) <= 0) {
                    inputSiswa()
                }

                if(indexHapus >= 0 && indexHapus < dataSiswa.length) {
                    const hapusData = dataSiswa.splice(indexHapus, 1)
                    saveData(dataSiswa);
                    console.log("\n\nData berhasil dihapus!\n\n")
                    inputSiswa();
                };
            });
        } else if (inputOpsi === "4") {
            siswa.close()
        } else {
            console.log(`\n\nTidak valid!!\n\n`)
            inputSiswa();
        };
    });
};

inputSiswa();