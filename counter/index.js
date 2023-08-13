const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
const dec = document.getElementById("dec");

inc.onclick = () => {
  const valueClass = document.querySelector(".value");
  let value = parseInt(valueClass.textContent);
  valueClass.textContent = "" + (value + 1);
  color(value+1);
};

dec.onclick = () => {
  const valueClass = document.querySelector(".value");
  let value = parseInt(valueClass.textContent);
  valueClass.textContent = "" + (value - 1);
  color(value-1);
};
reset.onclick = () => {
  const valueClass = document.querySelector(".value");
  let value = parseInt(valueClass.textContent);
  value = 0;
  valueClass.textContent = "" + value;
  color(value);
};

let color = (val) => {
    const vc = document.getElementById("value");
    if(val>0)
    {
        vc.style.color = "green";
    }
    else if(val<0)
    {
        vc.style.color = "red";
    }
    else
    {
        vc.style.color = "white";
    }
};
