const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const emailValue = document.getElementById("logEmail").value;
  const passwordValue = document.getElementById("password").value;

  if (!emailValue || !passwordValue) {
    // Handle empty fields
    swal("Error", "Please fill in all fields", "error");
    return;
  }

  const data = { email: emailValue, password: passwordValue };

  try {
    const response = await fetch("https://api-mybrand-bnww.onrender.com/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = await response.json();

    if (response.ok) {
      // set our token in Localstorage
      localStorage.setItem("token", user.token);
      localStorage.setItem("currentUser", user.data.email);
      location.href = "./Admin/addPost.html";
    } else {
      // Handle wrong credentials or other errors
      swal("Error", user.message || "Failed to login", "error");
    }
  } catch (error) {
    swal("Error", error.message || "Failed to login", "error");
  }
});
