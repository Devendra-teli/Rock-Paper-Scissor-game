let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scisser = document.getElementById('scisser');
let userImg = document.getElementById('user-img');
let compImg = document.getElementById('comp-img');
let result = document.getElementById('result');
let userScore = document.getElementById('user-score');
let compScore = document.getElementById('comp-score');

let u = 0;
let c = 0;

function score() {
    userScore.innerText = u;
    compScore.innerText = c;
}
score();

rock.addEventListener('click', function () {
    userImg.src = "images/001-fist.png";
    let a = Math.floor((Math.random()) * 3);

    if (a == 0) {
        computer = compImg.src = "images/001-fist.png";
        result.innerText = 'Draw';
    }
    if (a == 1) {
        compImg.src = "images/003-hand-paper.png";
        result.innerText = "Computer Won";
        c++;
        score();
    }
    if (a == 2) {
        compImg.src = "images/002-scissors.png";
        result.innerText = "User Won"
        u++;
        score();
    }
})

paper.addEventListener('click', function () {
    userImg.src = "images/003-hand-paper.png";
    let a = Math.floor((Math.random()) * 3);

    if (a == 0) {
        computer = compImg.src = "images/001-fist.png";
        result.innerText = 'User Won';
        u++;
        score();
    }
    if (a == 1) {
        compImg.src = "images/003-hand-paper.png";
        result.innerText = "Draw";
    }
    if (a == 2) {
        compImg.src = "images/002-scissors.png";
        result.innerText = "Computer Won"
        c++;
        score();
    }
})
scisser.addEventListener('click', function () {
    userImg.src = "images/002-scissors.png";
    let a = Math.floor((Math.random()) * 3);

    if (a == 0) {
        computer = compImg.src = "images/001-fist.png";
        result.innerText = 'Computer Won';
        c++;
        score();
    }
    if (a == 1) {
        compImg.src = "images/003-hand-paper.png";
        result.innerText = "User Won";
        u++;
        score();
    }
    if (a == 2) {
        compImg.src = "images/002-scissors.png";
        result.innerText = "Draw"
    }
})

