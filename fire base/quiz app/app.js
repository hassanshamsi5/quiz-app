// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js"
import {signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// import {getFirestore} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2EgeScovr8gEXah9ES7Yxij5MySYLWzg",
  authDomain: "email-login-544c6.firebaseapp.com",
  projectId: "email-login-544c6",
  storageBucket: "email-login-544c6.appspot.com",
  messagingSenderId: "120073716628",
  appId: "1:120073716628:web:acefb9b63f07584ad7c581",
  measurementId: "G-SVP6CFCJYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getDatabase()


function getDataFromDatabase() {
  const reference = ref(db, 'questions/');
  onChildAdded(reference, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    questions.push(data);
  });
}

getDataFromDatabase();




const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "London", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  // {
  //   question: "Which planet is known as the 'Red Planet'?",
  //   choices: ["Mars", "Venus", "Jupiter", "Saturn"],
  //   correctAnswer: "Mars"
  // },
  // {
  //   question: "What is the largest ocean on Earth?",
  //   choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  //   correctAnswer: "Pacific Ocean"
  // },
  // {
  //   question: "What is the tallest tree species in the world?",
  //   choices: ["Redwood", "Banyan", "Oak", "Pine"],
  //   correctAnswer: "Redwood"
  // },
  // {
  //   question: "What is the world's most spoken language?",
  //   choices: [
  //     "English",
  //     "Mandarin Chinese",
  //     "Spanish",
  //     "Hindi"
  //   ],
  //   correctAnswer: "Mandarin Chinese"
  // },
  // {
  //   question: "Who is known as the \"Father of Physics\"?",
  //   choices: [
  //     "Albert Einstein",
  //     "Isaac Newton",
  //     "Galileo Galilei",
  //     "Niels Bohr"
  //   ],
  //   correctAnswer: "Galileo Galilei"
  // },
  // {
  //   question: "What is the main ingredient in guacamole?",
  //   choices: [
  //     "Avocado",
  //     "Tomato",
  //     "Onion",
  //     "Lime"
  //   ],
  //   correctAnswer: "Avocado"
  // },
  // {
  //   question: "Which animal is capable of true flight?",
  //   choices: [
  //     "Bat",
  //     "Butterfly",
  //     "Penguin",
  //     "Kangaroo"
  //   ],
  //   correctAnswer: "Bat"
  // },
  // {
  //   question: "What is the largest planet in our solar system?",
  //   choices: [
  //     "Earth",
  //     "Mars",
  //     "Jupiter",
  //     "Saturn"
  //   ],
  //   correctAnswer: "Jupiter"
  // },
  // {
  //   question: "Which artist painted the \"Starry Night\"?",
  //   choices: [
  //     "Vincent van Gogh",
  //     "Pablo Picasso",
  //     "Claude Monet",
  //     "Salvador Dalí"
  //   ],
  //   correctAnswer: "Vincent van Gogh"
  // },
  // {
  //   question: "What is the main component of air?",
  //   choices: [
  //     "Nitrogen",
  //     "Oxygen",
  //     "Carbon Dioxide",
  //     "Hydrogen"
  //   ],
  //   correctAnswer: "Nitrogen"
  // },
  // {
  //   question: "Which year did World War II end?",
  //   choices: [
  //     "1942",
  //     "1944",
  //     "1945",
  //     "1947"
  //   ],
  //   correctAnswer: "1945"
  // },
  // {
  //   question: "What is the capital of France?",
  //   choices: [
  //     "Paris",
  //     "Berlin",
  //     "Madrid",
  //     "Rome"
  //   ],
  //   correctAnswer: "Paris"
  // },
  // {
  //   question: "What is the largest mammal on Earth?",
  //   choices: [
  //     "Elephant",
  //     "Giraffe",
  //     "Blue Whale",
  //     "Lion"
  //   ],
  //   correctAnswer: "Blue Whale"
  // },
  // {
  //   question: "Which planet is closest to the Sun?",
  //   choices: [
  //     "Mars",
  //     "Venus",
  //     "Mercury",
  //     "Saturn"
  //   ],
  //   correctAnswer: "Mercury"
  // },
  // {
  //   question: "What is the currency of Japan?",
  //   choices: [
  //     "Yen",
  //     "Euro",
  //     "Dollar",
  //     "Pound"
  //   ],
  //   correctAnswer: "Yen"
  // },
  // {
  //   question: "Who painted the Mona Lisa?",
  //   choices: [
  //     "Pablo Picasso",
  //     "Leonardo da Vinci",
  //     "Vincent van Gogh",
  //     "Michelangelo"
  //   ],
  //   correctAnswer: "Leonardo da Vinci"
  // },
  // {
  //   question: "What is the chemical symbol for gold?",
  //   choices: [
  //     "Au",
  //     "Ag",
  //     "Fe",
  //     "Cu"
  //   ],
  //   correctAnswer: "Au"
  // },
  // {
  //   question: "Which country is known for inventing the pizza?",
  //   choices: [
  //     "Italy",
  //     "United States",
  //     "Spain",
  //     "France"
  //   ],
  //   correctAnswer: "Italy"
  // },
  // {
  //   question: "What is the tallest mountain in the world?",
  //   choices: [
  //     "Mount Everest",
  //     "Mount Kilimanjaro",
  //     "Mount Fuji",
  //     "Mount McKinley"
  //   ],
  //   correctAnswer: "Mount Everest"
  // },
  // {
  //   question: "What is the capital of Australia?",
  //   choices: [
  //     "Sydney",
  //     "Melbourne",
  //     "Canberra",
  //     "Brisbane"
  //   ],
  //   correctAnswer: "Canberra"
  // },
  // {
  //   question: "Which planet is also known as the Red Planet?",
  //   choices: [
  //     "Venus",
  //     "Jupiter",
  //     "Mars",
  //     "Neptune"
  //   ],
  //   correctAnswer: "Mars"
  // },
  // {
  //   question: "What is the main ingredient in a traditional Greek moussaka dish?",
  //   choices: [
  //     "Eggplant",
  //     "Lamb",
  //     "Potato",
  //     "Zucchini"
  //   ],
  //   correctAnswer: "Eggplant"
  // },
  // {
  //   question: "Which planet is known as the \"Red Planet\"?",
  //   choices: [
  //     "Earth",
  //     "Mars",
  //     "Venus",
  //     "Mercury"
  //   ],
  //   correctAnswer: "Mars"
  // },
  // {
  //   question: "What is the largest desert in the world?",
  //   choices: [
  //     "Sahara Desert",
  //     "Arabian Desert",
  //     "Gobi Desert",
  //     "Antarctic Desert"
  //   ],
  //   correctAnswer: "Sahara Desert"
  // },
  // {
  //   question: "Who wrote the play \"Romeo and Juliet\"?",
  //   choices: [
  //     "William Shakespeare",
  //     "Charles Dickens",
  //     "Jane Austen",
  //     "Mark Twain"
  //   ],
  //   correctAnswer: "William Shakespeare"
  // },
  // {
  //   question: "Which element has the symbol \"Fe\" on the periodic table?",
  //   choices: [
  //     "Iron",
  //     "Fluorine",
  //     "Helium",
  //     "Lead"
  //   ],
  //   correctAnswer: "Iron"
  // },
  // {
  //   question: "What is the chemical formula for water?",
  //   choices: [
  //     "H2O",
  //     "CO2",
  //     "NaCl",
  //     "O2"
  //   ],
  //   correctAnswer: "H2O"
  // },
  // {
  //   question: "Which country is the largest producer of coffee in the world?",
  //   choices: [
  //     "Brazil",
  //     "Colombia",
  //     "Ethiopia",
  //     "Vietnam"
  //   ],
  //   correctAnswer: "Brazil"
  // },
  // {
  //   question: "What is the most abundant gas in Earth's atmosphere?",
  //   choices: [
  //     "Nitrogen",
  //     "Oxygen",
  //     "Carbon Dioxide",
  //     "Argon"
  //   ],
  //   correctAnswer: "Nitrogen"
  // },
  // {
  //   question: "Who is the author of the \"Harry Potter\" book series?",
  //   choices: [
  //     "J.K. Rowling",
  //     "Stephen King",
  //     "Dan Brown",
  //     "George R.R. Martin"
  //   ],
  //   correctAnswer: "J.K. Rowling"
  // },
  // {
  //   question: "Which planet is known as the Red Planet?",
  //   choices: [
  //     "Mars",
  //     "Venus",
  //     "Jupiter",
  //     "Neptune"
  //   ],
  //   correctAnswer: "Mars"
  // }
]


let currentQuestion = 0;
let score = 0;


const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const submitButton = document.getElementById("submit");
const loader = document.getElementById("loader");



function showQuestion() {
  // loader.style.display = "block"
  // questions.style.display = "none"
  btn1.style.display="block"
  const question = questions[currentQuestion];
  questionElement.textContent = `Question ${currentQuestion + 1}: ${question.question}`;
  choicesElement.innerHTML = "";
  document.getElementById("heading").innerHTML = null
  // loader.style.display = "none"
  // questions.style.display = "block"
  // submitButton.style.display = "none"
  // document.getElementById("button").style.display = "none"

  question.choices.forEach(choice => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.style.padding = "20px"
    choiceButton.style.margin = "10px"
    choiceButton.style.color = "black"
    choiceButton.style.borderRadius = "10px"
    choiceButton.style.background = "white"
    choiceButton.style.fontWeight = "600"
    submitButton.style.display = "none"

    choiceButton.addEventListener("click", handleAnswer);
    choicesElement.appendChild(choiceButton);
  });
}
document.getElementById("submit").addEventListener("click", () => {


  let remainingSeconds = 1980;
  const intervalId = setInterval(displayHello, 1000);

  function displayHello() {
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;


    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    let demo = document.getElementById("demo").innerHTML = `${formattedMinutes}:${formattedSeconds}`;

    if (remainingSeconds === 0) {
      clearInterval(intervalId);
      questionElement.style.display = "none";
      choicesElement.style.display = "none";
      submitButton.style.display = "none";
      resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;

      // resultElement.textContent = `Your Score: ${score} sout of ${questions.length}`;

    }

    remainingSeconds--;
  }
})


function handleAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questions[currentQuestion].correctAnswer;
  if (selectedAnswer === correctAnswer) {
    score++;
    event.target.style.backgroundColor = "green";
  } else {
    event.target.style.backgroundColor = "red";
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(showQuestion, 1000);
  } else {

    setTimeout(showResult, 1000);
  }
}

function showResult() {
  questionElement.style.display = "none";
  choicesElement.style.display = "none";
  submitButton.style.display = "none";
  // resultElement.textContent =`<h1>Result</h1>`
  resultElement.textContent = ` Your Score Result: ${score} out of ${questions.length}`;
  demo.style.display = "none"
  document.getElementById("timer").innerHTML = null
  setTimeout(() => {
    location.reload()
  }, 10000);
}
submitButton.addEventListener("click", showQuestion);


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(questions);
questions.forEach((question) => {
  shuffleArray(question.choices);
});

// console.table(questions);

// import {auth} from './firebase.mjs'

var btn1 = document.getElementById('btn1');

btn1.addEventListener('click' , () => {

    signOut(auth).then((res) => {
        alert('signout done');
        window.location.href = '../home.html'
      }).catch((error) => {
        console.log(error)
      });
})

onAuthStateChanged(auth, (user) => {
    if (!user) {
      console.log(user)
      window.location.href = '../index.html'
    }
  });
