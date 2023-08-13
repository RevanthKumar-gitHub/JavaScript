const btn = document.getElementById("btn");
const page = document.getElementById("color");
const colors = ["red","blue","black","rgb(233,23,71)","pink","yellow","white"]

let randomNumber = ()=>{
    return Math.floor(Math.random()*colors.length);
}

btn.onclick = ()=>{
    let n = randomNumber();
    console.log(colors[n]);
    const details = document.querySelector(".colorName")
    details.textContent = colors[n];
    page.style.backgroundColor = colors[n];  
}