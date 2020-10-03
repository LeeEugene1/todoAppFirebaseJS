  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBmxkn4bfjzMazv4OcMx5KUkb6LDmDfVVA",
    authDomain: "todojs-9fdb0.firebaseapp.com",
    databaseURL: "https://todojs-9fdb0.firebaseio.com",
    projectId: "todojs-9fdb0",
    storageBucket: "todojs-9fdb0.appspot.com",
    messagingSenderId: "705843329014",
    appId: "1:705843329014:web:72b4ad9dd37754826779d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_task(){
      var input_box = document.getElementById('input_box')
      var input_date = document.getElementById('input_date')

      if(input_box.value.length != 0 && input_date.value.lengt != 0){
            //our boxes have data and we take database
            var key = firebase.database().ref().child("unfinished_task").push().key;
            // console.log(key);
            var task = {
                task:input_box.value,
                date:input_date.value,
                key:key
            }

            var updates = {};
            updates["/unfinished_task/"+key] = task;
            firebase.database().ref().update(updates);

        }

  }

  function create_unfinished_task(){
      var unfinished_task_container = document.getElementsByClassName("container")[0];
      unfinished_task_container.innerHTML = '';
  }

  function task_done(){
      console.log("task_done")
  }

  function task_edit(){
    console.log("task_edit")
  }

  function task_delete(){
    console.log("task_delete")
  }