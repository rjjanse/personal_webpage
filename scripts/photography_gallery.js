// Get albums
var albums = document.querySelectorAll(".album-button");

// Get galleries
var galleries = document.querySelectorAll(".gallery");

// Get close button
var close = document.getElementById("close-button");

// Get album wrapper
var album_wrapper = document.querySelectorAll(".album")[0];

// Per album
for(var i = 0; i < albums.length; i++) {
    // Listen to click
    albums[i].addEventListener("click", (e) => {
        // Show album wrapper
        album_wrapper.style.display = "block";
        
        // Get clicked album
        var name = e.target.getAttribute("name");

        // Get targeted album element
        var album = document.getElementById(name);
        
        // Show close button
        close.setAttribute("name", "shown");

        // Reset album name (change from hidden if applicable)
        document.querySelectorAll(".album")[0].setAttribute("name", "shown");

        // Set clicked album gallery to visible
        album.style.display = "block";

        // Set front page to hidden (both columns)
        document.getElementById("left-column").setAttribute("name", "hidden");
        document.getElementById("right-column").setAttribute("name", "hidden");
    })
}

// Close gallery on click
close.addEventListener("click", (e) => {
    // Close album wrapper
    document.querySelectorAll(".album")[0].setAttribute("name", "hidden");

    // Activate after CSS gallery animation (1s)
    setTimeout(() => {
        // Close all galleries
        for(var i = 0; i < galleries.length; i++) {
            // Close gallery
            galleries[i].style.display = "none";
        }
    }, 1000)

    // Activate after CSS album animation (1.5s)
    setTimeout(() => {
        // Close album wrapper
        album_wrapper.style.display = "none";
    }, 1500)

    // Hide close button
    close.setAttribute("name", "hidden")

    // Set front page to shown (both columns)
    document.getElementById("left-column").setAttribute("name", "shown");
    document.getElementById("right-column").setAttribute("name", "shown");
})