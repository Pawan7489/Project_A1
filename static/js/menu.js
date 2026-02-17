
console.log("A1 Menu System: Initializing..."); // Check karne ke liye console mein dikhega

document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('dynamicMenu');
    
    if (!menuContainer) {
        console.error("Technical Error: 'dynamicMenu' ID nahi mila! HTML check karein.");
        return;
    }

    const items = [
        { name: 'Dashboard (HUD)', icon: '📊' },
        { name: 'AI Hub', icon: '🧠' },
        { name: 'WordPress', icon: '📝' },
        { name: 'Website List', icon: '🌐' }
        // ... baaki list aapke paas hai
    ];

    items.forEach(item => {
        const div = document.createElement('div');
        div.style.padding = "15px";
        div.style.borderBottom = "1px solid #f4f7fe";
        div.style.cursor = "pointer";
        div.innerHTML = `${item.icon} ${item.name}`;
        menuContainer.appendChild(div);
    });
    
    console.log("A1 Menu System: Success! Items injected.");
});
