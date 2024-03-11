document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fname").value.trim();
    const email = document.getElementById("logEmailUp").value.trim();
    const password = document.getElementById("passwordUp").value;
    const passwordConf = document.getElementById("passwordConf").value;

    const fullnameError = document.getElementById("fname-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const passwordConfError = document.getElementById("passwordConf-error");

    fullnameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    passwordConfError.textContent = "";

    if (!fullname) {
      fullnameError.textContent = "Please fill out this field";
      return;
    }

    if (!email) {
      emailError.textContent = "Please fill out this field";
      return;
    }

    if (!password) {
      passwordError.textContent = "Please fill out this field";
      return;
    }

    if (!passwordConf) {
      passwordConfError.textContent = "Please fill out this field";
      return;
    }

    if (password !== passwordConf) {
      passwordConfError.textContent = "Passwords do not match";
      return;
    }

    if (!isValidEmail(email)) {
      emailError.textContent = "Please enter a valid email address";
      return;
    }

    if (!isValidPassword(password)) {
      passwordError.textContent =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      return;
    }

    const data = { fullname, email, password };
    try {
      const response = await fetch("https://api-mybrand-bnww.onrender.com/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        swal("Welcome!", "Login to use the app!", "success")
          .then(() => {
            window.location.href = "login.html";
          });
      } else {
        swal("Error", responseData.message || "Failed to sign up", "error");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
});
