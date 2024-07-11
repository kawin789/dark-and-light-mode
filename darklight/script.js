const body = document.body;
const modeToggle = document.getElementById('mode-toggle');
const greeting = document.getElementById('greeting');

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('dark-mode')) {
        greeting.textContent = 'Good Night';
    } else {
        greeting.textContent = 'Good Morning';
    }
});
