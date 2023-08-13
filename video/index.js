const switchbtn = document.querySelector(".switchbtn");

switchbtn.onclick = ()=>{
    const videobtn = document.querySelector(".video-container");
    if(switchbtn.classList.contains("slide"))
    {
        switchbtn.classList.remove("slide");
        videobtn.play();
    }
    else
    {
        switchbtn.classList.add("slide");
        videobtn.pause();
    }
}