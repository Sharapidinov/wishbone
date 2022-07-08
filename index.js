const btn =document.querySelector(`.burger`)
const menu = document.querySelector('.burger-menu')

btn.addEventListener("click", () => {
    menu.classList.toggle('burger-menu-active')
})