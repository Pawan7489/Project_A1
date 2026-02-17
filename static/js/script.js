document.addEventListener('DOMContentLoaded', function() {
    // Theme Colors
    const colors = {
        blue: '#4318ff',
        lightBlue: 'rgba(67, 24, 255, 0.2)',
        green: '#05cd99',
        lightGreen: 'rgba(5, 205, 153, 0.2)',
        red: '#e31a1a',
        lightRed: 'rgba(227, 26, 26, 0.2)',
        orange: '#ffb547',
        purple: '#8758ff',
        text: '#707eae',
        grid: '#e0e5f2'
    };

    // Common Chart Options for Light Theme
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false } // Hide legends for a cleaner look
        },
        scales: {
            x: {
                grid: { display: false, borderColor: colors.grid },
                ticks: { color: colors.text }
            },
            y: {
                grid: { color: colors.grid, borderDash: [5, 5] },
                ticks: { color: colors.text, beginAtZero: true },
                border: { display: false }
            }
        }
    };

    // Helper function to generate random data
    const randomData = (count, max) => Array.from({ length: count }, () => Math.floor(Math.random() * max));

    // --- Chart Definitions ---

    // 1. Cloud Connectivity (Line Chart with Area fill)
    new Chart(document.getElementById('cloudConn'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                data: [65, 78, 60, 85, 72, 90],
                borderColor: colors.blue,
                backgroundColor: colors.lightBlue,
                fill: true,
                tension: 0.4
            }]
        },
        options: commonOptions
    });

    // 2. Engine Connectivity (Bar Chart)
    new Chart(document.getElementById('engineConn'), {
        type: 'bar',
        data: {
            labels: ['E1', 'E2', 'E3', 'E4', 'E5'],
            datasets: [{
                data: [80, 95, 70, 88, 92],
                backgroundColor: colors.blue,
                borderRadius: 8
            }]
        },
        options: commonOptions
    });

    // 3. Hosting Health (Line Chart)
    new Chart(document.getElementById('hostConn'), {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                data: [98, 97, 99, 98, 96, 99, 98],
                borderColor: colors.green,
                tension: 0.3,
                borderWidth: 3
            }]
        },
        options: commonOptions
    });

    // ... (Aise hi baaki 12 charts ke liye bhi config define karenge) ...
    // Commander, agar aap chahein toh main baaki sabhi 12 charts ka bhi
    // full configuration yahan provide kar sakta hoon.
    // Filhal maine 3 example charts diye hain taaki aap naya look dekh sakein.

});
