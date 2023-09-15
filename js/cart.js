const cartBtn=document.querySelector(".header-cart-btn")
const cartContainer=document.querySelector("#cart-container-wrap")



// cart
cartBtn.addEventListener("click" , () => {
    cartContainer.classList.toggle("active")
    if(cartContainer.classList.contains("active")) {
        body.style.overflow= "hidden";
        addBgDarkBanner()
    }
    else{
        body.style.overflow= "auto";
        removeBgDarkBanner()
    }
})

// End of cart






