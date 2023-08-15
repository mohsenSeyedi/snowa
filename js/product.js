const cartBtn=document.querySelector(".header-cart-btn")
const cartContainer=document.querySelector(".cart-container-wrap")



// cart
cartBtn.addEventListener("click" , () => {
    cartContainer.classList.toggle("active")
    if(cartContainer.className === "cart-container-wrap active") {
        searchBtn.firstElementChild.style.color="#666"
        searchBox.classList.remove("active")
        menuContainer.classList.remove("active")
        body.style.overflow= "hidden";
        addBgDarkBanner()
    }
    else{
        body.style.overflow= "auto";
        removeBgDarkBanner()
    }
})
// End of cart






