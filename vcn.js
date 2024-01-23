const nav = document.querySelector("nav")
const mobilenav = document.querySelector(".mobile-navbar")
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const menuContainer = document.querySelector(".mobile-menu-container")
const overlay = document.querySelector(".overlay");

window.addEventListener('scroll', () => {
    if(window.scrollY > 60 ) {
        nav.classList.add('scrolled');
        mobilenav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
        mobilenav.classList.remove("scrolled");
    }
})
 
menuIcon.addEventListener("click",() => {
    menuContainer.classList.add("active");
    overlay.classList.add("active");
})
closeIcon.addEventListener("click",() => {
    menuContainer.classList.remove("active");
    overlay.classList.remove("active");
})


const protectionCards = document.getElementsByClassName('protection-card');

for (let i = 0; i < protectionCards.length; i++) {
    protectionCards[i].addEventListener('mouseover', function() {
        this.classList.add('active');
    });

    protectionCards[i].addEventListener('mouseout', function() {
        this.classList.remove('active');
    });
}
