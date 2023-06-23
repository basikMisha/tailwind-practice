const menuBtn = document.querySelector('#burgerMenuBtn');
const mobileMenu = document.querySelector('#mobileMenu');
const body = document.querySelector('body');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('grid');
    body.classList.toggle('overflow-hidden');
});

window.addEventListener('resize', () => {
    if(window.innerWidth > 767.99) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('grid');
        menuBtn.classList.remove('active');
        body.classList.remove('overflow-hidden');
    }
})