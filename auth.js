import { firebaseConfig } from "./firebase-config.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      alert("Login correcto");
    })
    .catch(error => alert(error.message));
}

window.register = function () {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      alert("Usuario creado");
    })
    .catch(error => alert(error.message));
}
