// =========================contact me====================

// Get the form element and add a submit event listener
let form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  // Get the form fields
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let about = document.getElementById('about').value;
  let message = document.getElementById("comments").value;

  // Validate the form fields
  if (name=='' || email=='' || message=='') {
    swal("NOT YET!", "Please fill the missing fields!", "error");
    return;
  }

  if (!validateEmail(email)) {
    swal("NOT YET!", "Please provide a valid email!", "error");
    return;
  }

  // using localstorage for form data
  let data = { name, email,about, message };
  localStorage.setItem("contactInfo", JSON.stringify(data));

  swal("Thank you!", "Your message has been sent, and I will get back to you shortly.", "success");

  // Clear the form after the send button is clicked.
  form.reset();
});

// Email validation
function validateEmail(email) {
  let regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}