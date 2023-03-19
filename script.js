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
    let cell = document.getElementById(`${r}${c}`);

    if(cell.innerHTML!=`<img src="./img/${compchoice}.png" id="game-img">`&&cell.innerHTML!=`<img src="./img/${mychoice}.png" id="game-img">`){
        let img = document.createElement('img');
        img.setAttribute('src',`./img/${mychoice}.png`);
        img.setAttribute('id','game-img');
        cell.appendChild(img);
        arr[r][c] = mychoice;
        
        console.log(arr);
        isGameEnded(arr);
        
        
    }
    CompPlays(arr,compchoice);
    isGameEnded(arr);
    
}
function CompPlays(arr,compchoice){
    while (true){
        let r = Math.floor(Math.random()*3);
        let c = Math.floor(Math.random()*3);
        let cell = document.getElementById(`${r}${c}`);

        if(cell.innerHTML!=`<img src="./img/${compchoice}.png" id="game-img">`&&cell.innerHTML!=`<img src="./img/${mychoice}.png" id="game-img">`){
            let img = document.createElement('img');
            img.setAttribute('src',`./img/${compchoice}.png`);
            img.setAttribute('id','game-img');
            cell.appendChild(img);
            arr[r][c]= compchoice;
            break;
        
        }

    }
}




let arr = [["","",""],["","",""],["","",""]];



function isGameEnded(arr){
    for(let i=0;i<3;i++){
        if (arr[i]==[mychoice,mychoice,mychoice]){
            alert("Player Wins!");
            
        }
        if (arr[i]==[compchoice,compchoice,compchoice]){
            alert("Computer Wins!");
            
        }
    }
    for(let j=0;j<3;j++){
        let newArr = [arr[0][j],arr[1][j],arr[2][j]];
        if (newArr==[mychoice,mychoice,mychoice]){
            alert("Player Wins!");
            
        }
        if (newArr==[compchoice,compchoice,compchoice]){
            alert("Computer Wins!");
            
        }
    }
    let ldiaArr = [];
    let rdiaArr = [];
    for (let i=0;i<3;i++){
        for(let j = 0;j<3;j++){
           if (i==j)  ldiaArr.push(arr[i][j]);
           if(i+j==2) rdiaArr.push(arr[i][j]);
        }
    }
    if (ldiaArr==[mychoice,mychoice,mychoice] || rdiaArr==[mychoice,mychoice,mychoice]){
        alert("Player Wins!");
        return true;
    }
    if (ldiaArr==[compchoice,compchoice,compchoice] || rdiaArr==[compchoice,compchoice,compchoice]){
        alert("Computer Wins!");
        return true;
    }
    let isDraw = true;
    for (let i of arr){
        for(let j of i){
            if (j=="") isDraw = false;
        }
    }
    if(isDraw){
        alert("Draw!");
        return true;
    }
    return false;
}
