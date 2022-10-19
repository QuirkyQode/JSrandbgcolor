const btn = document.getElementById("btn1");

const randcolor = () => {
    // Generate hexa num 
    let hexa = "0123456789ABCDEF";
    let hexpound = "#";
    for (let i = 0; i<6; i++) {
        hexpound = hexpound + hexa[Math.floor(Math.random() * 16)];
    }
    return hexpound;
}
function changecolor () {
    document.body.style.backgroundColor = randcolor();
}
console.log(randcolor());
btn.addEventListener("click", changecolor);
