document.addEventListener("DOMContentLoaded", function () {
  // Check if there's a logged-in user
  const loggedInUserEmail = localStorage.getItem("loggedInUser");

  if (!loggedInUserEmail) {
    // Redirect to the login page if the user is not logged in
    window.location.href = "login.html";
  } else {
    // Display the dashboard content for the authenticated user
    const user = JSON.parse(localStorage.getItem(loggedInUserEmail));
    const userNameElement = document.getElementById("userName");
    userNameElement.textContent = `Hello, ${user.firstName} ${user.lastName}!`;

    // Add a click event listener for the logout link
    const logoutLink = document.getElementById("logoutLink");
    logoutLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      // Clear the logged-in user and redirect to the login page
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    });
  }
});
