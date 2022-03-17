const menuButton = document.getElementById("menu-btn");
const menuContent = document.getElementById("menu-content");
menuButton.addEventListener("click", showDropdown);

function showDropdown() {
    menuContent.style.display = "block";
}

window.onclick = function(event) {
    if (!event.target.matches("#menu-btn")) {
        menuContent.style.display = "none";
    }
}
