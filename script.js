
const menu = document.getElementById("bars");
const navbar = document.getElementById("allusers");
const overlay = document.getElementById("overlay");

menu.addEventListener("click", function () {
    if (window.innerWidth < 768) {
        navbar.classList.toggle("active");
    } else {
        navbar.classList.remove('active')
    }
})



overlay.addEventListener('click', function () {
    var box = document.getElementById("allusers");
    box.classList.remove("active")
})