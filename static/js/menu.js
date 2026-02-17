document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        { id: 1, name: 'Dashboard (HUD)', icon: '📊', group: 'Main' },
        { id: 2, name: 'AI Hub', icon: '🧠', group: 'Intelligence' },
        { id: 3, name: 'WordPress', icon: '📝', group: 'CMS' },
        { id: 4, name: 'Website List', icon: '🌐', group: 'CMS' },
        { id: 5, name: 'Virtual Drives', icon: '💾', group: 'Storage' },
        { id: 6, name: 'Unlimited Drive Connect', icon: '⚡', group: 'Storage' },
        { id: 7, name: 'Cloud Matrix', icon: '☁️', group: 'Cloud' },
        { id: 8, name: 'Unlimited Cloud Box', icon: '📦', group: 'Cloud' },
        { id: 9, name: 'Cloud Storage List', icon: '📂', group: 'Cloud' },
        { id: 10, name: 'Engine Room', icon: '⚙️', group: 'Engine' },
        { id: 11, name: 'Unlimited Engine Box', icon: '🚀', group: 'Engine' },
        { id: 12, name: 'Engine List', icon: '📜', group: 'Engine' },
        { id: 13, name: 'Terminal Universe Control', icon: '🖥️', group: 'Admin' },
        { id: 14, name: 'Connectivity Sync', icon: '🔗', group: 'Network' },
        { id: 15, name: 'Security Logic', icon: '🛡️', group: 'Security' },
        { id: 16, name: 'Registry (Blueprint)', icon: '📋', group: 'System' },
        { id: 17, name: 'Settings (Config)', icon: '🛠️', group: 'System' }
    ];

    // Placeholder Slots for Future Services (Commander's 8 Buttons)
    for (let i = 1; i <= 8; i++) {
        menuItems.push({ id: 100 + i, name: `Future Service slot ${i}`, icon: '🔳', group: 'Upcoming' });
    }

    const menuContainer = document.getElementById('dynamicMenu');

    menuItems.forEach(item => {
        const div = document.createElement('div');
        div.className = `menu-item group-${item.group.toLowerCase()}`;
        div.innerHTML = `
            <span class="icon">${item.icon}</span>
            <span class="label">${item.name}</span>
        `;
        
        div.onclick = () => {
            document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
            div.classList.add('active');
            console.log(`A1 Sync: Mode shifted to ${item.name}`);
        };

        menuContainer.appendChild(div);
    });
});
                          
