// Chart Initialization
let chart;
function createChart(type, data) {
    const ctx = document.getElementById('emotionChart').getContext('2d');
    if (chart) chart.destroy(); // Destroy old chart if it exists
    chart = new Chart(ctx, {
        type: type,
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
}

// Data Storage and Visualization
let records = JSON.parse(localStorage.getItem('records')) || []; // Use records array to store data

// Function to save records to localStorage
function saveRecords() {
    localStorage.setItem('records', JSON.stringify(records));
}

// Function to update the chart
function updateChart() {
    const labels = records.map(r => r.date);
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Pain Level',
                data: records.map(r => r.pain),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Emotion Level (1-10)',
                data: records.map(r => parseInt(r.emotion, 10)), // Assuming `emotion` is a number between 1-10
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };
    const chartType = document.getElementById('chart-type').value;
    createChart(chartType, data);
}

// Event Listener for "Add Record" Button
document.getElementById('add-record').addEventListener('click', () => {
    const date = document.getElementById('tracking-date').value;
    const emotion = document.getElementById('emotion-day').value;
    const pain = document.getElementById('pain-level').value;

    if (date && emotion && pain) {
        const newRecord = { date, emotion, pain };
        records.push(newRecord);
        saveRecords(); // Save updated records to localStorage
        updateChart(); // Update chart with the new data
        displayRecords(); // Update records table
    } else {
        alert('Please fill in all fields.');
    }
});

// Function to display saved records in a table
function displayRecords() {
    const tableBody = document.getElementById('records-table-body');
    tableBody.innerHTML = '';  // Clear the existing table body

    records.forEach(record => {
        const row = document.createElement('tr');
        
        const dateCell = document.createElement('td');
        dateCell.textContent = record.date;
        row.appendChild(dateCell);
        
        const emotionCell = document.createElement('td');
        emotionCell.textContent = record.emotion;
        row.appendChild(emotionCell);
        
        const painCell = document.createElement('td');
        painCell.textContent = record.pain;
        row.appendChild(painCell);
        
        tableBody.appendChild(row);
    });
}

// Event Listener for Chart Type Change
document.getElementById('chart-type').addEventListener('change', updateChart);

// function to generate csv file


function generateCSV() {
    // Define the header for the CSV
    const header = ['Date', 'Emotion', 'Pain Level'];
    
    // Convert the records into CSV format
    const rows = records.map(record => [record.date, record.emotion, record.pain]);

    // Combine the header and rows
    const csvContent = [
        header.join(','),  // Header
        ...rows.map(row => row.join(','))  // Rows
    ].join('\n');

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv' });

    // Create a temporary download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'emotion_tracker_report.csv';  // Filename for the CSV

    // Trigger the download
    link.click();
}



// Add event listener to the download button
document.getElementById('download-Report').addEventListener('click', generateCSV);


// Load records from localStorage on page load
window.onload = function() {
    records = JSON.parse(localStorage.getItem('records')) || [];
    updateChart();
    displayRecords();
};
