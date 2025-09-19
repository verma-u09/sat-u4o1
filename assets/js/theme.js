// apply dark mode on page load
function applyDarkMode() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// call immediately
applyDarkMode();

// function to toggle dark mode from settings
function toggleDarkMode(isOn) {
    localStorage.setItem('darkMode', isOn ? 'true' : 'false');
    applyDarkMode();
}
