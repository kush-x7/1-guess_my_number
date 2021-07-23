'use strict';

let secretNum;
const inputValue = document.querySelector('.guess');

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

const labelSecretNum = document.querySelector('.label-secretnumber');
const labelMsg = document.querySelector('.label-message');
const labelScore = document.querySelector('.score');


let setScore = Number(labelScore.textContent);
const originalScore = setScore;

function display()
{
    labelSecretNum.textContent ="?";
    inputValue.textContent = " ";
    btnCheck.style.display = "initial";
    labelMsg.textContent = "Start guessing...";

    secretNum = Math.floor((Math.random()*20) +1);
    labelScore.textContent = originalScore;
}

display()


btnCheck.addEventListener('click', () => {

    const numToBeChecked = Number(inputValue.value);

    //In case user did not entered the value and clicked on check then we will show msg.
    if(!numToBeChecked)
    {
        labelMsg.textContent = 'No number!';
    }
    else if(numToBeChecked === secretNum)
    {
        labelMsg.textContent = "Correct Number!";
        labelSecretNum.textContent = secretNum;
        btnCheck.style.display = "none";
    }
    else if(numToBeChecked > secretNum)
    {
        labelMsg.textContent = "Too high!";
    }
    else if(numToBeChecked < secretNum)
    {
        labelMsg.textContent = "Too low!";
    }

    setScore--;
    labelScore.textContent = setScore;

    if(setScore === 0)
    {
        btnCheck.style.display = "none";
    }
});

btnAgain.addEventListener('click', () =>{

    display()
    setScore = originalScore;
});

