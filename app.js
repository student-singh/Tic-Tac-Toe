let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset_btn");
let newGameBtn=document.querySelector("#new_btn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");



let turnO=true;
let count=0;//Player X,Player O
const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8]
    ,[0,3,6],[1,4,7],[2,5,8]
    ,[0,4,8],[2,4,6]
];
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        count++;
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");

};

    const checkWinner=()=>{
        for(let pattern of winPatterns){
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if(pos1Val!=""&& pos2Val!=""&& pos3Val!=""){
                if(pos1Val === pos2Val && pos2Val=== pos3Val){
                    console.log("winner",pos1Val);

                    showWinner(pos1Val);
                }
            }
            
            if(count===9){
                msg.innerText="It's a draw";
                msgContainer.classList.remove("hide");
            }

        }
            
    };
    newGameBtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click",resetGame);
       
    
