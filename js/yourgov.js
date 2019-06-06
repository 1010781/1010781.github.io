function showDate() {
    document.getElementById("demo").innerHTML = Date();
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "myImage/pic_bulboff.gif";
    } else {
        image.src = "myImage/pic_bulbon.gif";
    }
}