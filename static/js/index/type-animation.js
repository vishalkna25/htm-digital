// List of sentences
let hbTiTx = [
    "Creative...",
    "Faster...",
    "Efficient..."
];

let LstCounter = 2;

let hbTi = document.querySelector("#hb-tis");

function Type(){
    if (LstCounter === -1)
        LstCounter = 2;

    let text = hbTiTx[LstCounter];
    hbTi.innerHTML = text;
    hbTi.setAttribute("data-text", text);
    LstCounter--;
}

_INTERVAL_VAL = setInterval(Type, 3000);
