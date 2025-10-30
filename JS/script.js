let scrollTop = document.querySelector(".scroll-top");

window.onscroll = function() {
    if(scrollY >= 400) {
        scrollTop.style.display = "flex";
    } else {
        scrollTop.style.display = "none";
    }
}

scrollTop.addEventListener("click" , function() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})