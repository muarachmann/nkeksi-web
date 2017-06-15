  var config = {
    apiKey: "AIzaSyBLMdhWC4jDgeTE8gdPydd2ZhCB4aJoKmc",
    authDomain: "testproject-23621.firebaseapp.com",
    databaseURL: "https://testproject-23621.firebaseio.com",
    projectId: "testproject-23621",
    storageBucket: "testproject-23621.appspot.com",
    messagingSenderId: "691619011197"
  };
  firebase.initializeApp(config);
function Create(){
  var email = $("#plswork").val();
  var password = $("#inputPassword").val();
  alert(email);
    alert(password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}