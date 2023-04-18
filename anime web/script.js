const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-moon');
    document.body.classList.toggle('dark-mode');
});