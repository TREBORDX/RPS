function computerChoice() {

    randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum)

    if (randomNum == 0) {
        return "rock"
    } else if (randomNum == 1) {
        return "paper"
    } else {
        return "scissors"
    };
};

function playerChoice() {
    choice = prompt("Please Choose Rock, Paper Or Scissors")

    result = choice.toLowerCase();

    return result;
};

function playGame(playerInput, computerInput) {

    if (playerInput == computerInput) {
        return `Game Tied`

    } else if (playerInput == "rock" && computerInput == "scissors") {
        return `Player Wins!`

    } else if (playerInput == "paper" && computerInput == "rock") {
        return `Player Wins!`

    } else if (playerInput == "scissors" && computerInput == "paper") {
        return `Player Wins!`

    } else if (playerInput == "scissors" && computerInput == "rock") {
        return `Computer Wins!`

    } else if (playerInput == "rock" && computerInput == "paper") {
        return `Computer Wins!`

    } else {
        return "Computer Wins"
    }
};

//best of 5 below

let computerScore = 0;
let playerScore = 0;

while (computerScore < 3 && playerScore < 3) {
    console.log(playerScore)
    console.log(computerScore)

    let userInput = playerChoice();

    let machineInput = computerChoice();

    console.log(machineInput)

    game = playGame(userInput, machineInput)
    console.log(game)

    if (game == "Game Tied") {
        console.log("Game was Tied, Try again")
        userInput = playerChoice();
        machineInput = computerChoice();

        game = playGame(userInput, machineInput);
        console.log(game)

    } else {
        console.log(game)
    }

    if (game == "Computer Wins") {
        computerScore += 1;
    } else if (game = "Player Wins") {
        playerScore += 1;
    }
};

if (computerScore == 3) {
    console.log("Computer won best of 3")
} else {
    console.log("Player won best of 3")
    console.log(`Player score: ${playerScore}. Computer Score: ${computerScore}`)
};