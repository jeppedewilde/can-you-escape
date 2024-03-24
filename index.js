const cursor = document.querySelector(".cursor");

const tijdDisplay = document.querySelector("#seconds");
let secondsPassed = 10;
let timer = setInterval(countSeconds, 1000);

const game_over = document.querySelector("game-over");

const door = document.querySelector("#door");
const modalDoor = document.querySelector("#modalDoor");
const closeDoor = document.querySelector("#closeDoor");
let feedbackDoor = document.querySelector("#feedbackDoor");
const openDoor = document.querySelector("#openDoor");

const lock1 = document.querySelector("#lock1");
const modalLock1 = document.querySelector("#modalLock1");
const closeLock1 = document.querySelector("#closeLock1");
const enterPassword = document.querySelector("#enterPassword");
let feedbackPassword = document.querySelector("#feedbackPassword");
let inputPassword;
const correctPassword = "minutes";

const lock2 = document.querySelector("#lock2");
const modalLock2 = document.querySelector("#modalLock2");
const closeLock2 = document.querySelector("#closeLock2");
const enterCode = document.querySelector("#enterCode");
let feedbackCode = document.querySelector("#feedbackCode");
let inputCode;
const randomCodeLijst = ['1234', '2334', '4567', '6789'];
const randomCodeIndex = Math.floor(Math.random() * 4);
const gekozenRandomCode = randomCodeLijst[randomCodeIndex];
const correctCode = gekozenRandomCode;
let showRandomCode = document.querySelector("#showRandomCode");

const books = document.querySelector("#books");
const modalBooks = document.querySelector("#modalBooks");
const closeBooks = document.querySelector("#closeBooks");

const paper = document.querySelector("#paper");
const modalPaper = document.querySelector("#modalPaper");
const closePaper = document.querySelector("#closePaper");

const key = document.querySelector("#key");
const modalKey = document.querySelector("#modalKey");
const closeKey = document.querySelector("#closeKey");
let keyClicked = false;

let lamp = document.querySelector("#lamp");
lamp.src = "images/lamp-on.svg";
let lampAan = false

const doorOpeningMusic = new Audio('audio/deuropen_music1.mp3');
const gameOverMusic = new Audio('audio/gameover_music1.mp3');
const youWonMusic = new Audio('audio/youwon_music1.mp3');
const correctAnswerMusic = new Audio('audio/correctanswer_music1.mp3');
const wrongAnswerMusic = new Audio('audio/wronganswer_music1.mp3');
const keyFoundMusic = new Audio('audio/keyfound_music1.mp3');
const lightSwitchMusic = new Audio('audio/lightswitch_music1.mp3');
const doorIsLockedMusic = new Audio('audio/doorislocked_music1.mp3');
const paperRustlingMusic = new Audio('audio/paperrustling_music1.mp3')

let soundIcon = document.querySelector("#soundIcon");

function soundButton(){
    console.log("geluid doet het opeens niet meer???")
    if (startScreenMusic.paused){
        startScreenMusic.volume = 0.2;
        startScreenMusic.play();
        soundIcon.src = "images/sound-ff.svg";
    } else {
        startScreenMusic.pause();
        soundIcon.src = "images/sound-on.svg";
    }
}

soundIcon.addEventListener('click', soundButton);

function lampLight(){
    if (lampAan){
        lamp.src = "images/lamp-off.svg";
        lampAan = false;
        lightSwitchMusic.play();
    } else if (!lampAan){
        lamp.src = "images/lamp-on.svg";
        lampAan = true
        lightSwitchMusic.play();
    }
}

lamp.addEventListener('click', lampLight);

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})

window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})

// bron achtergrond geluid: https://forum.freecodecamp.org/t/how-to-play-mp3-in-the-background-music-automatically/308554
window.addEventListener("DOMContentLoaded", event => {
    const backgroundMusic = document.querySelector("#backgroundMusic");
    backgroundMusic.volume = 0.6;
    backgroundMusic.play();
})

door.addEventListener('click', () => {
    modalDoor.classList.add('show');
    if (inputCode == correctCode && inputPassword == correctPassword && keyClicked){
        feedbackDoor.textContent = "You got all the locks open!";
        openDoor.classList.add('show');
    } else if (inputCode == correctCode && inputPassword == correctPassword){
        feedbackDoor.textContent = "The electric locks are opened, but the key lock is still locked..."
        doorIsLockedMusic.play();
    } else if (inputCode == correctCode && keyClicked){
        feedbackDoor.textContent = "You got the bottom lock and the key lock open, only the top lock to go!"
        doorIsLockedMusic.play();
    } else if (inputPassword == correctPassword && keyClicked){
        feedbackDoor.textContent = "You got the top lock and the key lock open, only the bottom lock to go!"
        doorIsLockedMusic.play();
    } else if (inputCode == correctCode || inputPassword == correctPassword || keyClicked){
        feedbackDoor.textContent = "You only got one lock open, keep searching!"
        doorIsLockedMusic.play();
    } else{
        feedbackDoor.textContent = "You didn't open all the locks yet...";
        doorIsLockedMusic.play();
    }
})

closeDoor.addEventListener('click', () => {
    modalDoor.classList.remove('show');
})

openDoor.addEventListener('click', () => {
    doorOpeningMusic.play();
    let timeout;
    timeout = setTimeout(youWon, 2000)
})

function youWon(){
    location.replace('winner.html');
}

lock1.addEventListener('click', () => {
    modalLock1.classList.add('show');
})

closeLock1.addEventListener('click', () => {
    modalLock1.classList.remove('show');
})

enterPassword.addEventListener('click', () => {
    inputPassword = passwordCheck.value;
    if(inputPassword == correctPassword){
        feedbackPassword.textContent = "Yes, correct password!"
        correctAnswerMusic.play();
    } else{
        feedbackPassword.textContent = "Wrong answer... Hint: There are no capitals in the password!"
        wrongAnswerMusic.play();
    }
})

lock2.addEventListener('click', () => {
    modalLock2.classList.add('show');
})

closeLock2.addEventListener('click', () => {
    modalLock2.classList.remove('show');
})

enterCode.addEventListener('click', () => {
    inputCode = codeCheck.value;
    if(inputCode == correctCode){
        feedbackCode.textContent = "Yes, correct code!"
        correctAnswerMusic.play();
    } else{
        feedbackCode.textContent = "Wrong code..."
        wrongAnswerMusic.play();
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
    showRandomCode.textContent = gekozenRandomCode;
    paperRustlingMusic.play();
})

closePaper.addEventListener('click', () => {
    modalPaper.classList.remove('show');
})


key.addEventListener('click', () => {
    modalKey.classList.add('show');
    keyClicked = true;
    keyFoundMusic.play();
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
        gameOver();
    }
}

function stopCountingTime(){
    clearInterval(timer);
}

function gameOver(){
    console.log("game over functie werkt niet")
    location.replace("gameover.html");
    backgroundMusic.stop();
    gameOverMusic.play();
}

function on() {
    document.getElementById("overlay").style.display = "block";
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
}