const mobileMenu = document.querySelector('.mobileMenu').firstChild;
const ul = document.querySelector('#ul');


window.addEventListener('resize', () => {
    if(window.innerWidth >= 1180) {
        ul.style.display = "flex";
    } else {
        ul.style.display = "none";
    }
})

mobileMenu.addEventListener('click', () => {
    if(ul.style.display === 'none') {
        ul.style.display = 'flex';
    } else if(ul.style.display !== 'none') {
        ul.style.display = 'none';
    }
})