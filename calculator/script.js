let dis = document.getElementById('dis');
let switchs = document.getElementById('switch');
let white = document.getElementById('white');
switchs.addEventListener('click', () => {
    let back = document.getElementById('body');
    back.style.backgroundColor = 'black';
    let equal = document.getElementById('equal');
    equal.style.backgroundColor="white";
});
white.addEventListener('click', () => {
    let back = document.getElementById('body');
    back.style.backgroundColor = 'white';
});
let b = Array.from(document.getElementsByClassName('buttons'));

b.map(b => {
    b.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'DARK':
                dis.value = "";
                break;
            case 'WHITE':
                dis.value = "";
                break;
            case '=':
                try {
                    dis.value = eval(dis.value);
                } catch (x) {
                    dis.value = "SyntaxError!";
                }
                break;
            case 'AC':
                dis.value = "";
                break;
            case 'C':
                dis.value = dis.value.slice(0, -1);
                break;
            default:
                dis.value += e.target.innerText;
        }
    })
})