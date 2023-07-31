

import {auth} from './firebase.mjs'
import {signInWithEmailAndPassword , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";



var btn = document.getElementById('btn')

btn.addEventListener('click' ,()=> {
  const  email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  
  console.log(email , password , );

  signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user' , user);
    alert('logged in ');
    location.replace('./quiz app/index.html');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

})

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;  
      console.log(uid);
      window.location.href = './home.html'
    } 
  });
