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
    var currentStatus = [Math.floor(Math.random()*1)];
    var currentPowerload = [Math.floor(Math.random()*3)];
    var currentPercentage = document.getElementById("CurrentPercentage")
    var reccomendationUsage = [Math.floor(Math.random()*3)];

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

    if (reccomendationUsage <=1) {
        document.getElementById('ReccomendationUsage').innerHTML = 'Low';
    } else if (reccomendationUsage <=2) {
        document.getElementById('ReccomendationUsage').innerHTML = 'Medium';
    } else if (reccomendationUsage <=3) {
        document.getElementById('ReccomendationUsage').innerHTML = 'High';
    }
    currentPercentage.innerHTML = (Math.floor(Math.random()*100)+1);
}

function powerStation2() {
    var currentStatus = [Math.floor(Math.random()*1)];
    var currentPowerload = [Math.floor(Math.random()*3)];
    var currentPercentage = document.getElementById("CurrentPercentage2")

    if (currentStatus <=1) {
        document.getElementById('CurrentStatus2').innerHTML = 'Enable';
        document.getElementById('CurrentStatus2').style.color = 'green';
    }

    if (currentPowerload <=1) {
        document.getElementById('CurrentPowerload2').innerHTML = 'Low';
        document.getElementById('CurrentPowerload2').style.color = 'green';
    } else if (currentPowerload <=2) {
        document.getElementById('CurrentPowerload2').innerHTML = 'Medium';
        document.getElementById('CurrentPowerload2').style.color = 'orange';
    } else if (currentPowerload <=3) {
        document.getElementById('CurrentPowerload2').innerHTML = 'High';
        document.getElementById('CurrentPowerload2').style.color = 'red';
    }

    currentPercentage.innerHTML = (Math.floor(Math.random()*100)+1);
}