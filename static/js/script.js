document.addEventListener('DOMContentLoaded', function() {
    // Light Theme Color Palette
    const colors = {
        blue: '#4318ff',
        green: '#05cd99',
        red: '#e31a1a',
        orange: '#ffb547',
        purple: '#8758ff',
        magenta: '#ff00ff',
        cyan: '#01b8ff',
        text: '#707eae',
        grid: '#f0f2f8'
    };

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: { color: colors.text, font: { size: 10 } } },
            y: { grid: { color: colors.grid, borderDash: [5, 5] }, ticks: { color: colors.text, font: { size: 10 } }, border: { display: false } }
        }
    };

    const randomData = (count) => Array.from({ length: count }, () => Math.floor(Math.random() * 40) + 60);

    // 1. Cloud Connectivity
    new Chart(document.getElementById('cloudConn'), {
        type: 'line',
        data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], datasets: [{ data: [65, 78, 60, 85, 72, 90], borderColor: colors.blue, backgroundColor: 'rgba(67, 24, 255, 0.1)', fill: true, tension: 0.4, pointRadius: 4 }] },
        options: commonOptions
    });

    // 2. Engine Connectivity
    new Chart(document.getElementById('engineConn'), {
        type: 'bar',
        data: { labels: ['E1', 'E2', 'E3', 'E4', 'E5'], datasets: [{ data: [80, 95, 70, 88, 92], backgroundColor: colors.blue, borderRadius: 5 }] },
        options: commonOptions
    });

    // 3. Hosting Health
    new Chart(document.getElementById('hostConn'), {
        type: 'line',
        data: { labels: ['1s', '2s', '3s', '4s', '5s'], datasets: [{ data: randomData(5), borderColor: colors.green, tension: 0.3, borderWidth: 3 }] },
        options: commonOptions
    });

    // 4. Domain Status
    new Chart(document.getElementById('domainConn'), {
        type: 'line',
        data: { labels: ['W1', 'W2', 'W3', 'W4'], datasets: [{ data: [90, 92, 88, 95], borderColor: colors.purple, tension: 0.4 }] },
        options: commonOptions
    });

    // 5. Host-Domain Bridge
    new Chart(document.getElementById('bridgeSync'), {
        type: 'bar',
        data: { labels: ['Sync', 'Wait', 'Active'], datasets: [{ data: [70, 30, 90], backgroundColor: [colors.cyan, colors.orange, colors.green], borderRadius: 5 }] },
        options: commonOptions
    });

    // 6. Multi-Cloud Mesh
    new Chart(document.getElementById('multiCloud'), {
        type: 'radar',
        data: { labels: ['AWS', 'GCP', 'Azure', 'Oracle', 'IBM'], datasets: [{ data: [80, 90, 70, 85, 60], borderColor: colors.blue, backgroundColor: 'rgba(67, 24, 255, 0.2)' }] },
        options: { plugins: { legend: { display: false } } }
    });

    // 7. Drive Matrix
    new Chart(document.getElementById('driveSync'), {
        type: 'doughnut',
        data: { labels: ['Used', 'Free'], datasets: [{ data: [65, 35], backgroundColor: [colors.blue, colors.grid], borderWidth: 0 }] },
        options: { cutout: '80%', plugins: { legend: { display: false } } }
    });

    // 8. Anomaly Detection
    new Chart(document.getElementById('problemGraph'), {
        type: 'line',
        data: { labels: ['1', '2', '3', '4', '5'], datasets: [{ data: [5, 2, 8, 1, 3], borderColor: colors.red, backgroundColor: 'rgba(227, 26, 26, 0.1)', fill: true }] },
        options: commonOptions
    });

    // 9. AI Core Logic Health
    new Chart(document.getElementById('aiHealth'), {
        type: 'line',
        data: { labels: ['T1', 'T2', 'T3', 'T4'], datasets: [{ data: randomData(4), borderColor: colors.magenta, tension: 0.5 }] },
        options: commonOptions
    });

    // 10. Multi-Engine Sync
    new Chart(document.getElementById('engineMulti'), {
        type: 'bar',
        data: { labels: ['A', 'B', 'C'], datasets: [{ data: [85, 45, 65], backgroundColor: colors.orange }] },
        options: commonOptions
    });

    // 11. Active Users
    new Chart(document.getElementById('userActive'), {
        type: 'line',
        data: { labels: ['10am', '12pm', '2pm', '4pm'], datasets: [{ data: [120, 450, 300, 600], borderColor: colors.cyan, fill: false }] },
        options: commonOptions
    });

    // 12. Engine Performance (RPM)
    new Chart(document.getElementById('engineRPM'), {
        type: 'bar',
        data: { labels: ['Load'], datasets: [{ data: [88], backgroundColor: colors.green }] },
        options: commonOptions
    });

    // 13. Memory Capacity
    new Chart(document.getElementById('capacityGraph'), {
        type: 'pie',
        data: { labels: ['VRAM', 'RAM'], datasets: [{ data: [40, 60], backgroundColor: [colors.purple, colors.blue] }] },
        options: { plugins: { legend: { display: false } } }
    });

    // 14. Endurance Uptime
    new Chart(document.getElementById('enduranceGraph'), {
        type: 'line',
        data: { labels: ['D1', 'D2', 'D3'], datasets: [{ data: [99, 100, 99.8], borderColor: colors.green }] },
        options: commonOptions
    });

    // 15. Total System Stress
    new Chart(document.getElementById('sysStress'), {
        type: 'line',
        data: { labels: ['Min', 'Max'], datasets: [{ data: [20, 45], borderColor: colors.red, tension: 0.1 }] },
        options: commonOptions
    });
});
        
