const accBnts = document.querySelectorAll('.accordion-btn');

accBnts.forEach((btn) => {
    btn.addEventListener('click', () => {
        const accItem = btn.parentNode;

        accItem.classList.contains('active') ? accItem.classList.remove('active') : accItem.classList.add('active');
    })
})