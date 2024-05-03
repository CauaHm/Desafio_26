let searching_form = document.querySelector(".searching_form");
let lupa = document.querySelector(".lupa_search");
let btnClose = document.querySelector(".btn_close");

lupa.addEventListener('click', () => {
    searching_form.classList.add('ativar')
})

// header

var header = document.getElementById('header');
var navigationHeader = document.getElementById('header_list');
var list_header = document.getElementById('list_header');
var showSidebar1 = false;

function chamarSidebar() {
    showSidebar1 = !showSidebar1
    if(showSidebar1) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar1';
    } else {
        navigationHeader.style.marginLeft = '-100vw'
    }
}