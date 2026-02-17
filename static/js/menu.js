document.addEventListener('DOMContentLoaded', function() {
    
    // 1. SIDEBAR TOGGLE LOGIC (Open/Close)
    const menuBtn = document.getElementById('menuToggle');
    const closeBtn = document.getElementById('sidebarClose');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (menuBtn) {
        menuBtn.onclick = () => { 
            sidebar.classList.add('open'); 
            overlay.classList.add('active'); 
        };
    }

    if (closeBtn) {
        closeBtn.onclick = () => { 
            sidebar.classList.remove('open'); 
            overlay.classList.remove('active'); 
        };
    }

    if (overlay) {
        overlay.onclick = () => { 
            sidebar.classList.remove('open'); 
            overlay.classList.remove('active'); 
        };
    }

    // 2. CORE 17 MENU ITEMS
    const coreItems = [
        { name: 'Dashboard (HUD)', icon: '📊', link: '#' },
        { name: 'AI Hub', icon: '🧠', link: '#' },
        { name: 'WordPress', icon: '📝', link: '#' },
        { name: 'Website list', icon: '🌐', link: '#' },
        { name: 'Virtual Drives', icon: '💾', link: '#' },
        { name: 'unlimited drive connect', icon: '⚡', link: '#' },
        { name: 'Cloud Matrix', icon: '☁️', link: '#' },
        { name: 'unlimited cloud connect box', icon: '📦', link: '#' },
        { name: 'Cloud storage drive list', icon: '📂', link: '#' },
        { name: 'Engine Room', icon: '⚙️', link: '#' },
        { name: 'unlimited engine connect box', icon: '🚀', link: '#' },
        { name: 'Engine list', icon: '📜', link: '#' },
        { name: 'Terminal universe control', icon: '🖥️', link: '#' },
        { name: 'Connectivity Sync', icon: '🔗', link: '#' },
        { name: 'Security Logic', icon: '🛡️', link: '#' },
        { name: 'Registry (Blueprint)', icon: '📋', link: '#' },
        { name: 'Settings (Config)', icon: '🛠️', link: '#' }
    ];

    const menuContainer = document.getElementById('dynamicMenu');

    // 3. FUNCTION TO RENDER MENU
    function renderMenu() {
        menuContainer.innerHTML = ''; // Clear existing
        
        // Load custom items from memory (localStorage)
        const customItems = JSON.parse(localStorage.getItem('A1_Custom_Services')) || [];
        const allItems = [...coreItems, ...customItems];

        allItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'menu-item';
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.padding = "12px";
            div.style.borderRadius = "10px";
            div.style.cursor = "pointer";
            div.style.marginBottom = "5px";
            
            div.innerHTML = `
                <span style="margin-right:12px; font-size:1.2rem;">${item.icon || '🔹'}</span>
                <span style="flex-grow: 1;">${item.name}</span>
            `;

            div.onclick = () => {
                if (item.link && item.link !== '#') {
                    window.open(item.link, '_blank');
                } else {
                    console.log(`System: ${item.name} activated.`);
                }
            };
            
            menuContainer.appendChild(div);
        });

        // 4. ADD NEW SERVICE BUTTON (The Box)
        const addBtn = document.createElement('div');
        addBtn.className = 'menu-item';
        addBtn.style.border = "2px dashed #4318ff";
        addBtn.style.color = "#4318ff";
        addBtn.style.marginTop = "20px";
        addBtn.style.padding = "10px";
        addBtn.style.textAlign = "center";
        addBtn.style.borderRadius = "10px";
        addBtn.style.cursor = "pointer";
        addBtn.innerHTML = "<b>+ Add New Service</b>";

        addBtn.onclick = () => {
            const name = prompt("Service ka Naam likhein:");
            if (name) {
                const url = prompt("Service ka Link (URL) dalein:", "https://");
                if (url) {
                    const newService = { name: name, icon: '🚀', link: url };
                    const currentCustom = JSON.parse(localStorage.getItem('A1_Custom_Services')) || [];
                    currentCustom.push(newService);
                    localStorage.setItem('A1_Custom_Services', JSON.stringify(currentCustom));
                    renderMenu(); // Automatic refresh
                    alert(`${name} system mein connect ho gaya hai!`);
                }
            }
        };
        menuContainer.appendChild(addBtn);
    }

    renderMenu();
});
