// FORM VALIDATION 

function main() {
    var Form = document.getElementById("contactForm");
    Form.addEventListener("submit", validateForm);
}

function validateForm(event) {
    var formValid = true;
    var contactForm = document.getElementById("contactForm");

    if (contactForm.name.value == "") {
        formValid = false;
        document.getElementById("nameError").style.display = "block";
        event.preventDefault();
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    if (contactForm.email.value == "") {
        formValid = false; 
        document.getElementById("emailError").style.display = "block";
        event.preventDefault();
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    if (contactForm.message.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("messageError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } else {
        document.getElementById("messageError").style.display = "none";
    }

} 


//  TYPEWRITER

document.addEventListener('DOMContentLoaded', function (event) {
    var text = ["web designer", "web developer"];

    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector("h2").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 900);
        }
    }

    function StartTextAnimation(i) {
        if (typeof text[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 1000);
        }

        if (i < text[i].length) {
            typeWriter(text[i], 0, function () {
                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);
});

//TO TOP BUTTON

toTopbutton = document.getElementById("toTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    toTopbutton.style.display = "block";
  } else {
    toTopbutton.style.display = "none";
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
