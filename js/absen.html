<?php
// Fungsi untuk membaca dan mem-parsing data dari script2.js
$scriptFile = 'script2.js'; // Path ke file script2.js
$scriptContent = file_get_contents($scriptFile);

// Ambil data JSON dari dalam file script2.js
preg_match('/const data = (\[.*\]);/s', $scriptContent, $matches);
$jsonData = $matches[1];

// Decode JSON menjadi array PHP
$dataArray = json_decode($jsonData, true);

// Ambil nilai filter dari request (jika ada)
$pembimbingBaru = isset($_GET['pembimbing_baru']) ? $_GET['pembimbing_baru'] : '';
$status = isset($_GET['status']) ? $_GET['status'] : '';
$bulan = isset($_GET['bulan']) ? $_GET['bulan'] : '10'; // Default ke bulan Oktober

// Menentukan jumlah hari berdasarkan bulan yang dipilih
$year = 2024;
$daysInMonth = cal_days_in_month(CAL_GREGORIAN, $bulan, $year);

// Filter data berdasarkan pembimbing baru dan status
$filteredData = array_filter($dataArray, function($item) use ($pembimbingBaru, $status) {
    $isPembimbingBaruMatch = $pembimbingBaru === '' || $item['PEMBIMBING BARU'] === $pembimbingBaru;
    $isStatusMatch = $status === '' || $item['STATUS'] === $status;
    return $isPembimbingBaruMatch && $isStatusMatch;
});

// Mendapatkan daftar unik pembimbing baru
$pembimbingBaruOptions = array_unique(array_column($dataArray, 'PEMBIMBING BARU'));

// Mendapatkan daftar status terkait dengan pembimbing baru yang dipilih
$statusOptions = [];
if ($pembimbingBaru !== '') {
    $statusOptions = array_unique(
        array_column(
            array_filter($dataArray, function($item) use ($pembimbingBaru) {
                return $item['PEMBIMBING BARU'] === $pembimbingBaru;
            }), 'STATUS'
        )
    );
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filter Tabel Berdasarkan Kriteria</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        .sunday {
            background-color: red;
            color: white;
        }
    </style>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js"></script>
    <script>
        // Fungsi untuk memfilter ulang halaman saat pembimbing baru berubah
        function updateFilters() {
            var pembimbingBaru = document.getElementById('pembimbing_baru').value;
            var status = document.getElementById('status').value;
            var bulan = document.getElementById('bulan').value;
            var url = "?pembimbing_baru=" + encodeURIComponent(pembimbingBaru) + "&status=" + encodeURIComponent(status) + "&bulan=" + encodeURIComponent(bulan);
            window.location.href = url;
        }

        // Fungsi untuk memuat ulang opsi status terkait dengan pembimbing baru yang dipilih
        function updateStatusOptions() {
            var pembimbingBaru = document.getElementById('pembimbing_baru').value;
            var statusDropdown = document.getElementById('status');
            var allStatusOptions = <?php echo json_encode($dataArray); ?>;

            // Kosongkan dropdown status
            statusDropdown.innerHTML = '<option value="">--Semua Status--</option>';

            // Tambahkan opsi status yang sesuai dengan pembimbing baru yang dipilih
            allStatusOptions.forEach(function(item) {
                if (item['PEMBIMBING BARU'] === pembimbingBaru || pembimbingBaru === '') {
                    var option = document.createElement('option');
                    option.value = item['STATUS'];
                    option.text = item['STATUS'];
                    statusDropdown.appendChild(option);
                }
            });
        }

        // Fungsi untuk generate PDF dari tabel HTML
        // Fungsi untuk generate PDF dari tabel HTML
// Fungsi untuk generate PDF dari tabel HTML
// Fungsi untuk generate PDF dari tabel HTML
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generatePdf').addEventListener('click', function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('l', 'pt', 'a4'); // Landscape, Point, A4 size
        const elementHTML = document.querySelector('table');

        // Mendapatkan nilai bulan, pembimbing baru, dan status dari URL
        const urlParams = new URLSearchParams(window.location.search);
        const bulan = urlParams.get('bulan') || '10'; // Default ke bulan Oktober
        const pembimbingBaru = urlParams.get('pembimbing_baru') || 'Semua Pembimbing Baru';
        const status = urlParams.get('status') || 'Semua Status';
        
        // Mapping nama bulan
        const namaBulan = {
            '10': 'Oktober 2024',
            '11': 'November 2024',
            '12': 'Desember 2024'
        };

        // Judul PDF
        const judul = "ABSEN RUMAH TAHFIDZ SAIJAAN - " + namaBulan[bulan];
        const subJudul = `Pembimbing: ${pembimbingBaru} : Kelas: ${status}`;

        // Lebar halaman PDF
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        // Tambahkan judul ke PDF di posisi tengah
        doc.setFontSize(14);
        doc.text(judul, pageWidth / 2, 40, { align: 'center' }); // Judul rata tengah

        // Tambahkan sub judul ke PDF di posisi tengah
        doc.setFontSize(12);
        doc.text(subJudul, pageWidth / 2, 60, { align: 'center' }); // Sub judul rata tengah

        // Auto table
        doc.autoTable({
            html: elementHTML,
            startY: 80, // Posisi vertikal setelah judul
            theme: 'grid',
            styles: {
                cellPadding: 3,
                fontSize: 8,
                overflow: 'linebreak',
            },
            headStyles: {
                fillColor: [22, 160, 133],
                textColor: [255, 255, 255],
            },
            didDrawCell: function (data) {
                if (data.cell.raw && data.cell.raw.classList && data.cell.raw.classList.contains('sunday')) {
                    // Jika kolom adalah hari Minggu, warnai merah
                    doc.setFillColor(255, 0, 0);
                    doc.rect(data.cell.x, data.cell.y, data.cell.width, data.cell.height, 'F');
                    doc.setTextColor(255, 255, 255);
                    doc.text(data.cell.text, data.cell.x + data.cell.width / 2, data.cell.y + data.cell.height / 2, { align: 'center', baseline: 'middle' });
                    doc.setTextColor(0, 0, 0); // Kembalikan warna teks normal
                    return false;  // Hindari rendering default teks
                }
            }
        });

        // Tambahkan kolom tanda tangan di sudut kanan bawah (Pembimbing Baru)
        doc.setFontSize(12);
        const tandaTanganPembimbing = `${pembimbingBaru}`;
        doc.text('PEMBIMBING', pageWidth - 200, pageHeight - 80); // Keterangan Tanda Tangan
        doc.text(tandaTanganPembimbing, pageWidth - 200, pageHeight - 100); // Posisi kanan bawah
  
        
        // Tambahkan kolom tanda tangan di sudut kiri bawah (Ustadz Abdur Rahim, S.Pd.I)
        doc.setFontSize(12);
        doc.text('Ustadz Abdur Rahim, S.Pd.I', 40, pageHeight - 100); // Posisi kiri bawah
        doc.text('Pengasuh Rumah Tahfidz Saijaan', 40, pageHeight - 80); // Nama Ustadz
        
        // Tambahkan nama file dan tanggal download
        const now = new Date();
        const dateString = now.toISOString().slice(0, 10);
        doc.save('Tabel_Kehadiran_' + dateString + '.pdf');
    });
});

    </script>
</head>
<body>
<h2 style="text-align: center;">GENERATOR ABSEN RUMAH TAHFIDZ SAIJAAN</h2>

    <!-- Form untuk filter data -->
    <form method="GET">
        <label for="pembimbing_baru">Pembimbing Baru:</label>
        <select name="pembimbing_baru" id="pembimbing_baru" onchange="updateStatusOptions(); updateFilters();">
            <option value="">--Semua Pembimbing Baru--</option>
            <?php foreach ($pembimbingBaruOptions as $option): ?>
                <option value="<?php echo htmlspecialchars($option); ?>" 
                    <?php echo $option === $pembimbingBaru ? 'selected' : ''; ?>>
                    <?php echo htmlspecialchars($option); ?>
                </option>
            <?php endforeach; ?>
        </select>

        <label for="status">Status:</label>
        <select name="status" id="status" onchange="updateFilters();">
            <option value="">--Semua Status--</option>
            <?php foreach ($statusOptions as $option): ?>
                <option value="<?php echo htmlspecialchars($option); ?>" 
                    <?php echo $option === $status ? 'selected' : ''; ?>>
                    <?php echo htmlspecialchars($option); ?>
                </option>
            <?php endforeach; ?>
        </select>

        <label for="bulan">Bulan:</label>
        <select name="bulan" id="bulan" onchange="updateFilters();">
            <option value="10" <?php echo $bulan == '10' ? 'selected' : ''; ?>>Oktober 2024</option>
            <option value="11" <?php echo $bulan == '11' ? 'selected' : ''; ?>>November 2024</option>
            <option value="12" <?php echo $bulan == '12' ? 'selected' : ''; ?>>Desember 2024</option>
        </select>
    </form>

    <!-- Tabel untuk menampilkan data -->
    <table>
    <thead>
    <tr>
        <th>No.</th>
        <th>NAMA</th>
        <?php for ($i = 1; $i <= $daysInMonth; $i++): ?>
            <th class="hidden-web"><?php echo $i; ?></th> <!-- Kolom tanggal disembunyikan di web -->
        <?php endfor; ?>
        <th>S</th>
        <th>I</th>
        <th>A</th>
    </tr>
</thead>
<tbody>
    <?php if (count($filteredData) > 0): ?>
        <?php $no = 1; ?>
        <?php foreach ($filteredData as $row): ?>
            <tr>
                <td><?php echo $no++; ?></td>
                <td><?php echo htmlspecialchars($row['NAMA']); ?></td>
                <?php for ($i = 1; $i <= $daysInMonth; $i++): ?>
                    <td class="hidden-web <?php echo date('N', strtotime("$year-$bulan-$i")) == 7 ? 'sunday' : ''; ?>">
                        <?php echo isset($row['KEHADIRAN'][$i]) ? htmlspecialchars($row['KEHADIRAN'][$i]) : ''; ?>
                    </td>
                <?php endfor; ?>
                <td><?php ?></td>
                <td><?php ?></td>
                <td><?php ?></td>
            </tr>
        <?php endforeach; ?>
    <?php else: ?>
        <tr>
            <td colspan="<?php echo $daysInMonth + 5; ?>">Tidak ada data yang sesuai dengan filter.</td>
        </tr>
    <?php endif; ?>
</tbody>

    </table>

    <!-- Tombol untuk mengunduh tabel sebagai PDF -->
    <button id="generatePdf" style="
    background: linear-gradient(45deg, #1e90ff, #00bfff);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px; /* Jarak atas *
    transition: all 0.3s ease;
">
    Generate PDF
</button>

<script>
    document.getElementById('generatePdf').addEventListener('mouseover', function() {
        this.style.background = 'linear-gradient(45deg, #00bfff, #1e90ff)';
        this.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.3)';
    });

    document.getElementById('generatePdf').addEventListener('mouseout', function() {
        this.style.background = 'linear-gradient(45deg, #1e90ff, #00bfff)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    });
</script>


</body>
</html>
