/* Charity Katz - E28 Week 7 Game - Spring 2021 */
const RockPaperScissors = {
    data() {
        return {
            playerName: "",
            gameOn: false,
            computerGuess: "placeholder",
            playerGuess: "placeholder",
            gameOutcome: null,
            shortOutcome: null,
			roundNumber: 0,
            rounds: [],
            playerScore: 0,
            computerScore: 0,
        }
    },

    methods: {
        gameStarted() {
            this.gameOn = true;
        },

        gamePlay(playerValue) {
            this.playerGuess = playerValue
            getComputerGuess = Math.floor(Math.random() * (3 - 1 + 1) + 1)

            if (getComputerGuess === 1) {
                this.computerGuess = "rock";
            } else if (getComputerGuess === 2) {
                this.computerGuess = "paper";
            } else {
                this.computerGuess = "scissors";
            }

            if ((this.playerGuess === "paper" && this.computerGuess === "rock") || (this.playerGuess === "scissors" && this.computerGuess === "paper") || (this.playerGuess === "rock" && this.computerGuess === "scissors")) {
                this.gameOutcome = "You win. I guess.";
                this.shortOutcome = "clobbered";
                this.playerScore += 1;
            } else if ((this.playerGuess === "scissors" && this.computerGuess === "rock") || (this.playerGuess === "rock" && this.computerGuess === "paper") || (this.playerGuess === "paper" && this.computerGuess === "scissors")) {
                this.gameOutcome = "I win, sucker!";
                this.shortOutcome = "failed";
                this.computerScore += 1;
            } else {
                this.gameOutcome = "Uggg! A tie!";
                this.shortOutcome = "tied";
            }
			
			this.roundNumber += 1;
			
		this.rounds.push ({
				player: this.playerName,
				outcome: this.shortOutcome,
				playerresult: this.playerGuess,
				computerresult: this.computerGuess,
				number: this.roundNumber,
				shortoutcome: this.shortOutcome,
			}); 
        },

        playAgain() {
            this.gameOutcome = null;
            this.playerGuess = "placeholder";
            this.computerGuess = "placeholder";
        },
		
		resetGame() {
			this.gameOn = false;
            this.gameOutcome = null;
            this.playerGuess = "placeholder";
            this.computerGuess = "placeholder";
			this.playerScore = 0;
			this.computerScore = 0;
			this.rounds = [];
			this.roundNumber = 0;
        },

    }
}

const RoundDetail = {
    name: "RoundDetail",
    props: {
		number: {
            type: Number,
			default: 0
        },
        player: {
            type: String
        },
        outcome: {
            type: String
        },
        playerresult: {
            type: String
        },
		 computerresult: {
            type: String
        },
		shortoutcome: {
			type: String
		},
    },
    data() {
        return {}
    },
    template: "#round-detail"
}

const app = Vue.createApp(RockPaperScissors).component("round-detail" , RoundDetail).mount("#app");