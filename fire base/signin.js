// import {auth, db } from './firebase.mjs';
// import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"; 



// var btn = document.getElementById('btn')

// btn.addEventListener('click' ,  () => {
//   const  email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const firstname = document.getElementById('name').value;
//   const phoneNumber = document.getElementById('num').value;
//   const fname = document.getElementById('fname').value;
  
//   console.log(email , password , firstname, phoneNumber , fname);

// createUserWithEmailAndPassword(auth, email, password)
//   .then(async (userCredential) => {
    
//     try {
//       const docRef = await addDoc(collection(db, "users"), {
//         first: firstname,
//         fathername: fname,
//         phoneNumber: phoneNumber,
//         password:password,
//         email:  email,
//         createdOn: Date.now()
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }


//     const user = userCredential.user;
//     console.log('user' , user);
//     alert('user account is created');
//     location.replace('./login.html')
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// })
import { auth, db } from './firebase.mjs';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

var btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const firstname = document.getElementById('name').value;
  const phoneNumber = document.getElementById('num').value;
  const fname = document.getElementById('fname').value;

  console.log(email, password, firstname, phoneNumber, fname);

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {

      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: firstname,
          fathername: fname,
          phoneNumber: phoneNumber,
          password: password,
          email: email,
          createdOn: Date.now()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      const user = userCredential.user;
      console.log('user', user);
      alert('User account is created');
      location.replace('./login.html');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});


