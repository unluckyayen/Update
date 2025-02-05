import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDNUXxCo2iQYvmNbD9pOvr8AFkhfUAQKjQ",
    authDomain: "contact-5c652.firebaseapp.com",
    databaseURL: "https://contact-5c652-default-rtdb.firebaseio.com",
    projectId: "contact-5c652",
    storageBucket: "contact-5c652.appspot.com",
    messagingSenderId: "276420086541",
    appId: "1:276420086541:web:fc044087e0d44040233e44"
  };
  firebase.initializeApp(firebaseConfig);
  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("mail");
    var message = getElementVal("message");

    console.log(name,email,message);
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }