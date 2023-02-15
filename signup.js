
// ===============Validate signup form=======================
const form=document.getElementById('form');
const fname=document.getElementById('fname');
const email=document.getElementById('logEmailUp');
const password=document.getElementById('passwordUp');
const password2=document.getElementById('passwordConf');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});


const setError=(element, message)=>{
  const inputControl = element.parentElement;
  const errorDisplay =inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');

}
const setSuccess=element =>{
  const inputControl=element.parentElement;
  const errorDisplay=inputControl.querySelector('.error');
errorDisplay.innerText='';
inputControl.classList.add('success');
inputControl.classList.remove('error');
};

const isValidEmail=email =>{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs=()=>{
  const fnameValue=fname.value.trim();
  const emailValue=email.value.trim();
  const passwordValue=password.value.trim();
  const password2Value=password2.value.trim();
  if(fnameValue===''){
    setError(fname,'Full name is required');

  }else{
    setSuccess(fname);

  }
  if(emailValue===''){
    setError(email,'Email is required');
  }else if (!isValidEmail(emailValue)){
    setError(email, 'Provide a valid email address');

  }else{
    setSuccess(email);
  }
  if(passwordValue===''){
    setError(password,"Password is required");
  }else if(passwordValue.length<6){
    setError(password,'Password must be at least 6 characters');
  }else{
    setSuccess(password);
  }
  if(password2Value===''){
    setError(password2,'Please confirm your password');
  }else if(password2Value !== passwordValue){
    setError(password2,"Passwords don't match");
  }else{
    setSuccess(password2);
  }

};



// =================Local Storage============================




// const nameField = document.getElementById('fname');
// const emailField = document.getElementById('logEmailUp');
// const passwordz = document.getElementById('passwordConf');

// // signUp button
// const signup= document.getElementById('sendingUp');
// const listUsers=document.getElementById('listUsers');

// // display users button

// const showUsers = document.getElementById('showUsers');
//  users = JSON.parse(localStorage.getItem('users')) || [];

//  function saveUser(){
//   let user={};
//   user.firstName=nameField.value.split(' ')[0];
//   user.lastNime=nameField.value.split(' ')[1];
//   user.email=emailField.value
//   user.passwordz=passwordz.value
//   user.role=role.value
//   users.push(user);
//   const stringUsers =JSON.stringify(users);
//   localStorage.setItem('users', stringUsers);
//  }

//  functiondisplayUsers(){
//   users.forEach((user,index) =>{
//     listUsers.innerHTML += `<li>user number ${index} is ${user.firstName} ${user.LastName}</li>`
//   })
//  }











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