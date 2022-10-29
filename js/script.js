function home() {
    let homeElement = document.getElementById("home");
    let resumeElement = document.getElementById("resume");
    // let projectsElement = document.getElementById("projects");
    let aboutElement = document.getElementById("about");
    let contactElement = document.getElementById("contact");
    homeElement.style.display = "block";
    resumeElement.style.display = "none";
    // projectsElement.style.display = "none";
    aboutElement.style.display = "none";
    contactElement.style.display = "none";
}

function resume() {
    let homeElement = document.getElementById("home");
    let resumeElement = document.getElementById("resume");
    // let projectsElement = document.getElementById("projects");
    let aboutElement = document.getElementById("about");
    let contactElement = document.getElementById("contact");
    homeElement.style.display = "none";
    resumeElement.style.display = "block";
    // projectsElement.style.display = "none";
    aboutElement.style.display = "none";
    contactElement.style.display = "none";
}

// function projects() {
//     let homeElement = document.getElementById("home");
//     let resumeElement = document.getElementById("resume");
//     // let projectsElement = document.getElementById("projects");
//     let aboutElement = document.getElementById("about");
//     let contactElement = document.getElementById("contact");
//     homeElement.style.display = "none";
//     resumeElement.style.display = "none";
//     // projectsElement.style.display = "block";
//     aboutElement.style.display = "none";
//     contactElement.style.display = "none";
// }

function about() {
    let homeElement = document.getElementById("home");
    let resumeElement = document.getElementById("resume");
    // let projectsElement = document.getElementById("projects");
    let aboutElement = document.getElementById("about");
    let contactElement = document.getElementById("contact");
    homeElement.style.display = "none";
    resumeElement.style.display = "none";
    // projectsElement.style.display = "none";
    aboutElement.style.display = "block";
    contactElement.style.display = "none";
}

function contact() {
    let homeElement = document.getElementById("home");
    let resumeElement = document.getElementById("resume");
    // let projectsElement = document.getElementById("projects");
    let aboutElement = document.getElementById("about");
    let contactElement = document.getElementById("contact");
    homeElement.style.display = "none";
    resumeElement.style.display = "none";
    // projectsElement.style.display = "none";
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