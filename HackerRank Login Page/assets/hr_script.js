function inp_name() {
    var field = document.querySelector("#name").value;
    if (field.length < 3) {
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("name_error").style.height = "20px";
    }
    else {
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name_error").style.height = "0px";
    }
}


function inp_email() {
    var field = document.querySelector("#email").value;
    var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (reg.test(field)) {
        document.getElementById("email_error").style.visibility = "hidden";
        document.getElementById("email_error").style.height = "0px";
    } else {
        document.getElementById("email_error").style.visibility = "visible";
        document.getElementById("email_error").style.height = "20px";
    }
}

function inp_passwd() {
    var field = document.querySelector("#passwd").value;
    if (field.length < 6) {
        document.getElementById("passwd_error").style.visibility = "visible";
        document.getElementById("passwd_error").style.height = "20px";
    }
    else {
        document.getElementById("passwd_error").style.visibility = "hidden";
        document.getElementById("passwd_error").style.height = "0px";
    }
}
function cookies_ok(){
    document.getElementById("info_text").style.height = "0px";
    document.getElementById("info_text").style.visibility = "hidden";
}