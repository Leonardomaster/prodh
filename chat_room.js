const firebaseConfig = {
    apiKey: "AIzaSyDn49NuldnVXQ3qR0JjiCmfdZHAbLGg-kg",
    authDomain: "webapp--app-vamos-conversar.firebaseapp.com",
    databaseURL: "https://webapp--app-vamos-conversar-default-rtdb.firebaseio.com",
    projectId: "webapp--app-vamos-conversar",
    storageBucket: "webapp--app-vamos-conversar.appspot.com",
    messagingSenderId: "668240500364",
    appId: "1:668240500364:web:9ad1a8140aca9269534da9"
  };

  function getData()
  {
    firebaseConfig.databaseURL().ref("/").on('value', function(snapshot)
    {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot)  {childKey;
        childSnapshot.key;
        Room_names = childKey;
//Comece a programar aqui

//Termine de programar aqui 
  })
    })
}
  
send ()
