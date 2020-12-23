let index = document.querySelector('.index'),
    page_header = document.querySelector('.page-header'),
    login_button = document.querySelector('.button'),
    sub_nav = document.querySelector('.sub_nav'),
    changer = document.querySelector('.changer')

function DarkTheme() {
    console.log('dark theme on');
    index.className = 'index_dark';
    page_header.className = 'page-header-dark';
    login_button.className = 'button_dark';
    sub_nav.className = 'sub_nav_dark';
};

function DefaultTheme() {
    console.log('dark theme off');
    index.className = 'index';
    page_header.className = 'page-header';
    login_button.className = 'button';
    sub_nav.className = 'sub_nav';
};

changer.addEventListener('change', () => {
    if ( changer.checked == false ) {
        DefaultTheme();
    } else { DarkTheme(); };
})
