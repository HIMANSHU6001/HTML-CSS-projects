const myTimer = setInterval(slide_show, 10000);
let cnt = true;

function slide_show() {
    if (cnt == true) {
        cnt = false;
        document.getElementById("slide_1").style.visibility = "visible";
        document.getElementById("slide_1").style.animation = "float_in_left 1s";
        document.getElementById("slide_2").style.animation = "float_out_right 1s";
        document.getElementById("slide_2").style.animationFillMode = "forwards";
        document.getElementById("slide_1").style.animationFillMode = "forwards";
        document.getElementById("dot1").src = "assets/dot-5de2c435.svg";
        document.getElementById("dot2").src = "assets/active-dot-becc684a.svg";
    }
    else if (cnt == false) {
        cnt = true;
        document.getElementById("slide_2").style.visibility = "visible";
        document.getElementById("slide_2").style.animation = "float_in_left 1s";
        document.getElementById("slide_1").style.animation = "float_out_right 1s";
        document.getElementById("slide_2").style.animationFillMode = "forwards";
        document.getElementById("slide_1").style.animationFillMode = "forwards";
        document.getElementById("dot2").src = "assets/dot-5de2c435.svg";
        document.getElementById("dot1").src = "assets/active-dot-becc684a.svg";
    }
}

function changePause() {
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "block";
}
function changePlay() {
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";
}
function goLeft() {
    if (cnt == true) {
        cnt = false;
        document.getElementById("slide_1").style.visibility = "visible";
        document.getElementById("slide_1").style.animation = "float_in_left 1s";
        document.getElementById("slide_2").style.animation = "float_out_right 1s";
        document.getElementById("slide_2").style.animationFillMode = "forwards";
        document.getElementById("slide_1").style.animationFillMode = "forwards";
        document.getElementById("dot1").src = "assets/dot-5de2c435.svg";
        document.getElementById("dot2").src = "assets/active-dot-becc684a.svg";
    }
    else if (cnt == false) {
        cnt = true;
        document.getElementById("slide_2").style.visibility = "visible";
        document.getElementById("slide_2").style.animation = "float_in_left 1s";
        document.getElementById("slide_1").style.animation = "float_out_right 1s";
        document.getElementById("slide_2").style.animationFillMode = "forwards";
        document.getElementById("slide_1").style.animationFillMode = "forwards";
        document.getElementById("dot2").src = "assets/dot-5de2c435.svg";
        document.getElementById("dot1").src = "assets/active-dot-becc684a.svg";
    }
}

function goRight() {
    if (cnt == true) {
        cnt = false;
        document.getElementById("slide_1").style.visibility = "visible";
        document.getElementById("slide_1").style.animation = "float_out_left 1s";
        document.getElementById("slide_2").style.animation = "float_in_right 1s";
        document.getElementById("slide_2").style.animationFillMode = "forwards";
        document.getElementById("slide_1").style.animationFillMode = "forwards";
        document.getElementById("dot1").src = "assets/dot-5de2c435.svg";
        document.getElementById("dot2").src = "assets/active-dot-becc684a.svg";
    }
    else if (cnt == false) {
        cnt = true;
        document.getElementById("slide_2").style.visibility = "visible";
        document.getElementById("slide_2").style.animation = "float_out_left 1s";
        document.getElementById("slide_1").style.animation = "float_in_right 1s";
        document.getElementById("slide_2").style.animationFillMode = "forwards";
        document.getElementById("slide_1").style.animationFillMode = "forwards";
        document.getElementById("dot2").src = "assets/dot-5de2c435.svg";
        document.getElementById("dot1").src = "assets/active-dot-becc684a.svg";
    }
}

function changePause() {
    clearTimeout(myTimer);
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "block"
}

function changePlay() {
    const myTimer = setInterval(slide_show, 10000);
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block"
}

let phone_dropped = false;
function drop_phone() {
    if (phone_dropped == false) {
        phone_dropped = true;
        document.getElementById("phone-dropdown").style.display = "flex";
        document.getElementById("phone-dropdown").style.animation = "float_in_left 0.5s";
        document.getElementById("ham").style.display = "none";
        document.getElementById("cross").style.display = "block";
    }

    else if (phone_dropped == true) {
        phone_dropped = false;
        document.getElementById("phone-dropdown").style.display = "none";
        document.getElementById("cross").style.display = "none";
        document.getElementById("ham").style.display = "flex";
    }
}

let support_dropped = false;
function drop_support() {
    if (support_dropped == false) {
        support_dropped = true;
        document.getElementById("support-dropdown").style.display = "flex";
        document.getElementById("support-down").style.display = "none";
        document.getElementById("support-up").style.display = "block";
    }

    else if (support_dropped == true) {
        support_dropped = false;
        document.getElementById("support-dropdown").style.display = "none";
        document.getElementById("support-up").style.display = "none";
        document.getElementById("support-down").style.display = "block";
    }
}

let pc_dropped = false;
function drop_pc() {
    if (pc_dropped == false) {
        pc_dropped = true;
        document.getElementById("pc-dropdown").style.display = "flex";
        document.getElementById("pc-down").style.display = "none";
        document.getElementById("pc-up").style.display = "block";
    }

    else if (pc_dropped == true) {
        pc_dropped = false;
        document.getElementById("pc-dropdown").style.display = "none";
        document.getElementById("pc-up").style.display = "none";
        document.getElementById("pc-down").style.display = "block";
    }
}

let ent_dropped = false;
function drop_ent() {
    if (ent_dropped == false) {
        ent_dropped = true;
        document.getElementById("ent-dropdown").style.display = "flex";
        document.getElementById("ent-down").style.display = "none";
        document.getElementById("ent-up").style.display = "block";
    }

    else if (ent_dropped == true) {
        ent_dropped = false;
        document.getElementById("ent-dropdown").style.display = "none";
        document.getElementById("ent-up").style.display = "none";
        document.getElementById("ent-down").style.display = "block";
    }
}


let bus_dropped = false;
function drop_bus() {
    if (bus_dropped == false) {
        bus_dropped = true;
        document.getElementById("bus-dropdown").style.display = "flex";
        document.getElementById("bus-down").style.display = "none";
        document.getElementById("bus-up").style.display = "block";
    }

    else if (bus_dropped == true) {
        bus_dropped = false;
        document.getElementById("bus-dropdown").style.display = "none";
        document.getElementById("bus-up").style.display = "none";
        document.getElementById("bus-down").style.display = "block";
    }
}

let dev_dropped = false;
function drop_dev() {
    if (dev_dropped == false) {
        dev_dropped = true;
        document.getElementById("dev-dropdown").style.display = "flex";
        document.getElementById("dev-down").style.display = "none";
        document.getElementById("dev-up").style.display = "block";
    }

    else if (dev_dropped == true) {
        dev_dropped = false;
        document.getElementById("dev-dropdown").style.display = "none";
        document.getElementById("dev-up").style.display = "none";
        document.getElementById("dev-down").style.display = "block";
    }
}

let oth_dropped = false;
function drop_oth() {
    if (oth_dropped == false) {
        oth_dropped = true;
        document.getElementById("oth-dropdown").style.display = "flex";
        document.getElementById("oth-down").style.display = "none";
        document.getElementById("oth-up").style.display = "block";
    }

    else if (oth_dropped == true) {
        oth_dropped = false;
        document.getElementById("oth-dropdown").style.display = "none";
        document.getElementById("oth-up").style.display = "none";
        document.getElementById("oth-down").style.display = "block";
    }
}

let all_dropped = false;
function drop_all() {
    if (all_dropped == false) {
        all_dropped = true;
        document.getElementById("all-dropdown").style.display = "block";
        document.getElementById("all").style.backgroundColor = "#f2f2f2";
        document.getElementById("all_arrow").style.animation = "rot_180 0.5s forwards";
    }
    else if (all_dropped == true) {
        all_dropped = false;
        document.getElementById("all-dropdown").style.display = "none";
        document.getElementById("all").style.backgroundColor = "transparent";
        document.getElementById("all_arrow").style.animation = "rot_-180 0.5s forwards";
    }
}

window.onscroll = function (e) {
    if (window.scrollY > 500) {
        document.getElementById("back_to_top").style.animation = "fade_in 0.4s forwards";
    } else if (window.scrollY < 500) {
        document.getElementById("back_to_top").style.animation = "fade_out 0.4s forwards";
    }
}

function toTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}