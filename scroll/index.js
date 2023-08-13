const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const menubtn = document.querySelector(".nav-toogle");
const nav = document.getElementById("nav");

menubtn.onclick = ()=>{
    const showlinks = document.querySelector(".links");
    showlinks.classList.toggle("showlinks");

}

window.addEventListener("scroll",()=>{
    const navHeight =nav.getBoundingClientRect().height;
    if(window.scrollY >= navHeight)
    {
        nav.classList.add("fixed-nav");
    }
    else
    {
        nav.classList.remove("fixed-nav");
    }

})