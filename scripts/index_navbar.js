// Get open button
var open = document.getElementById("open-navbar");

// Get close button
var close = document.getElementById("close-navbar");

// Get navbar
var navbar = document.getElementById("navbar");

// Listener for open button
open.addEventListener("click", (e) => {
    // Open navigation bar
    navbar.setAttribute("class", "open");

    // Hide open button
    open.style.display = "none";

    // Show close button
    close.style.display = "block";
})

// Listener for close button
close.addEventListener("click", (e) => {
    // Close navigation bar
    navbar.setAttribute("class", "closed");

    // Hide close button
    close.style.display = "none";

    // Show open button
    open.style.display = "block";
})