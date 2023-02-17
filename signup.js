
// ===============Validate signup form=======================




// const form=document.getElementById('form');
// const fname=document.getElementById('fname');
// const email=document.getElementById('logEmailUp');
// const password1=document.getElementById('passwordUp');
// const password2=document.getElementById('passwordConf');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   validateInputs();
// });


// const setError=(element, message)=>{
//   const inputControl = element.parentElement;
//   const errorDisplay =inputControl.querySelector('.error');
//   errorDisplay.innerText = message;
//   inputControl.classList.add('error');
//   inputControl.classList.remove('success');

// }
// const setSuccess=element =>{
//   const inputControl=element.parentElement;
//   const errorDisplay=inputControl.querySelector('.error');
// errorDisplay.innerText='';
// inputControl.classList.add('success');
// inputControl.classList.remove('error');
// };

// const isValidEmail=email =>{
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs=()=>{
//   const fnameValue=fname.value.trim();
//   const emailValue=email.value.trim();
//   const password1Value=password1.value.trim();
//   const password2Value=password2.value.trim();
//   if(fnameValue===''){
//     setError(fname,'Full name is required');

//   }else{
//     setSuccess(fname);

//   }
//   if(emailValue===''){
//     setError(email,'Email is required');
//   }else if (!isValidEmail(emailValue)){
//     setError(email, 'Provide a valid email address');

//   }else{
//     setSuccess(email);
//   }
//   if(password1Value===''){
//     setError(password1,"Password is required");
//   }else if(password1Value.length<6){
//     setError(password1,'Password must be at least 6 characters');
//   }else{
//     setSuccess(password1);
//   }
//   if(password2Value===''){
//     setError(password2,'Please confirm your password');
//   }else if(password2Value !== password1Value){
//     setError(password2,"Passwords don't match");
//   }else{
//     setSuccess(password2);
//   }

// };



// =================Local Storage============================

// identify forminput field values by time of clicking submit
const nameField = document.getElementById('fname');
const emailField = document.getElementById('logEmailUp');
const password = document.getElementById('passwordUp');
const role = document.getElementById('role');
// signup button
const signup = document.getElementById('sendingUp');


users = JSON.parse(localStorage.getItem('users')) || [];

function saveUser() {
  let user = {};
  user.firstName = nameField.value.split(' ')[0];
  user.lastName = nameField.value.split(' ')[1];
  user.email = emailField.value
  user.password = password.value
  users.push(user);
  const stringUsers = JSON.stringify(users);
  localStorage.setItem('users', stringUsers);
}

function displayUsers() {
  users.forEach((user, index) => {
    listUsers.innerHTML += `<li>user number ${index} is ${user.firstName} ${user.lastName}</li>`
  })
}

signup.onclick = saveUser;