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
// // LOGIN  localstorage////////////worked before
// const form =document.getElementById('loginForm');
// const email = document.getElementById('logEmail');
// const password = document.getElementById('password');
// const login = document.getElementById('sending');

// users = JSON.parse(localStorage.getItem('users')) || [];


// function signIn() {
//   // check if user exists
//   const targetUser = users.find(user => user.email == email.value);


//   if(targetUser && targetUser.password == password.value) {
//     localStorage.setItem('currentUser', JSON.stringify(targetUser))
//     window.location.href = "../Admin/addPost.html";
//   } else if(targetUser && targetUser.password != password.value) {
//     swal("NOT YET!", "Please verify your credentials!", "error");
    
//   } else {
//     // user doesn't exist
//     swal("NOT REGISTERED!", "Please Create a new account!", "error");
  
//     window.location.href = "./signup.html";
//   }
// }

// login.onclick = signIn;















//// LOGIN  localstorage 
// alert("hello")
const form =document.getElementById('loginForm');

const login = document.getElementById('sending');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const emailValue = document.getElementById('logEmail').value;
const passwordValue = document.getElementById('password').value;

const data={email:emailValue,password:passwordValue}
console.log(data)


// connecting the api
fetch('https://api-mybrand.cyclic.app/api/v1/login',{
  method:"POST",
  headers: {
    "Content-Type": "application/json"

    },
  body: JSON.stringify(data)
    })
    .then ((responce) => responce.json())
  .then((user) => {
    console.log(user.data.email)
    if (user.data) {
      // set our token in Localstorage
      localStorage.setItem("token", user.token)
      localStorage.setItem('currentUser', user.data.email);
      location.href= "./Admin/addPost.html";

            } else {

                alert(user.message)
            }
            return user;
        })
        .catch((error) => alert(error));
          

});






