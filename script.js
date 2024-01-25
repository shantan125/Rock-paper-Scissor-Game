let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscore = 0;
let compscore = 0;
let userscorepara = document.querySelector("#you-score");
let compscorepara = document.querySelector("#comp-score");
let resetbtn = document.querySelector("#reset");

const compturn = () => {
    const options = ["rock", "paper", "scissor"];
    const randchoice = Math.floor(Math.random() * 3);
    return options[randchoice];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let yourturn = choice.getAttribute("id");
        let computerturn = compturn();

        if (yourturn === computerturn) {
            msg.innerText = "Draw";
        } else if (
            (yourturn === 'rock' && computerturn === 'scissor') ||
            (yourturn === 'paper' && computerturn === 'rock') ||
            (yourturn === 'scissor' && computerturn === 'paper')
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
    // Reset scores
    userscore = 0;
    compscore = 0;

    // Update score display
    userscorepara.textContent = userscore;
    compscorepara.textContent = compscore;

    msg.innerText = "Play your move";
});
