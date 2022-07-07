const Menu=document.getElementById("menu")
const scroolm=document.getElementById("btn")
const Navbar=document.querySelector(".menubar")
const  navlinks=document.querySelectorAll(".nav-link")
console.log(navlinks)
Menu.addEventListener("click",()=>{
Navbar.classList.toggle("active")

})
window.addEventListener('scroll',()=>{
if(scrollY>300){
scroolm.classList.add("show")

}else{
    scroolm.classList.remove("show")
}


})
scroolm.addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"})
    
})
navlinks.forEach((navlink)=>{
navlink.addEventListener("click",()=>{

    Navbar.classList.toggle("active")
})

})
