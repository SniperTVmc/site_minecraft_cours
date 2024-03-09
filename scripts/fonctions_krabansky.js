

// SCRIPT GLOBAL


function redirectButton(url) {
    window.location.href = url;
}



function makeExplosion() {
    document.getElementById('specialTnt').src = "../images/tnt-primed.gif";

    setTimeout(function() {
        document.getElementById('container').style.display = 'none';

        // Afficher le texte et le bouton
        document.getElementById('explosionBox').style.display = 'flex';
    }, 3000);
}


function noter() {
    const pseudo = document.getElementById('pseudo').value;
    const message = document.getElementById('contact-message').value;

    alert("Merci à vous " + pseudo + " d'avoir noter mon site web !\n" +
        "Et voici ton message:\n" +
        message);
}


let audio = new Audio("sounds/aria-math-c418.mp3");

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        showAudioEnabledMessage()
        document.getElementById("audioButton").innerHTML = '<i class="bi bi-pause"></i>';
    } else {
        audio.pause();
        showAudioDisabledMessage()
        document.getElementById("audioButton").innerHTML = '<i class="bi bi-play"></i>';
    }
}

function showAudioEnabledMessage() {
    setTimeout(function() {
        document.getElementById("audioDisabled").style.opacity = "0";
        document.getElementById("audioEnabled").style.opacity = "1";
    }, 0);

    setTimeout(function() {
        document.getElementById("audioEnabled").style.opacity = "0";
    }, 3000);
}

function showAudioDisabledMessage() {
    setTimeout(function() {
        document.getElementById("audioEnabled").style.opacity = "0";
        document.getElementById("audioDisabled").style.opacity = "1";
    }, 0);

    setTimeout(function() {
        document.getElementById("audioDisabled").style.opacity = "0";
    }, 3000);
}