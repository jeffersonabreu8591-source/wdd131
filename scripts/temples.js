const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        menuButton.textContent = '✖';
    } else {
        menuButton.textContent = '☰';
    }
});

// Footer year
document.querySelector('#currentyear').textContent =
new Date().getFullYear();

// Last modified
document.querySelector('#lastModified').textContent =
`Last Modified: ${document.lastModified}`;