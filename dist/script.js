const Menu=document.getElementById("menu")
const scroolm=document.getElementById("btn")
const Navbar=document.querySelector(".menubar")
console.log(Navbar)
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