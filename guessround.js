const db = [
    {
        question: "What is the area of Bangladesh? State in square kilometer.",
        ans: "1,48,460 km<sup>2</sup>",
    },
    {
        question: "What is the mass of electron in Kg?",
        ans: "9.1093837 x 10<sup>-31</sup> kg",
    },
];

let nextq = document.querySelector(".forbtn");
let giveans = document.querySelector(".nextbtn");
let qholder = document.querySelector(".forq");
counter = 0;

nextq.addEventListener("click", () => {
    if (counter < 2) { 
        qholder.innerHTML = db[counter].question;
    } else {
        window.open("streams.html", "_self");
    }
});

giveans.addEventListener("click", () => {
    if (counter < 2) {
        qholder.innerHTML = db[counter].ans;
        counter = counter + 1;
    } else {
        
    }
});
