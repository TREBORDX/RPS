function computerChoice() {

    randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum)

    if (randomNum == 0) {
        return "rock"
    } else if (randomNum == 1) {
        return "paper"
    }else {
        return "scissors"
    };
};

function playerChoice() {
    choice = prompt("Please Choose Rock, Paper Or Scissors")

    result = choice.toLowerCase();

    return result;
}

const userInput = playerChoice();

const machineInput = computerChoice();

console.log(machineInput)

function playGame (playerInput, computerInput) {

    if (playerInput == computerInput) {
        return `Game Tied`
    
    }else if (playerInput == "rock" && computerInput == "scissors") {
        return `Player chose ${playerInput}, Computer chose ${computerInput} \nPlayer Wins!`
    
    }else if (playerInput == "paper" && computerInput == "rock"){
        return `Player chose ${playerInput}, Computer chose ${computerInput} \nPlayer Wins!`
    
    }else if (playerInput == "scissors" && computerInput == "paper"){
        return `Player chose ${playerInput}, Computer chose ${computerInput} \nPlayer Wins!`
    
    }else if (playerInput == "scissors" && computerInput == "rock"){
        return `Player chose ${playerInput}, Computer chose ${computerInput} \nComputer Wins!`
    
    }else if (playerInput == "rock" && computerInput == "paper"){
        return `Player chose ${playerInput}, Computer chose ${computerInput} \nComputer Wins!`
    
    }else {
        return "Computer Wins"
    }
}

const game = playGame(userInput, machineInput)

console.log(game)