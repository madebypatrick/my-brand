//  validate login form

// document.querySelector(".sending").onclick = function (e) {
//   e.preventDefault();
//   var email3 = document.querySelector("#logEmail").value,
//     password3 = document.querySelector("#password").value;

//   if (password3 == "" || email3 =="") {
//     swal("NOT YET!", "Please ferify your credentials!", "error");
//     return false;
//   }
//   return true;
// };

// ==========================
// LOGIN  localstorage
const email = document.getElementById('logEmail');
const password = document.getElementById('password');
const login = document.getElementById('sending');

users = JSON.parse(localStorage.getItem('users')) || [];

function signIn() {
  // check if user exists
  const targetUser = users.find(user => user.email == email.value);
  if(targetUser && targetUser.password == password.value) {
    localStorage.setItem('currentUser', JSON.stringify(targetUser))
    window.location.href = "adminHome.html";
  } else if(targetUser && targetUser.password != password.value) {
    swal("NOT YET!", "Please verify your credentials!", "error");
    
  } else {
    // user doesn't exist
    swal("NOT REGISTERED!", "Please Create a new account!", "error");
  
    window.location.href = 'signup.html';
  }
}

login.onclick = signIn;

