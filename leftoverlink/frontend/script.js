// script.js
window.onload = function() {
    showSection("home");
}

function showSection(id) {
    document.getElementById("home").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("profile").style.display = "none";

    if (id === "home") {
        document.getElementById(id).style.display = "flex"; 
    } else {
        document.getElementById(id).style.display = "block";
    }
    
    
}
