

                let winScore = 0;
                let loseScore = 0; 
                let tieScore = 0;

    const container = document.querySelector('#container')

    const scoreBoard = document.createElement('h2')

    scoreBoard.textContent = '0 : 0 : 0'

    container.insertBefore(scoreBoard, container.children[1]);

    const message = document.createElement('h2')

    container.appendChild(message)
 
    
    
    function game() {

       

        // for (let i = 0; i < 5; i++) {

                
            
            function computerPlay() {
                
                let randomNumber = (Math.random() * 10)

            if (randomNumber <= 3.33) { 
                return 'rock' 
            } 
            else if (randomNumber <= 6.66) {
                return 'paper'
            } 
            else if (randomNumber <= 10) {
                return 'scissors'
            }

            }


            
            let computerSelection;
            
            //console.log(computerSelection)

            let playerSelection;

           

            //const playerSelection = prompt('Please choose your weapon').toLowerCase();
            
            // const rock = document.querySelector(".rock")
            // const paper = document.querySelector(".paper")
            // const scissors = document.querySelector(".scissors")
            
            // let playerSelection;

            // rock.addEventListener('click', e => {
            //     playerSelection = e.target.className
                
            // })

            // paper.addEventListener('click', e => {
            //     playerSelection = e.target.className
            //     console.log(playerSelection)     
            // })

            // scissors.addEventListener('click', e => {
            //    playerSelection = e.target.className
                        
            // })


                    
            // console.log(playerSelection);
            

            window.addEventListener('click', function(e) {
                computerSelection = computerPlay();
                console.log(computerSelection)                
                const button = document.querySelector('button')
                playerSelection = e.target.className;
                
                playRound();
                score();
                results();
                
            });

            function playRound() {
                
                
                
                if (playerSelection === 'rock' && computerSelection === 'paper') {
                    return message.textContent = "You Lose! Paper swallows Rock";
                   
                }

                else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                    return message.textContent ="You Win! Rock crushes Scissors"
                }
                
                else if (playerSelection === 'rock' && computerSelection === 'rock') {
                    return message.textContent ="Tie!"
                }


                else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                    return message.textContent ="You Lose! Rock crushes Scissors";
                }

                else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                    return message.textContent ="You Win! Scissors slices Paper"
                }
                
                else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
                    return message.textContent ="Tie!"
                }
                

                else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                    return message.textContent ="You Lose! Scissors slices Paper";
                }

                else if (playerSelection === 'paper' && computerSelection === 'rock') {
                    return message.textContent ="You Win! Paper swallows Rock"
                }
                
                else if (playerSelection === 'paper' && computerSelection === 'paper') {
                    return message.textContent ="Tie!"
                }

                // else if (playerSelection !== 'scissors', 'paper', 'rock') { 
                //     return alert ("Spelt incorrectly?")}
         
                }
                
                
                //playRound();

                

                function score() {


if (playerSelection === 'rock' && computerSelection === 'paper') {
    loseScore++
    return scoreBoard.textContent = winScore + " : " + tieScore + " : " + loseScore                    
    
}

else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    winScore++ 
    return scoreBoard.textContent = winScore + " : " + tieScore + " : " + loseScore
}


else if (playerSelection === 'rock' && computerSelection === 'rock') {
    tieScore++                
    return scoreBoard.textContent = winScore + " : " + tieScore + " : " + loseScore
}

else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    loseScore++
    return scoreBoard.textContent = winScore + " : " + tieScore + " : " + loseScore
}

else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    winScore++
    return scoreBoard.textContent = winScore + " : " + tieScore + " : " + loseScore
}

else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    tieScore++                
    return scoreBoard.textContent = winScore + " : " + tieScore + " : " + loseScore
}

else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    loseScore++
    return scoreBoard.textContent = winScore + " : " + tieScore + " : " + loseScore
   
}

else if (playerSelection === 'paper' && computerSelection === 'rock') {
    winScore++
    return scoreBoard.textContent = winScore + " : " + tieScore + " : " + loseScore
}

else if (playerSelection === 'paper' && computerSelection === 'paper') {
    tieScore++                
    return scoreBoard.textContent = winScore + " : " + tieScore + " : " + loseScore
}
      
} 

//score();

            function results() {
                if (winScore + loseScore + tieScore === 5 && winScore > loseScore) {
                    return message.textContent = "Congratulations, you are a winner baby!"
                }

                else if (winScore + loseScore + tieScore === 5 && winScore < loseScore) {
                    return message.textContent = "Game Ova. Refresh to Reset game"
                }

                else if (winScore + loseScore + tieScore === 5 && winScore === loseScore)
                    return message.textContent = "Tie game? Really? Refresh to Reset game"
            }
            
            // results();
                
                }
                //}

                game();