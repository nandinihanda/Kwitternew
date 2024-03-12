
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyCiWhrtNXd9XEbMkCleV2N7xCOppKcw6Sg",
  authDomain: "kwitter-eb447.firebaseapp.com",
  databaseURL: "https://kwitter-eb447-default-rtdb.firebaseio.com",
  projectId: "kwitter-eb447",
  storageBucket: "kwitter-eb447.appspot.com",
  messagingSenderId: "689502181054",
  appId: "1:689502181054:web:3f5443dfcefce3d26270ef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + username + " !";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
