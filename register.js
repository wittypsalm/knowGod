document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const errorMessage = document.getElementById("errorMessage");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !password) {
      errorMessage.textContent = "All fields are required.";
    } else if (password.length < 8) {
      errorMessage.textContent = "Password must be at least 8 characters long.";
    } else {
      const storedUser = localStorage.getItem(email);

      if (!storedUser) {
        // Create a new user object and set it as authorized
        const user = {
          firstName,
          lastName,
          email,
          password,
          authorized: true, // Set the user as authorized
        };
        localStorage.setItem(email, JSON.stringify(user));

        // Redirect to the login page after successful registration
        window.location.href = "login.html";
      } else {
        errorMessage.textContent =
          "User with this email already exists. Please log in.";
      }
    }
  });

  // Show/hide password functionality
  const showPasswordCheckbox = document.getElementById("showPassword");
  const passwordInput = document.getElementById("password");

  showPasswordCheckbox.addEventListener("change", function () {
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});
