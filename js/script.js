//MENU DE NAVIGATION 
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

//BACK TO TOP
window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
//Calculator

function calc() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var oper = document.getElementById('operators').value;
    if (oper === '+') {
        document.getElementById('result').value = n1 + n2;
    }
    if (oper === '-') {
        document.getElementById('result').value = n1 - n2;
    }
    if (oper === 'X') {
        document.getElementById('result').value = n1 * n2;
    }
    if (oper === '/') {
        document.getElementById('result').value = n1 / n2;
    }
}
//CALCULATOR

$(document).ready(function() {
    $('#one').click(function() {
        document.forms.display.value += 1;
    });
    $('#two').click(function() {
        document.forms.display.value += 2;
    });
    $('#three').click(function() {
        document.forms.display.value += 3;
    });
    $('#four').click(function() {
        document.forms.display.value += 4;
    });
    $('#five').click(function() {
        document.forms.display.value += 5;
    });
    $('#six').click(function() {
        document.forms.display.value += 6;
    });
    $('#seven').click(function() {
        document.forms.display.value += 7;
    });
    $('#eight').click(function() {
        document.forms.display.value += 8;
    });
    $('#nine').click(function() {
        document.forms.display.value += 9;
    });
    $('#zero').click(function() {
        document.forms.display.value += 0;
    });
    $('#add').click(function() {
        document.forms.display.value += '+';
    });
    $('#subs').click(function() {
        document.forms.display.value += '-';
    });
    $('#multi').click(function() {
        document.forms.display.value += '*';
    });
    $('#divide').click(function() {
        document.forms.display.value += '/';
    });
    $('#dot').click(function() {
        document.forms.display.value += '.';
    });
    $('#equal').click(function() {
        if (display.value == "") {
            alert("Veuillez entrer un ou plusieurs nombres pour calculer! Harinjaka ANDRIANANJA vous remerciez");
        } else {
            document.forms.display.value =
                eval(document.forms.display.value);
        }
    });
    $('#clear').click(function() {
        document.forms.display.value = "";
    });
})