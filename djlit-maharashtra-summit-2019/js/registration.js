var regForm = document.getElementById('reg-form');
var submitButton = document.getElementById('submitButton');

let config = {
    apiKey: "AIzaSyC6-6aXNNf4OF4Ruwm3v9hFbJjkrfJhAK8",
    authDomain: "maharashtra-summit.firebaseapp.com",
    databaseURL: "https://maharashtra-summit.firebaseio.com",
    projectId: "maharashtra-summit",
    storageBucket: "maharashtra-summit.appspot.com",
    messagingSenderId: "195050543246"
};
firebase.initializeApp(config);

var lock = false; // prevent multiple submits.

regForm.onsubmit = function(e) {
    e.preventDefault();

    if(lock) return;

    let data = {};
    new FormData(regForm).forEach((value, key) => {data[key] = value;});

    if(data.preference1 === data.preference2) {
        alert("Preference 1 and 2 cannot be the same!");
        return;
    }

    submitButton.classList.add('disabled');
    submitButton.type = "";
    lock = true;

    alert("Registrations have closed!");

    // firebase.firestore()
    //     .collection('registrations')
    //     .doc(Date.now().toString())
    //     .set(data)
    //     .then(() => {
    //         alert("Thank you for registering!");
    //         location.href = "../"; // redirect
    //     })
    //     .catch((e) => {
    //         alert("There was a problem in registration. Please tell this to -> gajriavikrant@gmail.com.");
    //         console.warn("An error occured, contact Vikrant.");
    //         console.error(e);
    //     })
    //     .finally(() => {
    //         submitButton.classList.remove('disabled');
    //         submitButton.type = "submit";
    //         lock = false;
    //     });
};
