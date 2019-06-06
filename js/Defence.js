function checkPin() {
    var x, text;
    //Get the value of input field with id="numb"
    x = document.getElementById("pinNumber").value;
    // If x is Not a Number or less than one or greater than 10
    if (x == "1234") {
        text = "Missile Launched! <p><img class=\"img-fluid\" src=\"../myImage/missileLaunched.gif\"></p>";
    } else {
        text = "Invalid Pin <p><img class=\"img-fluid\" src=\"../myImage/wrong.gif\"></p>";
    }
    document.getElementById("demo").innerHTML = text;
}
