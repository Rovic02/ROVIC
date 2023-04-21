const firebaseConfig = {
    apiKey: "AIzaSyD3_-2FOS-ioCvkF4HJJJsWwihiBXnmWsw",
    authDomain: "forcadela-crud.firebaseapp.com",
    databaseURL: "https://forcadela-crud-default-rtdb.firebaseio.com",
    projectId: "forcadela-crud",
    storageBucket: "forcadela-crud.appspot.com",
    messagingSenderId: "421939612895",
    appId: "1:421939612895:web:afb9d193d1de78f050ad6a",
    measurementId: "G-MB8EYS4LP5"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  var database = firebase.database();
  
  // Get a reference to the table
  var table = document.getElementById('table');
  
  // Function to fetch all data from Firebase and display it in the table
  function fetchData() {
    var ref = database.ref('users');
    ref.on('value', function(snapshot) {
      // Clear the table first
      table.innerHTML = '<thead><tr><th>First Name</th><th>Last Name</th><th>Username</th><th>Password</th><th>Favorite Subject</th></tr></thead><tbody>';
  
      // Loop through the data and add each row to the table
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        table.innerHTML += '<tr><td>' + childData.firstname + '</td><td>' + childData.lastname + '</td><td>' + childData.username + '</td><td>' + childData.password + '</td><td>' + childData.favourite_subject + '</td></tr>';
      });
  
      // Close the table body
      table.innerHTML += '</tbody>';
    });
  }
  
  // Call the fetchData function to display the data when the page loads
  fetchData();