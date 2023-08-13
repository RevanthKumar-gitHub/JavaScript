const visionbtn = document.getElementById("visionbtn");
const historybtn = document.getElementById("historybtn");
const goalsbtn = document.getElementById("goalsbtn");

const vision = document.getElementById("vision");
const history = document.getElementById("history");
const goals = document.getElementById("goals");

visionbtn.onclick = ()=>{
    visionbtn.classList.add("activebtn");
    historybtn.classList.remove("activebtn");
    goalsbtn.classList.remove("activebtn");

    vision.classList.add("active");
    history.classList.remove("active");
    goals.classList.remove("active");

}

historybtn.onclick = ()=>{
    historybtn.classList.add("activebtn");
    visionbtn.classList.remove("activebtn");
    goalsbtn.classList.remove("activebtn");

    vision.classList.remove("active");
    history.classList.add("active");
    goals.classList.remove("active");
}

goalsbtn.onclick = ()=>{
    goalsbtn.classList.add("activebtn");
    historybtn.classList.remove("activebtn");
    visionbtn.classList.remove("activebtn");

    vision.classList.remove("active");
    history.classList.remove("active");
    goals.classList.add("active");
}