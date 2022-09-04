function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //Tabs

    const tabs = document.querySelectorAll(tabsSelector), //Конопка ТабЫ
        tabsContent = document.querySelectorAll(tabsContentSelector), //Слайды
        tabsParent = document.querySelector(tabsParentSelector); //Родительский елемент таб
    
    function tabsHideContent() {
        tabsContent.forEach((e) => {
            e.classList.add('hide');
            e.classList.remove('show', 'fade');
        });

        tabs.forEach((e) => {
            e.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 1) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);

    }

    tabsHideContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {

        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    tabsHideContent();
                    showTabContent(i);
                }
            });
        }
        
    });
}

export default tabs;