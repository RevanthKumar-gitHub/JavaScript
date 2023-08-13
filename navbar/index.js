const menu = document.querySelector(".menu");

menu.onclick = ()=>{
    const links = document.querySelector(".links");
    links.classList.toggle("mobile");
    menu.classList.toggle("open");
}