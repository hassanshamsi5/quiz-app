// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import {getDatabase, set, ref,push} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js"

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
const analytics = getAnalytics(app)

const db = getDatabase()

const question = document.getElementById('question')
const option = document.getElementById('option')
const optionParent = document.getElementById('optionParent')
const correctAnswerElem = document.getElementById('correctAnswer')


var options = []
var correctAnswer 

function renderOptions() {
    optionParent.innerHTML = ''
    for (let i = 0; i < options.length; i++) {
        optionParent.innerHTML += `<li class="p-3 m-4 w-25 fs-5 border-0 rounded shadow bg-white" onclick="setCorrectAnswer('${options[i]}')">${options[i]}</li>`
    }
}

window.addOption = function () {
    options.push(option.value)
    console.log(options);
    renderOptions()
}

window.setCorrectAnswer = function (a) {
    correctAnswer = a
    correctAnswerElem.innerHTML = a
}
// window.submitQuestion = function () {
//     var obj = {
//         question:question.value,
//         options:options.value,
//         correctAnswer:correctAnswer.value
//     }
// obj.id = push(ref(db, 'questions/')).key
//      const reference = ref(db, 'questions/')
//      set(reference, obj)

//     console.log(obj);
// }


window.submitQuestion = function () {
    var obj = {
        question: question.value,
        options: options,
        correctAnswer: correctAnswer
    };
obj.id = push(ref(db, 'questions/')).key
    const reference = ref(db, `questions/${obj.id}`); // Assuming you have a node named 'questions' in your database
    set(reference, obj)
        .then(() => {
            console.log("Question submitted successfully:", obj);
        })
        .catch((error) => {
            console.error("Error submitting question:", error);
        });
};
