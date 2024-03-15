const tijdDisplay = document.querySelector("#seconds");
let secondsPassed = 10;
let timer = setInterval(countSeconds, 1000);
const timerStarten = document.querySelector("#timer-starten");

const game_over = document.querySelector("game-over");

const lock1 = document.querySelector("#lock1");
const modalLock1 = document.querySelector("#modalLock1");
const closeLock1 = document.querySelector("#closeLock1");
const tryPassword = document.querySelector("#enterPassword");
let feedbackPassword = document.querySelector("#feedbackPassword");
let inputPassword = document.getElementById("#passwordCheck");

const lock2 = document.querySelector("#lock2");
const modalLock2 = document.querySelector("#modalLock2");
const closeLock2 = document.querySelector("#closeLock2");
const tryCode = document.querySelector("#enterCode");
let feedbackCode = document.querySelector("#feedbackCode");
let inputCode = document.getElementById("#codeCheck");

const books = document.querySelector("#books");
const modalBooks = document.querySelector("#modalBooks");
const closeBooks = document.querySelector("#closeBooks");

const paper = document.querySelector("#paper");
const modalPaper = document.querySelector("#modalPaper")
const closePaper = document.querySelector("#closePaper");

const key = document.querySelector("#key");
const modalKey = document.querySelector("#modalKey")
const closeKey = document.querySelector("#closeKey");

lock1.addEventListener('click', () => {
    console.log("open modal");
    modalLock1.classList.add('show');
})

closeLock1.addEventListener('click', () => {
    console.log("close modal");
    modalLock1.classList.remove('show');
})

tryPassword.addEventListener('click', () => {
    const wachtwoord = passwordCheck.value;
    if(wachtwoord == "123"){
        feedbackPassword.textContent = "Yes, correct password!"
    } else{
        feedbackPassword.textContent = "Wrong answer..."
    }
})

lock2.addEventListener('click', () => {
    console.log("open modal");
    modalLock2.classList.add('show');
})

closeLock2.addEventListener('click', () => {
    console.log("close modal");
    modalLock2.classList.remove('show');
})

tryCode.addEventListener('click', () => {
    const code = codeCheck.value;
    if(code == "321"){
        feedbackCode.textContent = "Yes, correct code!"
    } else{
        feedbackCode.textContent = "Wrong code..."
    }
})

books.addEventListener('click', () => {
    modalBooks.classList.add('show');
})

closeBooks.addEventListener('click', () => {
    modalBooks.classList.remove('show');
})

paper.addEventListener('click', () => {
    modalPaper.classList.add('show');
})

closePaper.addEventListener('click', () => {
    modalPaper.classList.remove('show');
})

key.addEventListener('click', () => {
    modalKey.classList.add('show');
})

closeKey.addEventListener('click', () => {
    modalKey.classList.remove('show');
})

function countSeconds(){
    tijdDisplay.textContent = secondsPassed;
    secondsPassed -= 1;
    if (secondsPassed == 0){
        tijdDisplay.textContent = "Helaas, de tijd is om.";
        stopCountingTime();
        // gameOver();
    }
}

function stopCountingTime(){
    clearInterval(timer);
}

timerStarten.addEventListener('click', countSeconds);

function gameOver(){
    location.replace("gameover.html")
}
