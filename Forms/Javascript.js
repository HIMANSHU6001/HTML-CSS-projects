function fname() {
    var field = document.querySelector("#fstname").value;

    if (field.length < 3) {

        document.getElementById("MessageBox").style.visibility = "visible";
        document.getElementById("arrow").style.visibility = "visible";
        document.getElementById("MessageBox").innerHTML = "Minimum 3 charecters required";
    } else if (field.length > 15) {
        document.getElementById("MessageBox").style.visibility = "visible";
        document.getElementById("arrow").style.visibility = "visible";
        document.getElementById("MessageBox").innerHTML = "Maximum 15 charecters allowed";
    } else {
        document.getElementById("MessageBox").style.visibility = "hidden";
        document.getElementById("arrow").style.visibility = "hidden";
    }
}

function lname() {
    var field = document.querySelector("#lstname").value;

    if (field.length > 15) {
        document.getElementById("MessageBox2").style.visibility = "visible";
        document.getElementById("arrow2").style.visibility = "visible";
        document.getElementById("MessageBox2").innerHTML = "Maximum 15 charecters allowed";
    } else {
        document.getElementById("MessageBox2").style.visibility = "hidden";
        document.getElementById("arrow2").style.visibility = "hidden";
    }
}

function phtest() {
    var field = document.querySelector("#phno").value;
    if (isNaN(field)) {
        document.getElementById("MessageBox3").style.visibility = "visible";
        document.getElementById("arrow3").style.visibility = "visible";
        document.getElementById("MessageBox3").innerHTML = "Enter a Phone Number";
    } else {
        if (field.length == 10) {
            document.getElementById("MessageBox3").style.visibility = "hidden";
            document.getElementById("arrow3").style.visibility = "hidden";
        } else {
            document.getElementById("MessageBox3").style.visibility = "visible";
            document.getElementById("arrow3").style.visibility = "visible";
            document.getElementById("MessageBox3").innerHTML = "Enter 10-digit Phone Number";
        }
    }
}


function concode() {
    var field = document.querySelector("#contcode").value;
    if (field.length == 3) {
        document.getElementById("MessageBox4").style.visibility = "hidden";
        document.getElementById("arrow4").style.visibility = "hidden";
    } else {
        document.getElementById("MessageBox4").style.visibility = "visible";
        document.getElementById("arrow4").style.visibility = "visible";
    }
}

function email() {
    var field = document.querySelector("#mail").value;
    var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (reg.test(field)) {
        document.getElementById("MessageBox5").style.visibility = "hidden";
        document.getElementById("arrow5").style.visibility = "hidden";
    } else {
        document.getElementById("MessageBox5").style.visibility = "visible";
        document.getElementById("arrow5").style.visibility = "visible";
        document.getElementById("MessageBox5").innerHTML = "Enter a valid E-mail";
    }
}

function confpass() {
    var confpassword = document.querySelector("#conpass").value;
    var password = document.querySelector("#pasword").value;
    if (confpassword === password) {
        document.getElementById("MessageBox6").style.visibility = "hidden";
        document.getElementById("arrow6").style.visibility = "hidden";
    } else {
        document.getElementById("MessageBox6").style.visibility = "visible";
        document.getElementById("arrow6").style.visibility = "visible";
        document.getElementById("MessageBox6").innerHTML = "Password Mismatch";
    }
}