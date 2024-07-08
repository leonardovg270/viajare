var acc = document.getElementsByClassName("p1");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function voltar() {
    document.querySelector('html').scrollIntoView({
        behavior: 'smooth'
    });
}

function facebook() {
    window.open('https://www.facebook.com/', '_blank');
}

function instagram() {
    window.open('https://www.instagram.com/', '_blank');
}

function linkedin() {
    window.open('https://www.linkedin.com/', '_blank');
}

function whatsapp() {
    window.open('https://web.whatsapp.com/', '_blank');
}