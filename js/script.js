document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('checkbox');

    // Function to set the theme
    const setTheme = (isDarkMode) => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            themeSwitch.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            themeSwitch.checked = false;
        }
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        // Check for system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark);
    }

    // Event listener for the theme switch
    themeSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
