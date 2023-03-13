// =========================contact me====================
// worked very well before
// Get the form element and add a submit event listener
// let form = document.getElementById("contactForm");
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); 
//   // Get the form fields
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let about = document.getElementById('about').value;
//   let message = document.getElementById("comments").value;

//   // Validate the form fields
//   if (name=='' || email=='' || message=='') {
//     swal("NOT YET!", "Please fill the missing fields!", "error");
//     return;
//   }

//   if (!validateEmail(email)) {
//     swal("NOT YET!", "Please provide a valid email!", "error");
//     return;
//   }

//   // using localstorage for form data
//   let data = { name, email,about, message };
//   localStorage.setItem("contactInfo", JSON.stringify(data));

//   swal("Thank you!", "Your message has been sent, and We will get back to you shortly.", "success");

//   // Clear the form after the send button is clicked.
//   form.reset();
// });

// // Email validation
// function validateEmail(email) {
//   let regex = /\S+@\S+\.\S+/;
//   return regex.test(email);
// }

const form = document.getElementById("contactForm");

// add event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // grab the values in our inputs
  let fullname = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let from = document.getElementById('about').value;
  let message = document.getElementById("comments").value;

  // have our values in one object
  const data = { fullname, email,from,message };
  console.log(data);

  // interaction with the API endpoint
 fetch('https://api-mybrand.cyclic.app/api/v1/message',
 {
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(data)

 })
 .then((response)=>{
  // console.log(response)
  return response.json()
 })
 .then((data)=>{
  if(data.ok){
  // alert(data.message)
  swal("Thank you!", data.message, "success");
  }
 })
});


