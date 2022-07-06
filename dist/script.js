const Menu=document.getElementById("menu")
const scroolm=document.getElementById("btn")
const Navbar=document.querySelector(".menubar")
console.log(Navbar)
Menu.addEventListener("click",()=>{
Navbar.classList.toggle("active")

})
window.addEventListener('scroll',()=>{
if(scroolm.click){
window.scrollTo="0"

}


})