document.getElementById("submit-btn").addEventListener("click", function () {
  // get user email
  const emailField = document.getElementById("user-email");
  const userMail = emailField.value;
  //   get user password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  //   check email and password
  if (userMail === "sontan@baap.com" && userPassword === "secret") {
    window.location.href = "banking.html";
  }
});
