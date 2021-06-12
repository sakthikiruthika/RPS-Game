const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissor=document.querySelector("#scissor");
const mainDiv=document.querySelector(".options");
const resetDiv=document.querySelector(".reset");

const choices=['rock','paper','scissor'];

function game(options){
    const userchoice=options.id;
    const botchoice=botselection();
    const gamescore=score(userchoice,botchoice);
    const finalmessage=gamemessage(gamescore);
    const removeoptions=removeimage();
    const frontendfunction=frontend(userchoice,botchoice,finalmessage);
    
}

function botselection(){
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

const scoredatabase={
    'rock':{'rock':0.5,'paper':0,'scissor':1},
    'paper':{'rock':1,'paper':0.5,'scissor':0},
    'scissor':{'rock':0,'paper':1,'scissor':0.5}
}

function score(userchoice,botchoice)
{
    return scoredatabase[userchoice][botchoice];
}

function gamemessage(gamescore){
    let result;
    switch(gamescore)
    {
        case 1:
            result={message:"You Won!",color:"green"};
            break;
            case 0:
            result={message:"You Lose!",color:"red"};
            break;    
            case 0.5:
            result={message:"You Tied",color:"yellow"};
            break;
    }
    return result;
}

const imagedatabase={
    'rock':rock.src,
    'paper':paper.src,
    'scissor':scissor.src

}

function removeimage(){
    rock.remove();
    paper.remove();
    scissor.remove();

}


function frontend(userchoice,botchoice,finalmessage)
{
    mainDiv.innerHTML=`<img class="final" id="userchoice" src="${imagedatabase[userchoice]}" alt="${userchoice}" width="100px" height="100px" /><h2 
    class="final" style="color:${finalmessage['color']}">${finalmessage['message']}</h2>
    <img class="final" id="botchoice" src="${imagedatabase[botchoice]}" alt="${botchoice}" width="100px" height="100px"/>`;
    resetDiv.innerHTML=`<button onclick="restart()">Reset</button>`;
}

function restart(){
    location.reload();
}
