document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();

    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if (u === "" || p === "") {
        msg.innerText = "Enter all fields";
    }
    else if (u === "admin" && p === "1234") {
        msg.innerText = "Login Successful";
    }
    else {
        msg.innerText = "Invalid Username or Password";
    }
};
