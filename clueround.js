const quiz = [
    {
        question: "Identify the famous Sports personality:",
        clue1: "This Neplai Cricketer was born in Bardaghat of Nawalparashi distrct on September 2, 2002.",
        clue2: "He was one of the only three Nepali cricketers to compete in the Global T20 League 2024 in Canada and even won the tournament with his team the Toronto Nationals.",
        clue3: "He is the current captain of Nepali Cricket Team.",
        ans: "Rohit Kumar Paudel"
    },
    {
        question: "Identify the given world-renowned Political Personality:",
        clue1: "This US President served as the senator from Missouri from 1935 to 1945 AD and was also the Vice-President to Franklin D. Roosevelt.",
        clue2: "He was the 33rd President of the USA from 1945 to 1953 AD.",
        clue3: "The attacks in Hiroshima and Nagasaki took place during his presidency.",
        ans: "Harry S. Truman"
    }
];


let mainquestion = document.querySelector(".formainquestion");
let clue_1 = document.querySelector(".clue1");
let clue_2 = document.querySelector(".clue2");
let clue_3 = document.querySelector(".clue3");
let ams = document.querySelector(".ans1");
let amsgiver = document.querySelector(".getans1");
let givenext = document.querySelector(".getnextquestion");
let firstclue_give = document.querySelector(".forfirstclue");
let secondclue_give = document.querySelector(".forsecondclue");
let thirdclue_give = document.querySelector(".forthirdclue");

let counter = 0;
let counter_for_others = 0;

amsgiver.addEventListener("click", () => {
    ams.innerHTML = quiz[counter_for_others].ans;
});

givenext.addEventListener("click", () => {
    if (counter === 0) {
        mainquestion.innerHTML = quiz[counter].question;
        counter_for_others = counter;
        counter += 1;
    } else if (counter < 2) {
        mainquestion.innerHTML = quiz[counter].question;
        clue_1.innerHTML = "";
        clue_2.innerHTML = "";
        clue_3.innerHTML = "";
        ams.innerHTML = "";
        counter += 1;
        counter_for_others += 1;
    } else {
        window.open("streams.html", "_self"); 
    }
});

firstclue_give.addEventListener("click", () => {
    clue_1.innerHTML = quiz[counter_for_others].clue1;
});
secondclue_give.addEventListener("click", () => {
    clue_2.innerHTML = quiz[counter_for_others].clue2;
});
thirdclue_give.addEventListener("click", () => {
    clue_3.innerHTML = quiz[counter_for_others].clue3;
});
