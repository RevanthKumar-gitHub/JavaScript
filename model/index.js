const modelbtn = document.querySelector(".open");
const closebtn = document.querySelector(".close");

modelbtn.onclick = ()=>{
    let modelov = document.querySelector(".modelOverlay");
    let model = document.querySelector(".model");
    let body = document.querySelector(".body");
    if(modelov.style.display=="")
    {
        model.style.display = "none";
        modelov.style.display = "flex";
        body.style.backdropFilter = "blur(2px)";

    }

}

closebtn.onclick = ()=>{
    let modelov = document.querySelector(".modelOverlay");
    let model = document.querySelector(".model");
    let body = document.querySelector(".body");
    if(modelov.style.display=="flex")
    {
        model.style.display = "flex";
        modelov.style.display = "";
        body.style.backdropFilter = "blur(0px)";
    }
}
