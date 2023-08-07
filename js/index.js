const tabsBtn = document.querySelectorAll('.tabs_button');
const tabsCont = document.querySelectorAll('.tabs_list');
tabsBtn.forEach(function(item){
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        tabsBtn.forEach(function(item) {
            item.classList.remove('active');
        });
        tabsCont.forEach(function(item) {
            item.classList.remove('active');
        });
        
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });

});