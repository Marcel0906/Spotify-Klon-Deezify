 function newLogin() {
  const loginForm = document.querySelector("form");
  const loginMessage = document.createElement("div");
  loginMessage.id = "loginMessage";
  document.body.appendChild(loginMessage);

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = loginForm.querySelector("#username").value;
      const password = loginForm.querySelector("#password").value;
      simulateLogin(username, password);
    });

    function simulateLogin(username, password) {
      console.log("Attempting login...");
      const testUsername = "mustermann@gmail.com";
      const testPassword = "must3rMax";

      if (username === testUsername && password === testPassword) {
        console.log("Successfully logged in!");
        loginMessage.style.color = "#008080";

        window.location.href = "search.html"; // go to search
      } else {
        console.log("Access denied!");
        loginMessage.style.color = "#C20030";
      }
    }
  }
}

newLogin();

window.addEventListener("load", () => {
  newLogin();
});
