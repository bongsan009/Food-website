
const navElem = document.getElementById("menu");
const btnElem = document.getElementById("menu__icon");


btnElem.addEventListener("click", function()
{
    navElem.classList.toggle("active");
    btnElem.classList.toggle("fa-times")
})


window.onscroll = function()
{
    navElem.classList.remove("active");
    btnElem.classList.remove("fa-times");
}