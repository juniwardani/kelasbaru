function populateTable(data) {
    const tbody = document.querySelector("#santriTable tbody");
    tbody.innerHTML = "";

    data.forEach((row, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="border px-4 py-2">${index + 1}</td> <!-- Nomor otomatis dimulai dari 1 -->
            <td class="border px-4 py-2">${row.NOINFAQ}</td>
            <td class="border px-4 py-2">${row.NAMA}</td>
        `;
        tbody.appendChild(tr);
    });
}

function populateDropdowns() {
    const pembimbingSet = new Set(data.map(item => item["PEMBIMBING BARU"]));
    const pembimbingDropdown = document.getElementById("pembimbingFilter");

    pembimbingSet.forEach(pembimbing => {
        const option = document.createElement("option");
        option.value = pembimbing;
        option.textContent = pembimbing;
        pembimbingDropdown.appendChild(option);
    });

    updateStatusDropdown();
}

function updateStatusDropdown() {
    const pembimbingValue = document.getElementById("pembimbingFilter").value;
    const statusDropdown = document.getElementById("statusFilter");

    statusDropdown.innerHTML = '<option value="All">All</option>';

    let relevantStatuses;
    if (pembimbingValue === "All") {
        relevantStatuses = new Set(data.map(item => item.STATUS));
    } else {
        relevantStatuses = new Set(data.filter(item => item["PEMBIMBING BARU"] === pembimbingValue).map(item => item.STATUS));
    }

    relevantStatuses.forEach(status => {
        const option = document.createElement("option");
        option.value = status;
        option.textContent = status;
        statusDropdown.appendChild(option);
    });
}

function sortByStatus(data) {
    return data.sort((a, b) => {
        if (a.STATUS < b.STATUS) {
            return -1;
        }
        if (a.STATUS > b.STATUS) {
            return 1;
        }
        return 0;
    });
}

function filterTable() {
    const pembimbingValue = document.getElementById("pembimbingFilter").value;
    const statusValue = document.getElementById("statusFilter").value;

    let filteredData = data;

    if (pembimbingValue !== "All") {
        filteredData = filteredData.filter(row => row["PEMBIMBING BARU"] === pembimbingValue);
    }

    if (statusValue !== "All") {
        filteredData = filteredData.filter(row => row.STATUS === statusValue);
    }

    const sortedData = sortByStatus(filteredData);

    populateTable(sortedData);
}

window.onload = function() {
    populateTable(sortByStatus(data));
    populateDropdowns();
};
