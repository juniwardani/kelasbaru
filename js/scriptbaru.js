












// Fungsi untuk memuat konten ke dalam elemen HTML
function loadContent() {
    // Mengubah data menjadi HTML
    const content = data.map(item => {
        // Cek jika item adalah "ANDI RIZKI DAFA RAMADHAN" untuk menambahkan kelas khusus
        const rowClass = item.NAMA === "NAMA" ? "special-row" : "";
        
        return `
            <tr class="${rowClass}">
                <td>${item.NAMA.trim()}</td>
                <td>${item["PEMBIMBING AWAL"].trim()}</td>
                <td>${item["PEMBIMBING BARU"].trim()}</td>
                <td>${item.STATUS.trim()}</td>
            </tr>
        `;
    }).join('');

    // Membuat tabel untuk menampilkan data
    const tableHTML = `
        <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; text-align: left;">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Pembimbing Awal</th>
                    <th>Pembimbing Baru</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${content}
            </tbody>
        </table>
    `;

    // Menyisipkan tabel ke dalam elemen dengan ID distribusiContent
    document.getElementById('distribusiContent').innerHTML = tableHTML;
}




// Fungsi untuk memuat dan memfilter data berdasarkan pembimbing baru
function loadDropdown() {
    const pembimbingBaruSelect = document.getElementById('pembimbingBaru');
    
    // Mendapatkan pembimbing baru yang unik menggunakan Set
    const uniquePembimbingBaru = [...new Set(data.map(item => item["PEMBIMBING BARU"].trim()))];

    // Mengisi dropdown dengan pembimbing baru yang unik
    uniquePembimbingBaru.forEach(pembimbing => {
        const option = document.createElement('option');
        option.value = pembimbing;
        option.textContent = pembimbing;
        pembimbingBaruSelect.appendChild(option);
    });
}

// Fungsi untuk memfilter data berdasarkan pembimbing baru yang dipilih
function filterData() {
    // Mendapatkan nilai dari dropdown
    const selectedPembimbing = document.getElementById('pembimbingBaru').value;

    // Filter data berdasarkan pembimbing baru yang dipilih
    const filteredData = data.filter(item => item["PEMBIMBING BARU"].trim() === selectedPembimbing || selectedPembimbing === "semua");

    // Mengubah data yang difilter menjadi HTML dengan nomor otomatis
    const content = filteredData.map((item, index) => {
        return `
            <tr>
                <td>${index + 1}</td> <!-- Nomor otomatis -->
                <td>${item.NAMA.trim()}</td>
                <td>${item["PEMBIMBING AWAL"].trim()}</td>
                <td>${item.STATUS.trim()}</td>
            </tr>
        `;
    }).join('');

    // Menampilkan tabel dengan data yang difilter
    document.getElementById('distribusiContent').innerHTML = `
        <table class="min-w-full">
            <thead>
                <tr>
                    <th>No.</th> <!-- Kolom nomor -->
                    <th>Nama</th>
                    <th>Pembimbing Awal</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${content}
            </tbody>
        </table>
    `;
}
// Memuat dropdown saat halaman pertama kali dimuat
window.onload = function() {
    loadDropdown();
    filterData(); // Tampilkan semua data secara default
};

// Fungsi untuk memfilter dan mengurutkan data berdasarkan pembimbing baru yang dipilih
function filterData() {
    // Mendapatkan nilai dari dropdown
    const selectedPembimbing = document.getElementById('pembimbingBaru').value;

    // Filter data berdasarkan pembimbing baru yang dipilih
    const filteredData = data.filter(item => item["PEMBIMBING BARU"].trim() === selectedPembimbing || selectedPembimbing === "semua");

    // Mengurutkan data berdasarkan kolom "STATUS" (secara alfabetis)
    const sortedData = filteredData.sort((a, b) => {
        // Mengabaikan huruf kapital/kecil dengan .toLowerCase()
        return a.STATUS.trim().localeCompare(b.STATUS.trim());
    });

    // Mengubah data yang difilter dan diurutkan menjadi HTML dengan nomor otomatis
    const content = sortedData.map((item, index) => {
        return `
            <tr>
                <td>${index + 1}</td> <!-- Nomor otomatis -->
                <td>${item.NAMA.trim()}</td>
                <td>${item["PEMBIMBING AWAL"].trim()}</td>
                <td>${item.STATUS.trim()}</td>
            </tr>
        `;
    }).join('');

    // Menampilkan tabel dengan data yang difilter dan diurutkan
    document.getElementById('distribusiContent').innerHTML = `
        <table class="min-w-full">
            <thead>
                <tr>
                    <th>No.</th> <!-- Kolom nomor -->
                    <th>Nama</th>
                    <th>Pembimbing Awal</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${content}
            </tbody>
        </table>
    `;
}
