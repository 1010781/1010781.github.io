function checkPin() {
    var username, password, text;
    username = document.getElementById("userName").value;
    if (username == "admin") {
        text = "Missile Launched! <p><img class=\"img-fluid\" src=\"myImage/missileLaunched.gif\"></p>";
    } else {
        text = "Invalid Pin <p><img class=\"img-fluid\" src=\"myImage/wrong.gif\"></p>";
    }
    password = document.getElementById("passWord").value;
    if (password == "Password1234") {
        text = "Missile Launched! <p><img class=\"img-fluid\" src=\"myImage/missileLaunched.gif\"></p>";
    } else {
        text = "Invalid Pin";
    }
    document.getElementById("demo").innerHTML = text;
}
