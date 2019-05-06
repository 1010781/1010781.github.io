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
    var txt = myButton.textContent || myButton.innerText;
    if (txt.match("Enable")) {
        myButton.textContent = "Disable";
        myButton.style.backgroundColor = "red";
    } else {
        myButton.textContent = "Enable";
        myButton.style.backgroundColor = "green";

    }
}

function powerStation1() {
    var currentStatus = [Math.floor(Math.random()*1)]
    var currentPowerload = [Math.floor(Math.random()*3)]
    var currentPercentage = [Math.floor(Math.random()*3)]
    var reccomendationUsage = [Math.floor(Math.random()*3)]

    if (currentStatus <=1) {
        document.getElementById('CurrentStatus').innerHTML = 'Enable';
        document.getElementById('CurrentStatus').style.color = 'green';
    }

    if (currentPowerload <=1) {
        document.getElementById('CurrentPowerload').innerHTML = 'Low';
        document.getElementById('CurrentPowerload').style.color = 'green';
    } else if (currentPowerload <=2) {
        document.getElementById('CurrentPowerload').innerHTML = 'Medium';
        document.getElementById('CurrentPowerload').style.color = 'orange';
    } else if (currentPowerload <=3) {
        document.getElementById('CurrentPowerload').innerHTML = 'High';
        document.getElementById('CurrentPowerload').style.color = 'red';
    }

    if (currentPercentage <=1) {
        document.getElementById('CurrentPercentage').innerHTML = 'Poorly';
    }

    if (reccomendationUsage <=1) {
        document.getElementById('ReccomendationUsage').innerHTML = 'Low';
        document.getElementById('ReccomendationUsage').style.color = 'red';
    } else if (reccomendationUsage <=2) {
        document.getElementById('ReccomendationUsage').innerHTML = 'Medium';
        document.getElementById('ReccomendationUsage').style.color = 'red';
    } else if (reccomendationUsage <=3) {
        document.getElementById('ReccomendationUsage').innerHTML = 'High';
        document.getElementById('ReccomendationUsage').style.color = 'red';
    }
}