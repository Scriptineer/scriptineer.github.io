navigator.mediaDevices.getUserMedia({ audio: true })
.then(function(stream) {
    // User allowed audio access, play background music
    var audio = new Audio("your-audio-file.mp3");
    audio.loop = true;
    audio.play();
})
.catch(function(error) {
    // User denied audio access, handle accordingly
    alert("Please allow audio access to enjoy the website's music.");
});

function youtubelink() {
    window.open("https://www.youtube.com/channel/UCObs67mc5ReTaED39vs6u7w", "_blank");
}

function redditlink() {
    window.open("https://www.reddit.com/user/JO4R_/", "_blank");
}

function steamlink() {
    window.open("https://steamcommunity.com/profiles/76561198356269821", "_blank");
}

function projectslink() {
    window.open("https://github.com/J04R?tab=repositories", "_blank");
}

function twitterLink() {
    window.open("https://twitter.com/Scriptineer", "_blamk");
}

function websiteslink() {
    window.location.href = 'websites.html'
}

function darkenImage(element) {
    element.classList.add('darken');
}

