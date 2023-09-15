const body=document.querySelector("body")
const bannerContainer=document.querySelector(".page-container")
const menuContainer=document.querySelector("#header-container-nav")
const menuBtn=document.querySelector(".header-nav-btn")
const menuDropdown=document.querySelector(".item-menu")
const headerSubmenuItems=document.querySelector(".header-submenu-items")
const headerInfo=document.querySelector(".header-info button");
const searchBox=document.querySelector("#box-search-bar")
const searchBtn=document.querySelector(".header-sreach")
const searchInput=document.querySelector("#box-search-input")

console.log(bannerContainer);



function addBgDarkBanner() {
    bannerContainer.classList.add("active")
}
function removeBgDarkBanner() {
    bannerContainer.classList.remove("active")
}

// menu
menuBtn.addEventListener("click" , ()=> {
    menuContainer.classList.toggle("active")

  
    if(menuContainer.classList.contains('active')) {
        menuBtn.firstElementChild.style.visibility="hidden"
        menuBtn.lastElementChild.style.visibility="visible"
        searchBtn.firstElementChild.style.color="#666"
        searchBox.classList.remove("active")
        body.style.overflow= "hidden";
        addBgDarkBanner()
    }
    else{
        menuBtn.firstElementChild.style.visibility="visible"
        menuBtn.lastElementChild.style.visibility="hidden"
        body.style.overflow= "auto";
        removeBgDarkBanner()
    }
   
  })
  
  // End of menu



  // serch-box
searchBtn.addEventListener("click" , () => {
    searchBox.classList.toggle("active")
    searchInput.focus()

    if(searchBox.className === "box-search-bar active") {
       searchBtn.firstElementChild.style.color="#0182c6"
       menuContainer.classList.remove("active")
       menuBtn.firstElementChild.style.visibility="visible"
       menuBtn.lastElementChild.style.visibility="hidden"
       body.style.overflow= "hidden";
       addBgDarkBanner()
      
    }
    else{
        searchBtn.firstElementChild.style.color="#666" 
        body.style.overflow= "auto";
        removeBgDarkBanner()
    }
}) 
// End of serch-box




