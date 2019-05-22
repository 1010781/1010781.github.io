function heatMap() {
    var nbn = [Math.floor(Math.random() * 3)];
    var adsl = [Math.floor(Math.random() * 3)];
    var television = [Math.floor(Math.random() * 3)];
    var phone = [Math.floor(Math.random() * 3)];
    var radio = [Math.floor(Math.random() * 3)];
    var foxtel = [Math.floor(Math.random() * 3)];

    if (nbn <=1) {
        document.getElementById('Nbn').innerHTML = 'Great';
        document.getElementById('Nbn').style.color = 'green';
    } else if (nbn <=2) {
        document.getElementById('Nbn').innerHTML = 'Okay';
        document.getElementById('Nbn').style.color = 'orange';
    } else if (nbn <=3) {
        document.getElementById('Nbn').innerHTML = 'Poorly';
        document.getElementById('Nbn').style.color = 'red';
    }

    if (adsl <=1) {
        document.getElementById('Adsl').innerHTML = 'Great';
        document.getElementById('Adsl').style.color = 'green';
    } else if (adsl <=2) {
        document.getElementById('Adsl').innerHTML = 'Okay';
        document.getElementById('Adsl').style.color = 'orange';
    } else if (adsl <=3) {
        document.getElementById('Adsl').innerHTML = 'Poorly';
        document.getElementById('Adsl').style.color = 'red';
    }

    if (television <=1) {
        document.getElementById('Television').innerHTML = 'Great';
        document.getElementById('Television').style.color = 'green';
    } else if (television <=2) {
        document.getElementById('Television').innerHTML = 'Okay';
        document.getElementById('Television').style.color = 'orange';
    } else if (television <=3) {
        document.getElementById('Television').innerHTML = 'Poorly';
        document.getElementById('Television').style.color = 'red';
    }

    if (phone <=1) {
        document.getElementById('Phone').innerHTML = 'Great';
        document.getElementById('Phone').style.color = 'green';
    } else if (phone <=2) {
        document.getElementById('Phone').innerHTML = 'Okay';
        document.getElementById('Phone').style.color = 'orange';
    } else if (phone <=3) {
        document.getElementById('Phone').innerHTML = 'Poorly';
        document.getElementById('Phone').style.color = 'red';
    }

    if (radio <=1) {
        document.getElementById('Radio').innerHTML = 'Great';
        document.getElementById('Radio').style.color = 'green';
    } else if (radio <=2) {
        document.getElementById('Radio').innerHTML = 'Okay';
        document.getElementById('Radio').style.color = 'orange';
    } else if (radio <=3) {
        document.getElementById('Radio').innerHTML = 'Poorly';
        document.getElementById('Radio').style.color = 'red';
    }

    if (foxtel <=1) {
        document.getElementById('Foxtel').innerHTML = 'Great';
        document.getElementById('Foxtel').style.color = 'green';
    } else if (foxtel <=2) {
        document.getElementById('Foxtel').innerHTML = 'Okay';
        document.getElementById('Foxtel').style.color = 'orange';
    } else if (foxtel <=3) {
        document.getElementById('Foxtel').innerHTML = 'Poorly';
        document.getElementById('Foxtel').style.color = 'red';
    }
}