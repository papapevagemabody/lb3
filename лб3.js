var body = document.querySelector('body')
const menuBtn = document.querySelector(".menu__button");
const menuList = document.querySelector(".menu__list");

function toogleMenuVisibility() {
menuList.classlist.toogle("hide");
}


function myImg() {
    let elem = document.getElementById('img');
    let style = getComputedStyle(elem);
    if (style.display == 'none') {
        document.getElementById('img').style.display='block'
    } else if (style.display != 'none') {
        document.getElementById('img').style.display='none'

    }
}


menuBtn.addEventListener("click", toogleMenuVisibility);
