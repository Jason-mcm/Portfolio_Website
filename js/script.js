var themeSet = false;

function home() {
    var homeElement = document.getElementById("home");
    let resumeElement = document.getElementById("resume");
    let visitElement = document.getElementById("log-visit");
    let aboutElement = document.getElementById("about");
    let contactElement = document.getElementById("contact");
    if (themeSet) {
        homeElement.style.display = "grid";
    } else {
        homeElement.style.display = "block";
    }
    resumeElement.style.display = "none";
    visitElement.style.display = "none"
    aboutElement.style.display = "none";
    contactElement.style.display = "none";
}

function resume() {
    let homeElement = document.getElementById("home");
    let resumeElement = document.getElementById("resume");
    let visitElement = document.getElementById("log-visit");
    let aboutElement = document.getElementById("about");
    let contactElement = document.getElementById("contact");
    homeElement.style.display = "none";
    resumeElement.style.display = "block";
    visitElement.style.display = "none"
    aboutElement.style.display = "none";
    contactElement.style.display = "none";
}

function logVisit(){
    let homeElement = document.getElementById("home");
    let resumeElement = document.getElementById("resume");
    let visitElement = document.getElementById("log-visit");
    let aboutElement = document.getElementById("about");
    let contactElement = document.getElementById("contact");
    homeElement.style.display = "none";
    resumeElement.style.display = "none";
    visitElement.style.display = "block"
    aboutElement.style.display = "none";
    contactElement.style.display = "none";
}

function about() {
    let homeElement = document.getElementById("home");
    let resumeElement = document.getElementById("resume");
    let visitElement = document.getElementById("log-visit");
    let aboutElement = document.getElementById("about");
    let contactElement = document.getElementById("contact");
    homeElement.style.display = "none";
    resumeElement.style.display = "none";
    visitElement.style.display = "none"
    aboutElement.style.display = "block";
    contactElement.style.display = "none";
}

function contact() {
    let homeElement = document.getElementById("home");
    let resumeElement = document.getElementById("resume");
    let visitElement = document.getElementById("log-visit");
    let aboutElement = document.getElementById("about");
    let contactElement = document.getElementById("contact");
    homeElement.style.display = "none";
    resumeElement.style.display = "none";
    visitElement.style.display = "none"
    aboutElement.style.display = "none";
    contactElement.style.display = "block";
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}


function changeTheme(href, onoff) {
    var existingNode = 0;
    for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].href && document.styleSheets[i].href.indexOf(href) > -1) {
            existingNode = document.styleSheets[i].ownerNode
        }
    }
    if (onoff === undefined) onoff = !existingNode
    if (onoff) {
        if (existingNode) return onoff
        if (document.getElementById("home").style.display === "block") {
            document.getElementById("home").style.display = "grid";
        }
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
        themeSet = true;
    } else {
        if (existingNode) {
            existingNode.parentNode.removeChild(existingNode);
            themeSet = false;
        }
    }
    return onoff;
}