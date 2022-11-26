const showSearch = document.querySelector(".navbar-icon_search")
const hideSearch = document.querySelector(".search-close")
const searchBox = document.querySelector(".search-box")
const showMenuMobile = document.querySelector(".menu-mobile")
const hiddenMenuMobile = document.querySelector(".menu-mobile-close")
const menuMobile = document.querySelector(".navbar-menu")

const btnSubmenu = document.querySelector(".arrow-down")
const btnSubmenuUp = document.querySelector(".arrow-up")
const subMenu = document.querySelector(".dropdown-menu-mobile")
console.log(menuMobile)

showSearch.addEventListener("click", function(){
    searchBox.classList.remove("hide-search")
    searchBox.style.zIndex = "100"
})
hideSearch.addEventListener("click", function(){
    searchBox.classList.add("hide-search")
    searchBox.style.zIndex = "-100"

})
// menu-mobile
// showMenuMobile.addEventListener("click", function(){
//     menuMobile.classList.add("show-navbar-menu")
//     showMenuMobile.style.display = 'none'
//     hiddenMenuMobile.style.display = 'block'
// })
// hiddenMenuMobile.addEventListener("click", function(){
//     menuMobile.classList.remove("show-navbar-menu")
//     showMenuMobile.style.display = 'block'
//     hiddenMenuMobile.style.display = 'none'
// })
// show sub-menu
console.log(btnSubmenu)
console.log(subMenu)
btnSubmenu.addEventListener("click", function(){
    subMenu.style.display = "block"
    btnSubmenuUp.style.display = "block"
    btnSubmenu.style.display = "none"
})
btnSubmenuUp.addEventListener("click", function(){
    subMenu.style.display = "none"
    btnSubmenu.style.display = "block"
    btnSubmenuUp.style.display = "none"

})

// PAGING
let pagingItem = document.getElementsByClassName("paging-item");
let currPage = 1;

function activeLink(){
    for (l of pagingItem){
        l.classList.remove("active-paging")
    }
    event.target.classList.add("active-paging")
    currPage = event.target.value
    console.log(currPage)
}
function btnPrev(){
    if (currPage > 1){
        for (l of pagingItem){
            l.classList.remove("active-paging")
        }
        currPage--;
        pagingItem[currPage].classList.add("active-paging")
    }
}
function btnNext(){
    if (currPage <= 4){
        for (l of pagingItem){
            l.classList.remove("active-paging")
        }
        currPage++;
        pagingItem[currPage].classList.add("active-paging")
    }
}

// hide submit home page
const btnSubmitHomePage = document.querySelector(".col-sp-user-4")
const notificationBtnSHP = document.querySelector(".notification-sp-user")
btnSubmitHomePage.addEventListener("click", function(){
    notificationBtnSHP.classList.remove("hide-notification-sp-user")
})