const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
let userscore = 0;
let compscore = 0;
const userscorepara = document.getElementById("you-score");
const compscorepara = document.getElementById("comp-score");
const resetbtn = document.getElementById("reset");

const compturn = () => {
    const options = ["rock", "paper", "scissors"];
    const randchoice = Math.floor(Math.random() * 3);
    return options[randchoice];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let yourturn = choice.id;
        let computerturn = compturn();

        if (yourturn === computerturn) {
            msg.innerText = "Draw";
        } else if (
            (yourturn === "rock" && computerturn === "scissors") ||
            (yourturn === "paper" && computerturn === "rock") ||
            (yourturn === "scissors" && computerturn === "paper")
        ) {
            msg.innerText = "You won the match";
            userscore++;
        } else {
            msg.innerText = "Computer won the match";
            compscore++;
        }

        // Update score display
        userscorepara.textContent = userscore;
        compscorepara.textContent = compscore;
    });
});

resetbtn.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    userscorepara.textContent = "";
    compscorepara.textContent = "";
    msg.innerText = "Play your move";
});
