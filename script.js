document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/80', 'shadow-lg');
            navbar.classList.remove('border-white/10');
            navbar.classList.add('border-transparent');
        } else {
            navbar.classList.remove('bg-black/80', 'shadow-lg', 'border-transparent');
            navbar.classList.add('border-white/10');
        }
    });

    // Initial Player Count Fetch
    fetchPlayerCount();
});

// Copy IP Functionality
function copyIP() {
    const ipText = "luxemc.falixsrv.me";
    navigator.clipboard.writeText(ipText).then(() => {
        const tooltip = document.getElementById('copy-tooltip');
        tooltip.classList.remove('opacity-0');
        
        setTimeout(() => {
            tooltip.classList.add('opacity-0');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Fetch Player Count from Minecraft API
async function fetchPlayerCount() {
    const ip = "luxemc.falixsrv.me";
    const countElement = document.getElementById('player-count');
    
    try {
        // Using mcsrvstat.us API
        const response = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
        const data = await response.json();

        if (data.online) {
            countElement.innerText = `${data.players.online} Online`;
        } else {
            // Fallback if server is offline or API can't reach it
            countElement.innerText = "Offline";
        }
    } catch (error) {
        console.error("Error fetching player count:", error);
        countElement.innerText = "Server Online";
    }
}