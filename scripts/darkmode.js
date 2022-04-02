function toggle_dark_mode() {
    if (window.btnDarkMode.innerHTML == 'Dark Mode') {
        window.btnDarkMode.innerHTML = 'Light Mode';
    } else {
        window.btnDarkMode.innerHTML = 'Dark Mode';
    }
    document.querySelector('body').classList.toggle('dark-mode');
}

function is_user_wants_dark_mode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
    } else {
        return false;
    }
}

function toggle_dark_mode_onload() {
    if (is_user_wants_dark_mode() == true) {
        toggle_dark_mode();
    }
}

window.btnDarkMode = document.getElementById('btn-dark-mode');
btnDarkMode.addEventListener('click', toggle_dark_mode, false);
document.addEventListener("DOMContentLoaded", toggle_dark_mode_onload, false);