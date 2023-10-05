document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const loginErrorMessage = document.getElementById("loginErrorMessage");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem(loginEmail));

    if (!storedUser) {
      loginErrorMessage.textContent = "User not found. Please register.";
    } else {
      if (storedUser.password === loginPassword) {
        // Store the logged-in user's email for dashboard.js
        localStorage.setItem("loggedInUser", loginEmail);

        // Successful login, redirect to the dashboard
        window.location.href = "dashboard.html";
      } else {
        loginErrorMessage.textContent = "Incorrect password. Please try again.";
      }
    }
  });

  // Show/hide password functionality (if you're using it)
  const showLoginPasswordCheckbox =
    document.getElementById("showLoginPassword");
  const loginPasswordInput = document.getElementById("loginPassword");

  showLoginPasswordCheckbox.addEventListener("change", function () {
    if (showLoginPasswordCheckbox.checked) {
      loginPasswordInput.type = "text";
    } else {
      loginPasswordInput.type = "password";
    }
  });
});
