const dices = document.getElementsByClassName('dice');
const p1Dice = document.getElementById('p1-dice');
const redsMoveToken = document.getElementById('redPlayerToken');
const bluesMoveToken = document.getElementById('bluePlayerToken');
const greensMoveToken = document.getElementById('greenPlayerToken');
const yellowsMoveToken = document.getElementById('yellowPlayerToken');
const home = document.getElementById('home');
const diceValue = document.getElementsByClassName('roll-value');
let   icons = document.querySelectorAll(`.player-container img`);
let Ndice=Array.from(dices);
[Ndice[1], Ndice[2]] = [Ndice[2], Ndice[1]];
[Ndice[2], Ndice[3]] = [Ndice[3], Ndice[2]];
console.log(Ndice);



//to switch between players 
function switchPlayer(playersMove){

    return new Promise((resolve) => {
        console.log('switch player called');
        icons.forEach(e => {
            if(e.classList.contains('floating')){
                e.classList.remove('floating');
            } 
            
        });
        switch(playersMove){
            case 1:
              
                redsMoveToken.classList.add('floating');
                Ndice[playersMove-1].classList.add('rolling');
                resolve();
            break;
            case 2:
             
                greensMoveToken.classList.add('floating');
                resolve();
            break;
            case 3:
              
                yellowsMoveToken.classList.add('floating');
                resolve();
            break;
            case 4:
               
                bluesMoveToken.classList.add('floating');
                resolve();
                
            break;
            
    
        }
    })

   
}

function switchingPlayer(){
    if(playersMove===4)
    {  
        playersMove=1;
    }else{
        playersMove++;
    }
  
   
    return new Promise((resolve) => {

        switchPlayer(playersMove).then(()=>{

            roll();
           
        });
        
       
        console.log(playersMove);
    })
   
}

function roll(){

    return new Promise((resolve) => {
        console.log(`dice rolled`);
        Ndice[playersMove-1].addEventListener('click', function() {
            console.log(playersMove,' rolling ');
            console.log(Ndice[playersMove-1].id);
            //rolling animation on click on dice
            Ndice[playersMove-1].classList.add('rolling');

            //to remove dice value 
            for (let j = 1; j < 7; j++) {
                if(Ndice[playersMove-1].querySelector(`#D${j}`).classList.contains('visible-dice')){
                       Ndice[playersMove-1].querySelector(`#D${j}`).classList.remove('visible-dice')
               }

         }
         //to remove rolling animation print dice value
         setTimeout(() => {
            
            //random no from 1 to 6 for dice value 
            const randomInt = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            console.log("random int = ",randomInt);

            //to print dice value
            switch(randomInt){
                case 1:
                   
                  Ndice[playersMove-1].querySelector('#D1').classList.add('visible-dice');
                break;
                case 2:
                   Ndice[playersMove-1].querySelector('#D2').classList.add('visible-dice');
                break;
                case 3:
                   Ndice[playersMove-1].querySelector('#D3').classList.add('visible-dice');
                break;
                case 4:
                   Ndice[playersMove-1].querySelector('#D4').classList.add('visible-dice');
                
                
                break;
                case 5:
                   Ndice[playersMove-1].querySelector('#D5').classList.add('visible-dice');
                break;
                case 6:
                   Ndice[playersMove-1].querySelector('#D6').classList.add('visible-dice');
                break;
            }
         
            //removing rolling animation 
            Ndice[playersMove-1].classList.remove('rolling');
        }, 500);


            
        })       
    })
}
function rolling(){

    return new Promise((resolve) => {
  
          // to roll the dice on click 
    for (let i = 0; i < dices.length; i++) {
    dices[i].addEventListener('click', function() {
     dices[i].classList.add('rolling');

        for (let j = 1; j < 7; j++) {
               if(dices[i].querySelector(`#D${j}`).classList.contains('visible-dice')){
               dices[i].querySelector(`#D${j}`).classList.remove('visible-dice')
              }
        }
     
     setTimeout(() => {
         const randomInt = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
         console.log("random int = ",randomInt);
         switch(randomInt){
             case 1:
                
                dices[i].querySelector('#D1').classList.add('visible-dice');
             break;
             case 2:
                dices[i].querySelector('#D2').classList.add('visible-dice');
             break;
             case 3:
                dices[i].querySelector('#D3').classList.add('visible-dice');
             break;
             case 4:
                dices[i].querySelector('#D4').classList.add('visible-dice');
             break;
             case 5:
                dices[i].querySelector('#D5').classList.add('visible-dice');
             break;
             case 6:
                dices[i].querySelector('#D6').classList.add('visible-dice');
             break;
         }
         
         dices[i].classList.remove('rolling');
     }, 500);
   });
     
    
   }


   playersMove++;
    })

   

}

/* function stopOtherDice(){
          //to stop non player dice
    for(let i=0;i<dices.length;i++)
    {
       if(dices[i].classList.contains('rolling')) 
       {
            dices[i].classList.remove('rolling');
       }
    }
} */

let playersMove=0;
//Whole game loop
home.addEventListener('click',()=>{

    switchingPlayer();
   
   console.log(`update player ${playersMove}`);

  
   
 
});

