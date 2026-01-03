const option1 = document.querySelector(".op-btn1")
const option2 = document.querySelector(".op-btn2")
const option3 = document.querySelector(".op-btn3")
const option4 = document.querySelector(".op-btn4")
let counter = 0;
const showBtn = document.querySelector(".forbtn")
const nextBtn = document.querySelector(".nextbtn")

const questioncont = document.querySelector(".maintext")

option1.addEventListener("dblclick", openquestion1)
option2.addEventListener("dblclick", openquestion2)
option3.addEventListener("dblclick", openquestion3)
option4.addEventListener("dblclick", openquestion4)


showBtn.style.display = 'none'
nextBtn.style.display = 'none'

const quiz = [
    {
        question: `How many prime numbers are there between 1 and 50?`,
        ans: "15"
    },
    {
        question: `Find the LCM of 180, 252 and 315.`,
        ans: "1260"
    },
    {
        question: `What is the value of (x+3)<sup>2</sup> + (x-2)<sup>2</sup>`,
        ans: "2x<sup>2</sup> + 12x + 13"
    },
    {
        question: `The scale of a map is 1:50,000. A road on the map measures 8.5 cm. Find the actual length of the road in meters.`,
        ans: "4250 metres"
    },
]

function openquestion1() {
    counter += 1;
    const quiz_for_1 = quiz[0].question
    let ans_for_1 = quiz[0].ans
    questioncont.innerHTML = quiz_for_1;
    option1.style.display = 'none';
    option1.style.backgroundColor = "red"
    option2.style.display = 'none';
    option3.style.display = 'none';
    option4.style.display = 'none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function openquestion2() {
    const quiz_for_1 = quiz[1].question
    let ans_for_1 = quiz[1].ans
    counter = counter + 1;
    questioncont.innerHTML = quiz_for_1;
    option1.style.display = 'none';
    option2.style.display = 'none';
    option2.style.backgroundColor = "red"
    option3.style.display = 'none';
    option4.style.display = 'none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function openquestion3() {
    const quiz_for_1 = quiz[2].question
    let ans_for_1 = quiz[2].ans
    counter = counter + 1;
    questioncont.innerHTML = quiz_for_1;
    option1.style.display = 'none';
    option2.style.display = 'none';
    option3.style.display = 'none';
    option3.style.backgroundColor = "red"
    option4.style.display = 'none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function openquestion4() {
    const quiz_for_1 = quiz[3].question
    let ans_for_1 = quiz[3].ans
    counter = counter + 1;
    questioncont.innerHTML = quiz_for_1;
    option1.style.display = 'none';
    option2.style.display = 'none';
    option4.style.backgroundColor = "red"
    option3.style.display = 'none';
    option4.style.display = 'none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function getNext() { 
    if(counter < 4) {
        window.open("buzzer.html", "_self");
    } else {
        questioncont.innerHTML = "Select Option";
        option1.style.display = 'flex';
        option2.style.display = 'flex';
        option3.style.display = 'flex';
        option4.style.display = 'flex';
        showBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}
document.querySelectorAll('.option-btn').forEach((button, index) => {
        
    if (localStorage.getItem(`buttonVisited${index}`)) {
      button.classList.add('visited');
    }
    button.addEventListener('click', (event) => {
      event.preventDefault(); 
      button.classList.add('visited'); 
      localStorage.setItem(`buttonVisited${index}`, 'true'); 
    });
  });
  document.getElementById("clearStorageLink").addEventListener("click", function () {
    localStorage.clear();
  });
