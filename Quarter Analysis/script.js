const USERS = [
    { username: "user1", password: "password1" },
  ];
  
  const loginButton = document.getElementById("login-button");
  
  loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("pwd").value;
  
    const user = USERS.find(
      (cred) => cred.username === username && cred.password === password
    );


    if (user) {
            window.location.href = "dashboard1.html";
      } else {
        document.getElementById("error").innerHTML = "Invalid username or password.";
         return false;
      }
    });

    









