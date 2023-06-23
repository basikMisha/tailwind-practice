function showTabs(tabsBtnClass, tabsContentClass) {
    const tabBnts = document.querySelectorAll(tabsBtnClass);
    const tabsContent = document.querySelectorAll(tabsContentClass);

    tabsContent.forEach((tab) => {
        tab.classList.add('hidden');
        tabsContent[0].classList.remove('hidden');
    });

    tabBnts.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            tabBnts.forEach((bnt) => {
                bnt.classList.remove('active');
            });
            
            btn.classList.add('active');

            tabsContent.forEach((tab) => {
                tab.classList.add('hidden');
                tabsContent[index].classList.remove('hidden');
            });
            
        })
    })
}

showTabs('.tab-btn', '.tabs-content');