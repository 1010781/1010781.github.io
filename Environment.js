function checkPin() {
    var username, password, button, invalid;
    username = document.getElementById("userName").value;
    if (username == "admin") {
        button = "<p><button type=\"button\" class=\"btn btn-success\" style=\"margin-top: 80px; color: black\" id='MyButton' onclick=\"changeButton()\">Enable</button></p>";
    } else {
        invalid = "Incorrect Username or Password";
    }
    password = document.getElementById("passWord").value;
    if (password == "Password1234") {
        button = "<p><button type=\"button\"  class=\"btn btn-success\" style=\"margin-top: 80px; color: black;\" id='MyButton' onclick=\"changeButton()\">Enable</button></p>";
    } else {
        invalid = "Incorrect Username or Password";
    }
    document.getElementById("button").innerHTML = button;
    document.getElementById("invalid").innerHTML = invalid;
}

function changeButton() {
    var myButton = document.getElementById('MyButton');
    if (myButton.button.match("<p><button type=\"button\" class=\"btn btn-success\" style=\"margin-top: 80px; color: black\" onclick=\"changeButton()\">Enable</button></p>")) {
        myButton.button = "<p><button type=\"button\" class=\"btn btn-success\" style=\"margin-top: 80px; color: black\" onclick=\"changeButton()\">Enable</button></p>";
    } else {
        myButton.button = "<p><button type=\"button\" class=\"btn btn-danger\" style=\"margin-top: 80px; color: black\" onclick=\"changeButton()\">disable</button></p>";
    }
}