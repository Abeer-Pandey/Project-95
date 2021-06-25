
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCN7JKVNxaYcHyvn9rO2JoARdhgn2ekYu4",
  authDomain: "boomer-fd127.firebaseapp.com",
  projectId: "boomer-fd127",
  storageBucket: "boomer-fd127.appspot.com",
  messagingSenderId: "604869310119",
  appId: "1:604869310119:web:b2f911f539186082db0d82"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addroom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name)

  window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML;
Room_names = childKey;
//Start code
console.log("Room name - " + Room_names);
row = "<div class ='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id) >#'"+ Room_names + "</div></hr>";
document.getElementById("output").innerHTML += row;
//End code
})}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";

} 

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}