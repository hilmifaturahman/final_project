const menuIcon = document.getElementById("icon-menu");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", function() {
    menuList.classList.toggle("hidden");
})