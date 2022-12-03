
function changeView() {
    let x = document.getElementById("pmenu");
    if (x.className == "menu-overlay") {
        x.className += " hide";
    } else {
        x.className = "menu-overlay"
    }
}

let scrollPerClick = 300;
const menuCards = document.querySelector(".menu-cards");

function setScrollPerClick() {
    const wrapperWidth = menuCards.offsetWidth;
    const cardWidth = menuCards.firstElementChild.offsetWidth;
    if (cardWidth !== 0) {
        const n = Math.floor(wrapperWidth / cardWidth);
        scrollPerClick = n * cardWidth;
    } else {
        scrollPerClick = wrapperWidth;
    }
}

setScrollPerClick();

function sliderScrollLeft() {
    setScrollPerClick();
    menuCards.scrollTo({
        top: 0,
        left: menuCards.offsetWidth - scrollPerClick,
        behavior: "smooth",
    });
}

function sliderScrollRight() {
    setScrollPerClick();
    if (
        menuCards.scrollLeft <=
        menuCards.scrollWidth - menuCards.clientWidth
    ) {
        menuCards.scrollTo({
            top: 0,
            left: menuCards.scrollLeft + scrollPerClick,
            behavior: "smooth",
        });
    };
}
