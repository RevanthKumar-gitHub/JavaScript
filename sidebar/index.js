const menu = document.querySelector(".menu");

menu.onclick = ()=>{
    const sidebar = document.querySelector(".side");
    if(sidebar.style.display=="flex")
    {
        sidebar.style.display = "none";
    }
    else
    {
        sidebar.style.display = "flex";
    }
}

const close = document.querySelector(".close");

close.onclick  = ()=>{
    const sidebar = document.querySelector(".side");
    if(sidebar.style.display=="flex")
    {
        sidebar.style.display = "none";
    }
    else
    {
        sidebar.style.display = "flex";
    }
}