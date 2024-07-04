
function validateform() {
    const nama = document.forms['message-form']['name-input'].value;

    if (nama == '') {
        document.getElementById("error-name").innerHTML = "Tidak boleh kosong!";
        return false;
    }

    setname(nama);
    return false;
}

function setname(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById('error-name').innerHTML = "";
}

function validatesecondform() {
    const name = document.forms["message-form2"]["full-name"].value;
    const birthdate = document.forms["message-form2"]["birth-date"].value;
    const gender = document.forms["message-form2"]["gender"].value;
    const messages = document.forms["message-form2"]["messages"].value;

    if (name == "" || birthdate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setsenderui(name, birthdate, gender, messages);
    return false;
}

function setsenderui(name, birthdate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
