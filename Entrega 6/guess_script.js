const randomNumber = Math.floor(Math.random() * 100);

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const messageElement = document.getElementById('message');

    if (userGuess === randomNumber) {
        messageElement.innerHTML = "Parabéns! Você acertou.";
        messageElement.style.setProperty("background-color", "green");
    } else if (userGuess > randomNumber) {
        messageElement.innerHTML = "Tente um número menor.";
        messageElement.style.setProperty("background-color", "red");
    } else {
        messageElement.innerHTML = "Tente um número maior.";
        messageElement.style.setProperty("background-color", "red");
    }
}