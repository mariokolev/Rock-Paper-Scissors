
const list = document.querySelector('#r-p-s');
let human_choice;
let computer_choice;
const choices = ['rock', 'paper', 'scissors'];
const message = document.querySelector('.message');
const human_score = document.querySelector('#score li:first-child span');
const computer_score = document.querySelector('#score li:last-child span');
const reset = document.querySelector('.btn-reset');

    //Generate computer's choice
function compChoice(){
    return computer_choice = Math.round(Math.random() *(2 -  0)  + 0);
}

function highlightWinner(element){

    let target = document.querySelector(element);
    target.classList.add('won');
    setTimeout(function(){
    target.classList.remove('won'); }, 500);

}

    //variables for scores
let hs = 0;
let cs = 0;

    //Display result and score

function result(human, computer){
    
    switch(human){
        case 0:{ if(computer === 1){
                cs++;
                computer_score.innerHTML = cs;
                message.innerHTML = 'Defeat. Paper beats rock!';
                highlightWinner('.fa-robot');
               
                }else if(computer === 0){
                highlightWinner('.fa-user-alt');
                highlightWinner('.fa-robot');
                
                    message.innerHTML = 'Draw!';
                }else if(computer === 2){
                    hs++;
                    message.innerHTML = 'You won. Rock beats scissors!';
                    human_score.innerHTML = hs;
                highlightWinner('.fa-user-alt');


                }
            }
        break;

        case 1:{
                if(computer === 1){
                    message.innerHTML = 'Draw!';
                    highlightWinner('.fa-user-alt');
                    highlightWinner('.fa-robot');

                    }else if(computer === 0){
                        hs++;
                        human_score.innerHTML = hs;
                        message.innerHTML = 'You won. Paper beats rock!';
                        highlightWinner('.fa-user-alt');

                    }else if(computer ===2){
                        cs++;
                        computer_score.innerHTML = cs;
                        message.innerHTML = 'Defeat. Scissors beats paper!';
                        highlightWinner('.fa-robot');

                    }
                }
        break;

        case 2:{
                if(computer === 2){
                    message.innerHTML = 'Draw!';
                    highlightWinner('.fa-robot');
                    highlightWinner('.fa-user-alt');


                    }else if(computer === 0){
                        cs++;
                        computer_score.innerHTML = cs;
                        message.innerHTML = 'Defeat. Rock beats scissors!';
                    highlightWinner('.fa-robot');

                    }else if(computer === 1 ){
                        hs++;
                        human_score.innerHTML = hs;
                        message.innerHTML = 'You won. Scissors beats paper!';
                        highlightWinner('.fa-user-alt');

                    }
        }

        break;
    }
}

reset.addEventListener('click', function(e){
    hs= 0;
    cs = 0;
    human_score.innerHTML = hs;
    computer_score.innerHTML = cs;
    message.innerHTML = 'Make your move!';
});

list.addEventListener('click', function(e){

    if(e.target.classList.contains('fa-hand-rock')){
        human_choice = 0;
        computer_choice = compChoice();
      result(human_choice, computer_choice);

    }else if(e.target.classList.contains('fa-hand-paper')){
        human_choice = 1;
        computer_choice = compChoice();
        result(human_choice, computer_choice);
    }else if(e.target.classList.contains('fa-hand-scissors')){
        human_choice = 2;
        computer_choice = compChoice();
        //console.log("Computer's choice is " + choices[computer_choice] + ' index is ' + computer_choice + ' your choice is index ' + human_choice);
        result(human_choice, computer_choice);

    }

});