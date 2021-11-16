
const firebaseConfig = {
  apiKey: "AIzaSyA9bOQmIvC0pkYRGA3Gh6ImYomn-jMA-88",
  authDomain: "chatapp-1-d06ad.firebaseapp.com",
  databaseURL: "https://chatapp-1-d06ad.firebaseio.com",
  projectId: "chatapp-1-d06ad",
  storageBucket: "chatapp-1-d06ad.appspot.com",
  messagingSenderId: "677518765002",
  appId: "1:677518765002:web:33e00e40de0accda35fd33",
  measurementId: "G-SD2HT74FXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

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
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
