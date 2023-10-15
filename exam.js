let paper = [
  {
    question: "What country has the highest life expectancy ?",
    options: ["hong kong", "brazil", "china", "ghana"],
    answer: "hong kong",
    chosen_answer: "",
  },
  {
    question: "What is the most common surname in the United States ?",
    options: ["george", "leno", "smith", "mark"],
    answer: "smith",
    chosen_answer: "",
  },
  {
    question: "How many bones do we have in an ear ?",
    options: ["49", "33", "1", "3"],
    answer: "3",
    chosen_answer: "",
  },
  {
    question: "What disease commonly spread on pirate ships ?",
    options: [
      "malaria",
      "scurvy",
      "diabetes",
      "head aches",
    ],
    answer: "scurvy",
    chosen_answer: "",
  },
  {
    question: "According to chemistry, what is the formula for water ?",
    options: ["02", "H20", "H202", "C02"],
    answer: "H20",
    chosen_answer: "",
  },
  {
    question: "What is a group of crows called ?",
    options: ["A murder", "beast", "monster", "pirate"],
    answer: "A murder",
    chosen_answer: "",
  },
  {
    question: "What colour were the pyramids of GIZA [Egypt] ?",
    options: ["Black", "White", "Red", "Brown"],
    answer: "White",
    chosen_answer: "",
  },
  {
    question: "Who won the first ever football world cup ?",
    options: ["Uruguay", "England", "Brazil", "Argentina"],
    answer: "Uruguay",
    chosen_answer: "",
  },
  {
    question:
      "The word 'Aristocracy' literally means power in the hands of whom ?",
    options: [
      "The land owners",
      "The best",
      "The richest",
      "The most knowledgeable",
    ],
    answer: "The best",
    chosen_answer: "",
  },
  {
    question: "The smallest country in the world is ?",
    options: ["Mauritus", "Vatican City", "Seychelles", "Botswana"],
    answer: "Vatican City",
    chosen_answer: "",
  },
];
alltheabove.hidden = true;
let index = 0;
let score = 0;
function displays() {
  if (!paper[index]) {
    return;
  }
  display1.innerHTML = `<div>
    <h1 class='text-primary'>CBT TEST</h1>
    <p> Question ${index + 1} of ${paper.length}</p>
    <h4>${paper[index].question}</h4>
    </div>`;
  paper[index].options.forEach(function (element) {
    display1.innerHTML += `<p><input type='radio' value='${element}'><i>${element}</i></p>`;
    document.querySelectorAll("input").forEach((box) => {
      box.addEventListener("click", answer);
      if (box.value == paper[index].chosen_answer) {
        box.checked = true;
      }
    });
  });
  display.innerHTML = `<div style="display:flex; justify-content: space-evenly;">
    <button class="btn btn-primary" onclick="prev()">Prev</button>
    <button class="btn btn-primary" style="margin-left: 10px;" onclick="next()">Next</button>
    <button class="btn btn-danger" style='margin-left: 10px;' onclick="submit()">Submit</button>
    </div>`;
}
displays();
function next() {
  index++;
  displays();
}
function prev() {
  index--;
  displays();
}
function answer(params) {
  right.hidden = true;
  document.querySelectorAll("input").forEach((box) => {
    box.checked = false;
  });

  params.target.checked = true;
  paper[index].chosen_answer = params.target.value;
  if (paper[index].answer == paper[index].chosen_answer) {
    score++;
  }
}
function submit() {
  myname.hidden = true;
  timer.hidden = true;
  display1.innerHTML = "";
  display.innerHTML = "";
  answ.innerHTML = `<h2>${b.innerHTML}, your score is  ${score}  out of ${paper.length} questions`;
  // return;
}
let b = document.getElementById("myname");
function start() {
  myname.hidden = false;
  document.getElementById("timer").style.display = "block";
  let a = examinerID.value;

  if (a != "") {
    b.innerHTML = a;
    alltheabove.hidden = false;
    answ.innerHTML = "";
    index = 0;
    all.hidden = true;
    displays();
    function stop() {
      let h = 60;

      let terminate = setInterval(() => {
        h--;
        if (h == 0) {
          clearInterval(terminate);
          submit();
        }
        timer.innerHTML = `<h3>00:0${h} of 60 seconds</h3>`;
      }, 1000);
    }
    stop();
  } else {
    alltheabove.hidden = true;
    phone.innerHTML = `<h1 >Please Enter Your Name</h1>`;
  }
}
start();
