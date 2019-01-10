const showBtn = document.querySelector('.button__main');
const downloadBtn = document.querySelector('.button__main_display');

const blueBtn = document.querySelector('.button_blue');
const yellowBtn = document.querySelector('.button_yellow');
const redBtn = document.querySelector('.button_red');
const orangeBtn = document.querySelector('.button_orange');

const blueBox = document.querySelector('.blue_box');
const yellowBox = document.querySelector('.yellow_box');
const redBox = document.querySelector('.red_box');
const orangeBox = document.querySelector('.orange_box');

const password = document.querySelector('.password');



const passwords = [{
        word: "emerytura",
        type: "blue",
        desc: "świadczenie pieniężne wypłacane miesięcznie po osiągnięciu wieku emerytalnego i zaprzestaniu aktywności zawodowej"
    },
    {
        word: "jednorazowe odszkodowanie",
        type: "yellow",
        desc: "świadczenie wypłacone za stały lub długotrwały uszczerbek na zdrowiu"
    },
    {
        word: "renta wypadkowa",
        type: "yellow",
        desc: "świadczenie wypłacane, gdy na skutek wypadku przy pracy lub choroby zawodowej pracownik jest całkowicie lub częściowo niezdolny do pracy"
    },
    {
        word: "renta z tytułu niezdolności do pracy",
        type: "red",
        desc: "świadczenie przysługujące w przypadku, gdy lekarz-orzecznik stwierdzi niezdolność do pracy"
    },
    {
        word: "renta rodzinna",
        type: "red",
        desc: "świadczenie przyznawane członkom rodziny osoby zmarłej, która pobierała emeryturę/rentę z tytułu niezdolności do pracy lub miała uprawnienia do ich pobierania"
    },
    {
        word: "zasiłek pogrzebowy",
        type: "red",
        desc: "świadczenie otrzymane na pokrycie kosztów pogrzebu"
    },
    {
        word: "zasiłek chorobowy",
        type: "orange",
        desc: "świadczenie wypłacane zamiast pensji za czas zwolnienia lekarskiego"
    },
    {
        word: "świadczenie rehabilitacyjne",
        type: "orange",
        desc: "świadczenie wypłacane, gdy istnieje prawdopodobieństwo wyzdrowienia, a skończył się czas pobierania zasiłku chorobowego"
    },
    {
        word: "zasiłek macierzyński",
        type: "orange",
        desc: "świadczenie przysługujące z tytułu urodzenia dziecka lub przyjęcie dziecka na wychowanie"
    },
    {
        word: "zasiłek opiekuńczy",
        type: "orange",
        desc: "świadczenie przysługujące z tytułu konieczności opieki nad dzieckiem lub innym członkiem rodziny"
    }
];


let currentNr = getRandomNr();
let currentObj = passwords[currentNr];
disableColourBtns();

showBtn.addEventListener('click', function () {
    password.innerText = "";
    password.style.color = "black";
    password.innerText += currentObj.word;
    disableShowBtn();
    enableColourBtns();

});

blueBtn.addEventListener('click', function () {
    if (currentObj.type == "blue") {
        const template = ` <div class="col-md-3">
                     <p class="word__text"> ${currentObj.word}</p>
                   </div>
                   <div class="col-md-9">
                     <p class="word__description">${currentObj.desc}</p>
                   </div> 
`
        blueBox.innerHTML += template;
        blueBox.style.borderBottom = "2px solid #2a7ec3";
        passwords.splice(currentNr, 1);
        goodAnswer();

    } else {
        wrongAnswer();
    }
    enableShowBtn();
    disableColourBtns();
    currentNr = getRandomNr();
    currentObj = passwords[currentNr];
    quizEnd();

});



yellowBtn.addEventListener('click', function () {
    if (currentObj.type == "yellow") {
        const template = ` <div class="col-md-3">
                     <p class="word__text"> ${currentObj.word}</p>
                   </div>
                   <div class="col-md-9">
                     <p class="word__description">${currentObj.desc}</p>
                   </div> 
`
        yellowBox.innerHTML += template;
        yellowBox.style.borderBottom = "2px solid #ffe95c";
        passwords.splice(currentNr, 1);
        goodAnswer();

    } else {
        wrongAnswer();
    }
    enableShowBtn();
    disableColourBtns();
    currentNr = getRandomNr();
    currentObj = passwords[currentNr];
    quizEnd();

});

redBtn.addEventListener('click', function () {
    if (currentObj.type == "red") {
        const template = ` <div class="col-md-3">
                     <p class="word__text"> ${currentObj.word}</p>
                   </div>
                   <div class="col-md-9">
                     <p class="word__description">${currentObj.desc}</p>
                   </div> 
`
        redBox.innerHTML += template;
        redBox.style.borderBottom = "2px solid #f95840";
        passwords.splice(currentNr, 1);
        goodAnswer();

    } else {
        wrongAnswer();
    }
    enableShowBtn();
    disableColourBtns();
    currentNr = getRandomNr();
    currentObj = passwords[currentNr];
    quizEnd();
});

orangeBtn.addEventListener('click', function () {
    if (currentObj.type == "orange") {
        const template = ` <div class="col-md-3">
                     <p class="word__text"> ${currentObj.word}</p>
                   </div>
                   <div class="col-md-9">
                     <p class="word__description">${currentObj.desc}</p>
                   </div> 
`
        orangeBox.innerHTML += template;
        orangeBox.style.borderBottom = "2px solid #f7923d";
        passwords.splice(currentNr, 1);
        goodAnswer();

    } else {
        wrongAnswer();
    }
    enableShowBtn();
    disableColourBtns();
    currentNr = getRandomNr();
    currentObj = passwords[currentNr];
    quizEnd();
});


function getRandomNr() {
    let randomNr = Math.floor(Math.random() * passwords.length);
    return randomNr;
};

function disableShowBtn() {
    showBtn.disabled = true;
};

function enableShowBtn() {
    showBtn.disabled = false;
};

function disableColourBtns() {
    blueBtn.disabled = true;
    yellowBtn.disabled = true;
    redBtn.disabled = true;
    orangeBtn.disabled = true;
};

function enableColourBtns() {
    blueBtn.disabled = false;
    yellowBtn.disabled = false;
    redBtn.disabled = false;
    orangeBtn.disabled = false;
};

function goodAnswer() {
    password.style.color = "green";
    password.innerText = "Dobrze!";
}

function wrongAnswer() {
    password.style.color = "red";
    password.innerText = "Błąd ! Spróbuj ponownie !";
}

function quizEnd() {
    if (passwords.length == 0) {
        password.style.color = "green";
        password.innerText = "Gratulacje !";
        disableColourBtns();
        showBtn.style.display = "none";
        downloadBtn.style.display = "block";
    }
}