var firebaseConfig = {
      apiKey: "AIzaSyCvtVfQWoV1ajYHdNQbK5SAQgnXkQ_uT1E",
      authDomain: "class-test-2258c.firebaseapp.com",
      projectId: "class-test-2258c",
      storageBucket: "class-test-2258c.appspot.com",
      messagingSenderId: "733411589347",
      appId: "1:733411589347:web:0021dac1aa59f2ccd759d6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
