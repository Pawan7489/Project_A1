const graphIds = [
    'cloudConn', 'engineConn', 'hostConn', 'domainConn', 'bridgeSync',
    'multiCloud', 'driveSync', 'problemGraph', 'engineMulti', 'aiHealth',
    'userActive', 'engineRPM', 'capacityGraph', 'enduranceGraph', 'sysStress'
];

const createChart = (id) => {
    const ctx = document.getElementById(id).getContext('2d');
    const themeColor = id === 'problemGraph' ? '#ff0055' : '#00f3ff';
    
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array(10).fill(''),
            datasets: [{
                data: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                borderColor: themeColor,
                borderWidth: 1.5,
                pointRadius: 0,
                fill: true,
                backgroundColor: themeColor + '11',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { display: false }, y: { display: false } }
        }
    });
};

const charts = graphIds.map(id => createChart(id));

// Uptime Tracker
let seconds = 0;
setInterval(() => {
    seconds++;
    let hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    let mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    let secs = (seconds % 60).toString().padStart(2, '0');
    document.getElementById('uptime').innerText = `${hrs}:${mins}:${secs}`;
}, 1000);
