const option1 = document.querySelector(".op-btn1")
const option2 = document.querySelector(".op-btn2")
let counter = 0;
const showBtn = document.querySelector(".forbtn")
const nextBtn = document.querySelector(".nextbtn")

const questioncont = document.querySelector(".maintext")

option1.addEventListener("dblclick", openquestion1)
option2.addEventListener("dblclick", openquestion2)


showBtn.style.display = 'none'
nextBtn.style.display = 'none'

const quiz = [
    {
        question: '<img id="sch" src="som.png" width ="200px" height="200px"> <br> Find the missing number:',
        ans: "9"
    },
    {
        question: `<img id="sch" src="suuii.png" width ="200px" height="200px"> <br>Find the missing number:`,
        ans: "9",
    },
    {
        question: ` Which is the coldest sea on Earth ?`,
        ans: "Arctic Ocean"
    },
    {
        question: " Which country is the home to most volcanoes ?",
        ans: "USA"
    },
    {
        question: " Which river flows through the Grand Canyon ?",
        ans: "The Colorado river"
    },
    {
        question: ` Who said "Geology is the Geography of the Past and Geography is the Geology of the present" ?`,
        ans: "W.M Davis"
    },
    {
        question: ` Which country has the highest number of pyramids in the world ?`,
        ans: `Sudan`
    },
    {
        question: `Which is the world's shortest river ?`,
        ans: "Roe river"
    },
    {
        question: " Which line separates India and China ?",
        ans: "McMahon Line"
    },
    {
        question: ` Which city is known as "The Eternal City" ?`,
        ans: "Rome"
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
    //   option3.style.display = 'none';

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
    option5.style.display = 'none';
    option5.style.display = 'none';
    option6.style.display = 'none';
    option6.style.display = 'none';
    option7.style.display = 'none';
    option8.style.display = 'none';
    option9.style.display = 'none';
    option10.style.display = 'none';

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
    option5.style.display = 'none';
    option5.style.display = 'none';
    option6.style.display = 'none';
    option6.style.display = 'none';
    option7.style.display = 'none';
    option8.style.display = 'none';
    option9.style.display = 'none';
    option10.style.display = 'none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function openquestion5() {
    const quiz_for_1 = quiz[4].question
    let ans_for_1 = quiz[4].ans
    counter = counter + 1;
    questioncont.innerHTML = quiz_for_1;
    option1.style.display = 'none';
    option2.style.display = 'none';
    option5.style.backgroundColor = "red"
    option3.style.display = 'none';
    option4.style.display = 'none';
    option5.style.display = 'none';
    option5.style.display = 'none';
    option6.style.display = 'none';
    option6.style.display = 'none';
    option7.style.display = 'none';
    option8.style.display = 'none';
    option9.style.display = 'none';
    option10.style.display = 'none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function openquestion6() {
    const quiz_for_1 = quiz[5].question
    let ans_for_1 = quiz[5].ans
    counter = counter + 1;
    questioncont.innerHTML = quiz_for_1;
    option1.style.display = 'none';
    option2.style.display = 'none';
    option6.style.backgroundColor = "red"
    option3.style.display = 'none';
    option4.style.display = 'none';
    option5.style.display = 'none';
    option5.style.display = 'none';
    option6.style.display = 'none';
    option6.style.display = 'none';
    option7.style.display = 'none';
    option8.style.display = 'none';
    option9.style.display = 'none';
    option10.style.display = 'none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function openquestion7() {
    const quiz_for_1 = quiz[6].question
    let ans_for_1 = quiz[6].ans
    counter = counter + 1;
    questioncont.innerHTML = quiz_for_1;
    option1.style.display = 'none';
    option2.style.display = 'none';
    option7.style.backgroundColor = "red"
    option3.style.display = 'none';
    option4.style.display = 'none';
    option5.style.display = 'none';
    option5.style.display = 'none';
    option6.style.display = 'none';
    option6.style.display = 'none';
    option7.style.display = 'none';
    option8.style.display = 'none';
    option9.style.display = 'none';
    option10.style.display = 'none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function openquestion8() {
    const quiz_for_1 = quiz[7].question
    let ans_for_1 = quiz[7].ans
    counter = counter + 1;
    questioncont.innerHTML = quiz_for_1;
    option1.style.display = 'none';
    option2.style.display = 'none';
    option8.style.backgroundColor = "red"
    option3.style.display = 'none';
    option4.style.display = 'none';
    option5.style.display = 'none';
    option5.style.display = 'none';
    option6.style.display = 'none';
    option6.style.display = 'none';
    option7.style.display = 'none';
    option8.style.display = 'none';
    option9.style.display = 'none';
    option10.style.display = 'none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function openquestion9() {
    const quiz_for_1 = quiz[8].question
    let ans_for_1 = quiz[8].ans
    counter = counter + 1;
    questioncont.innerHTML = quiz_for_1;
    option1.style.display = 'none';
    option2.style.display = 'none';
    option9.style.backgroundColor = "red"
    option3.style.display = 'none';
    option4.style.display = 'none';
    option5.style.display = 'none';
    option5.style.display = 'none';
    option6.style.display = 'none';
    option6.style.display = 'none';
    option7.style.display = 'none';
    option8.style.display = 'none';
    option9.style.display = 'none';
    option10.style.display = 'none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function openquestion10() {
    const quiz_for_1 = quiz[9].question
    let ans_for_1 = quiz[9].ans
    counter = counter + 1;
    questioncont.innerHTML = quiz_for_1;
    option1.style.display = 'none';
    option2.style.display = 'none';
    option10.style.backgroundColor = "red"
    option3.style.display = 'none';
    option4.style.display = 'none';
    option5.style.display = 'none';
    option5.style.display = 'none';
    option6.style.display = 'none';
    option6.style.display = 'none';
    option7.style.display = 'none';
    option8.style.display = 'none';
    option9.style.display = 'none';
    option10.style.display = 'none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", () => {
        questioncont.innerHTML = ans_for_1;
    })
}

function getNext() { 
    if(counter < 10) {
        window.open("population.html", "_self");
    } else {
        questioncont.innerHTML = "Select Option";
        option1.style.display = 'flex';
        option2.style.display = 'flex';
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
  document.getElementById("clearStorageMix").addEventListener("click", function () {
    localStorage.clear();
  });
  