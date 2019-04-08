function checkPin() {
    var username, password, text;
    username = document.getElementById("userName").value;
    if (username == "admin") {
        text = "Missile Launched! <p><img class=\"img-fluid\" src=\"myImage/missileLaunched.gif\"></p>";
    }
    if (password == "Password1234") {
        text = "Invalid Pin <p><img class=\"img-fluid\" src=\"myImage/wrong.gif\"></p>";
    } else {
        text = "Missile Launched! <p><img class=\"img-fluid\" src=\"myImage/missileLaunched.gif\"></p>";
    }
    document.getElementById("demo").innerHTML = text;
}
