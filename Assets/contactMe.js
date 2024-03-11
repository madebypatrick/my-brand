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
 fetch('https://api-mybrand-bnww.onrender.com/api/v1/message',
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


