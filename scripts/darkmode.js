function toggleDarkMode() {
    // if (window.btnDarkMode.innerHTML == 'Dark Mode') {
    //     window.btnDarkMode.innerHTML = 'Light Mode';
    // } else {
    //     window.btnDarkMode.innerHTML = 'Dark Mode';
    // }
    document.querySelector('body').classList.toggle('dark-mode');
}

function isUserWantsDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
    } else {
        return false;
    }
}

function toggleDarkModeOnLoad() {
    if (isUserWantsDarkMode()) {
        toggleDarkMode();
    }
}

window.btnDarkMode = document.getElementById('btn-dark-mode');
btnDarkMode.addEventListener('click', toggleDarkMode, false);
document.addEventListener("DOMContentLoaded", toggleDarkModeOnLoad, false);