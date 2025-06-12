  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCUVrImWBV5-VkggAHxxEdkq5q_acdBeVQ",
    authDomain: "nutrino-60963.firebaseapp.com",
    projectId: "nutrino-60963",
    storageBucket: "nutrino-60963.firebasestorage.app",
    messagingSenderId: "108336144355",
    appId: "1:108336144355:web:3845a114f5cbca29e08ad6",
    measurementId: "G-V5JRHVWN07"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  //submit
  const login = document.getElementById('login');
  login.addEventListener("click",function(event) {
      //input
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href = "../main/home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error has occured (password is wrong)..!");
    // ..
  });
  })
 