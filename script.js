const xpath = './img/x.png';
const opath = './img/o.png';
//------------------------------------------------------

function Choice(){
    let startbtn = document.getElementById("start-game");
    startbtn.style.display = "none";
    let x = document.createElement("div");
    let o = document.createElement("div");
    let choice_heading = document.createElement("h2");
    choice_heading.innerText = "Make A Choice!"
    x.innerHTML = `<button onclick="StartGame()"><img id='x-img' src=${xpath}></button>`;
    o.innerHTML = `<button onclick="StartGame()"><img id='o-img' src=${opath}></button>`;
    let main = document.getElementById("main");

    x.setAttribute("id","x-choice");
    o.setAttribute("id","o-choice");
    choice_heading.setAttribute("id","choice-heading");
    main.appendChild(choice_heading);
    main.appendChild(x);
    main.appendChild(o);
    // console.log(main);
}
//-------------------------------------------------------
function StartGame(){
    
}