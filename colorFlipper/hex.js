const btn = document.getElementById("btn");
const page = document.getElementById("color");
const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E"];

let randomNumber = ()=>{
    return Math.floor(Math.random()*colors.length);
}
let hexCode = ()=>{
    let hex = "#";
    for(let i=0;i<6;i++)
    {
        let n = randomNumber();
        hex = hex + colors[n];
    }
    return hex;
}
btn.onclick = ()=>{
    const details = document.querySelector(".colorName")
    details.textContent = hexCode();
    page.style.backgroundColor = details.textContent;  
}