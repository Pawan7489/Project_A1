// Initialize 15 Unique Graphs
const configs = [
    { id: 'cloudConn', type: 'line', color: '#00f3ff' },
    { id: 'engineConn', type: 'line', color: '#00f3ff' },
    { id: 'hostConn', type: 'line', color: '#00f3ff' },
    { id: 'domainConn', type: 'line', color: '#00f3ff' },
    { id: 'bridgeSync', type: 'line', color: '#00f3ff' },
    { id: 'multiCloud', type: 'radar', color: '#bd00ff' },
    { id: 'driveSync', type: 'bar', color: '#00f3ff' },
    { id: 'problemGraph', type: 'line', color: '#ff0055' },
    { id: 'engineMulti', type: 'line', color: '#00f3ff' },
    { id: 'aiHealth', type: 'line', color: '#00ff88' },
    { id: 'userActive', type: 'bar', color: '#00f3ff' },
    { id: 'engineRPM', type: 'line', color: '#00f3ff' },
    { id: 'capacityGraph', type: 'bar', color: '#00f3ff' },
    { id: 'enduranceGraph', type: 'line', color: '#00f3ff' },
    { id: 'sysStress', type: 'line', color: '#ff8800' }
];

const charts = configs.map(config => {
    const ctx = document.getElementById(config.id).getContext('2d');
    return new Chart(ctx, {
        type: config.type,
        data: {
            labels: Array(12).fill(''),
            datasets: [{
                data: Array.from({length: 12}, () => Math.floor(Math.random() * 100)),
                borderColor: config.color,
                backgroundColor: config.color + '22',
                borderWidth: 1.5,
                pointRadius: 0,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false, min: 0, max: 100 }
            }
        }
    });
});

// Real-time Update Logic
setInterval(() => {
    charts.forEach(chart => {
        chart.data.datasets[0].data.shift();
        chart.data.datasets[0].data.push(Math.floor(Math.random() * 100));
        chart.update('none');
    });
}, 2500);

// Uptime Clock
let sec = 0;
setInterval(() => {
    sec++;
    let h = Math.floor(sec/3600).toString().padStart(2, '0');
    let m = Math.floor((sec%3600)/60).toString().padStart(2, '0');
    let s = (sec%60).toString().padStart(2, '0');
    document.getElementById('uptime').innerText = `${h}:${m}:${s}`;
}, 1000);
