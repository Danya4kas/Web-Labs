// ©Danya4kas game

let balance = 100;
let maxAttempts = 3;

while (confirm("Try your luck")) {
    alert("Your balance: " + balance);
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    let attempts = 0;
    if (balance - 20 < 0) {
        alert("You don't have enough money to play(")
        break;
    }
    balance -= 20;
    while (attempts < maxAttempts) {
        let playerGuess = prompt("Guess number from 1 to 5:");
        attempts++;

        if (playerGuess == randomNumber) {
            if (attempts === 1) {
                balance += 40;
                alert("You win +40$! Balance: " + balance);
            } else if (attempts === 2) {
                balance += 20;
                alert("You win +20$! Balance: " + balance);
            } else if (attempts === 3) {
                balance += 10;
                alert("You win +10$! Balance: " + balance);
            }
            break;
        } else {
            alert("You are wrong( Your balance: " + balance);
            if (attempts === maxAttempts) {
                alert("You have used your all attempts. Balance: " + balance);
            }
        }
    }
}








































// ©Danya4kas game 




































