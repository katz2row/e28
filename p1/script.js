/* Charity Katz - E28 Week 7 Game - Spring 2021 */

let RockPaperScissors = {
    data() {
        return {
            playerName: "",
			gameOn: false,
			computerGuess: "placeholder",
			playerGuess: "placeholder",
			gameOutcome: null,
			games: [],
			win: false,
			lose: false,
			draw: false,
			playerScore: 0,
			computerScore: 0,
        }
    },
	
	methods: {
        gameStarted() {
            this.gameOn = true;
        },
      
	  gamePlay(playerValue) {
		  let playerGuess = playerValue
			  let getComputerGuess = Math.floor(Math.random() * (3 - 1 + 1) + 1)
		  
		  if(getComputerGuess === 1) {
			  computerGuess = "rock";
		  } else if (getComputerGuess === 2) {
			  computerGuess = "paper";
		  } else {computerGuess = "scissors";}
		  
		 if ((playerGuess === "paper" && computerGuess === "rock") || (playerGuess === "scissors" && computerGuess === "paper") || (playerGuess === "rock" && computerGuess === "scissors")) {
            gameOutcome = "You win. I guess.";
        } else if ((playerGuess === "scissors" && computerGuess === "rock") || (playerGuess === "rock" && computerGuess === "paper") || (playerGuess === "paper" && computerGuess === "scissors")) {
            gameOutcome = "I win, sucker!";
        } else {
            gameOutcome = "Uggg! A tie!";
        }
		
		this.computerGuess.push
		this.playerGuess.push
			
			console.log("Computer Guess " + computerGuess);
			console.log("Player Guess " + playerGuess);
			console.log(gameOutcome);
	  },
	  
	 
	  
    }
}

const app = Vue.createApp(RockPaperScissors).mount("#app");


/*
      // Generate a random number between 1-3 to determine computer's selection and then set image source based on random number
    getButtons.addEventListener("click", function() {
        let genNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);

        if (genNum === 1) {
            computerResult.setAttribute("src", "images/rock-400.png");
        } else if (genNum === 2) {
            computerResult.setAttribute("src", "images/paper-400.png");
        } else {
            computerResult.setAttribute("src", "images/scissors-400.png");
        }
    }, false);

    // Set player image source depending on if player clicks rock, paper, or scissors
    rock.onclick = function() {
        playerResult.setAttribute("src", "images/rock-400.png");
    }

    paper.onclick = function() {
        playerResult.setAttribute("src", "images/paper-400.png");
    }

    scissors.onclick = function() {
        playerResult.setAttribute("src", "images/scissors-400.png");
    }

    // Compare image sources for player and computer and define the winner depending on the outcomes
    getButtons.addEventListener("click", function() {
        let playerSrc = document.getElementById("player_img").getAttribute("src");
        let computerSrc = document.getElementById("computer_img").getAttribute("src");

        if ((playerSrc === "images/paper-400.png" && computerSrc === "images/rock-400.png") || (playerSrc === "images/scissors-400.png" && computerSrc === "images/paper-400.png") || (playerSrc === "images/rock-400.png" && computerSrc === "images/scissors-400.png")) {
            document.getElementById("winner").innerHTML = "PLAYER";
        } else if ((playerSrc === "images/scissors-400.png" && computerSrc === "images/rock-400.png") || (playerSrc === "images/rock-400.png" && computerSrc === "images/paper-400.png") || (playerSrc === "images/paper-400.png" && computerSrc === "images/scissors-400.png")) {
            document.getElementById("winner").innerHTML = "COMPUTER";
        } else {
            document.getElementById("winner").innerHTML = "A TIE";
        }

    }, false);

}

*/