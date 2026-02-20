// Wait for the HTML to fully load before running the magic
document.addEventListener("DOMContentLoaded", function() {
    
    // Get the main dashboard box by its ID
    const dashboard = document.getElementById("techDashboard");
    
    // Array of our 3 different animation designs (Modes)
    const animationModes = ["mode-chasing", "mode-pulse", "mode-scan"];
    
    // Track which animation is currently running
    let currentModeIndex = 0;

    // The Timer: Run this function automatically every 8 seconds (8000 milliseconds)
    setInterval(function() {
        
        // Step 1: Remove the old animation class
        dashboard.classList.remove(animationModes[currentModeIndex]);
        
        // Step 2: Calculate the next animation mode mathematically
        currentModeIndex = (currentModeIndex + 1) % animationModes.length;
        
        // Step 3: Add the new animation class to change the design instantly!
        dashboard.classList.add(animationModes[currentModeIndex]);
        
        // System log for Commander
        console.log("System Alert: Animation Design changed to " + animationModes[currentModeIndex]);
        
    }, 8000); // 8000 ms = 8 seconds. You can change this time if you want!

});
