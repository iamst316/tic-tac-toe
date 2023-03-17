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
    x.innerHTML = `<button onclick="ChooseX()"><img id='x-img' src=${xpath}></button>`;
    o.innerHTML = `<button onclick="ChooseO()"><img id='o-img' src=${opath}></button>`;
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
let mychoice,compchoice;
function ChooseX(){
    mychoice = 'x';
    compchoice = 'o';
    StartGame();
}
//-------------------------------------------------------

function ChooseO(){
    mychoice = 'o';
    compchoice = 'x';
    StartGame();
}
//-------------------------------------------------------
let isMyTurn;
function StartGame(){
    let game = document.getElementById("game");
    game.style.display = "inline";
    let x = document.getElementById('x-choice');
    let o = document.getElementById('o-choice');
    let choice_heading = document.getElementById('choice-heading');
    x.style.display = "none";
    o.style.display = "none";
    choice_heading.style.display = "none";
    //------------you made a choice-------------------
    //------------now we decide who goes first---------
}
function choice(r,c){
    // alert(r+c);
    let cell = document.getElementById(`${r}${c}`);
    let img = document.createElement('img');

    img.setAttribute('src',xpath);
    cell.appendChild(img);
    console.log(img);
}
/*
let generate = Math.floor(Math.random()*2);
if (generate==1){
    isMyTurn= true;
}
else{
    isMyTurn = false;
}
let displayWhoseTurn = document.createElement('h2');
displayWhoseTurn.setAttribute("id",'whos-turn');

let isGameEnded = false;
let arr = [["","",""],["","",""],["","",""]];
let winner;
game.appendChild(displayWhoseTurn);
while (!isGameEnded){
    if(!isGameEnded){
        for(let i=0;i<3;i++){
            if (arr[i]==[mychoice,mychoice,mychoice]){
                winner = "Player Wins!";
                break;
            }
            if (arr[i]==[compchoice,compchoice,compchoice]){
                winner = "Computer Wins!";
                break;
            }
        }
        for(let j=0;j<3;j++){
            let newArr = [arr[0][j],arr[1][j],arr[2][j]];
            if (newArr[i]==[mychoice,mychoice,mychoice]){
                winner = "Player Wins!";
                break;
            }
            if (newArr[i]==[compchoice,compchoice,compchoice]){
                winner = "Computer Wins!";
                break;
            }
        }
        const ldiaArr = [];
        const rdiaArr = [];
        for (let i=0;i<3;i++){
            for(let j = 0;j<3;j++){
               if (i==j)  ldiaArr.push(arr[i][j]);
               if(i+j==2) rdiaArr.push(arr[i][j]);
            }
        }
        if (ldiaArr==[mychoice,mychoice,mychoice] || rdiaArr==[mychoice,mychoice,mychoice]){
            winner = "Player Wins!";
            break;
        }
        if (ldiaArr==[compchoice,compchoice,compchoice] || rdiaArr==[compchoice,compchoice,compchoice]){
            winner = "Computer Wins!";
            break;
        }
    }
    else{
        if (isMyTurn){
            displayWhoseTurn.innerText = "Your Turn";
            
            
            isMyTurn = !isMyTurn;
        }
        else{
            displayWhoseTurn.innerText = "Computer's Turn";
            
            
            isMyTurn = !isMyTurn;
        }
    }
}
*/