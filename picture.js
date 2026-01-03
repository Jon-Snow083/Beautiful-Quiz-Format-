const option1 = document.querySelector(".op-btn1")
const option2 = document.querySelector(".op-btn2")
const option3 = document.querySelector(".op-btn3")
const option4 = document.querySelector(".op-btn4")
const option5 = document.querySelector(".op-btn5")
const option6 = document.querySelector(".op-btn6")
const option7 = document.querySelector(".op-btn7")
const option8 = document.querySelector(".op-btn8")
const option9 = document.querySelector(".op-btn9")
const option10 = document.querySelector(".op-btn10")
const option11 = document.querySelector(".op-btn11")
const option12 = document.querySelector(".op-btn12")
const option13 = document.querySelector(".op-btn13")
const option14 = document.querySelector(".op-btn14")
const option15 = document.querySelector(".op-btn15")
let counter = 0;
const showBtn = document.querySelector(".forbtn")
const nextBtn = document.querySelector(".nextbtn")

const questioncont = document.querySelector(".maintext")

option1.addEventListener("dblclick", openquestion1)
option2.addEventListener("dblclick", openquestion2)
option3.addEventListener("dblclick", openquestion3)
option4.addEventListener("dblclick", openquestion4)
option5.addEventListener("dblclick", openquestion5)
option6.addEventListener("dblclick", openquestion6)
option7.addEventListener("dblclick", openquestion7)
option8.addEventListener("dblclick", openquestion8)
option9.addEventListener("dblclick", openquestion9)
option10.addEventListener("dblclick", openquestion10)


showBtn.style.display = 'none'
nextBtn.style.display = 'none'

const quiz = [
    {
        question: `<img id="sch" src="cyl.png" width ="300px" height="250px"> <br> Identify the given 3D shape based on its net:`,
        ans: "Cylinder"
    },
    {
        question: `<img id="sch" src="soo.png" width ="250px" height="250px"> <br> Find the area of the given figure:`,
        ans: "79800 cm<sup>2</sup>",
    },
    {
         question: `<img id="sch" src="alk.jpg" width ="250px" height="250px"> <br> Guess the famous Mathematician:`,
        ans: "Al-Khwarizmi"
    },
    {
        question: `<img id="sch" src="gp.png" width ="300px" height="250px"><br>Supposing origin is O then find angle OAD. `,
        ans: "45°"
    },
    {
        question: `<img id="sch" src="dode.png" width ="300px" height="250px"><br> Identify the 3D shape:<br> `,
        ans: "Dodecahedron"
    },
    {
        question: `<img id="sch" src="see.png" width ="300px" height="250px"> <br> Find the unshaded part in the shown diagram?`,
        ans: "A∪(B∩C)"
    },
    {
         question: `<img id="sch" src="sq.png" width ="300px" height="250px"> <br> How many squares are there in this figure?`,
        ans: "40 Squares"
    },
    {
        question: `<img id="sch" src="euc.jpg" width ="300px" height="250px"> <br> Identify the Mathematician:`,
        ans: "Euclid"
    },
    {
        question: `<img id="sch" src="tt.png" width ="300px" height="250px"> <br>Find angle ABC from the given figure:`,
        ans: "40°"
    },
    {
        question: `<img id="sch" src="pyg.jfif" width ="250px" height="250px"> <br> Guess the famous Mathematician:`,
        ans: "Pythagoras"
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
        window.open("picture.html", "_self");
    } else {
        questioncont.innerHTML = "Select Option";
        option1.style.display = 'flex';
        option2.style.display = 'flex';
        option3.style.display = 'flex';
        option4.style.display = 'flex';
        option5.style.display = 'flex';
        option6.style.display = 'flex';
        option7.style.display = 'flex';
        option8.style.display = 'flex';
        option9.style.display = 'flex';
        option10.style.display = 'flex';
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