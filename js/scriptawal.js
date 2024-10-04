// Ambil elemen dropdown dan inisialisasi data
const pembimbingAwalSelect = document.getElementById('pembimbingAwal');
const uniquePembimbingAwal = [...new Set(data.map(item => item["PEMBIMBING AWAL"]))];

// Tambahkan pilihan pembimbing awal ke dropdown
uniquePembimbingAwal.forEach(pembimbing => {
    const option = document.createElement('option');
    option.value = pembimbing;
    option.textContent = pembimbing;
    pembimbingAwalSelect.appendChild(option);
});

// Fungsi untuk memfilter dan menyortir data
function filterAndSortData() {
    const selectedPembimbing = document.getElementById('pembimbingAwal').value;
    const filteredData = data.filter(item => 
        selectedPembimbing === 'semua' || item["PEMBIMBING AWAL"] === selectedPembimbing
    );

    // Sortir data berdasarkan kolom STATUS
    const sortedData = filteredData.sort((a, b) => {
        const statusA = a.STATUS.trim().toLowerCase(); // Mengubah menjadi huruf kecil
        const statusB = b.STATUS.trim().toLowerCase(); // Mengubah menjadi huruf kecil

        if (statusA < statusB) return -1;
        if (statusA > statusB) return 1;
        return 0;
    });

    displayData(sortedData);
}

// Fungsi untuk menampilkan data di tabel
function displayData(dataToDisplay) {
    const content = dataToDisplay.map((item, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${item.NAMA.trim()}</td>
                <td>${item["PEMBIMBING BARU"].trim()}</td>
                <td>${item.STATUS.trim()}</td>
            </tr>
        `;
    }).join('');

    const tableHTML = `
        <table class="min-w-full">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Pembimbing Baru</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${content}
            </tbody>
        </table>
    `;

    document.getElementById('distribusiContent').innerHTML = tableHTML;
}

// Tambahkan event listener untuk dropdown
pembimbingAwalSelect.addEventListener('change', filterAndSortData);

// Panggil fungsi untuk menampilkan data pertama kali
filterAndSortData();
