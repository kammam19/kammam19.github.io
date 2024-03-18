function changeImage() {
    var img = document.getElementById("a01-image");
    if (img.src.includes("A01.gif")) {
        img.src = "Pic/A02.jpg";
        img.alt = "A02.jpg";
    } else {
        img.src = "Pic/A01.gif";
        img.alt = "A01.gif";
    }
}


var currentImage = 1; // Indicates the current image number

function changeImage() {
    var img = document.getElementById("a01-image");
    currentImage++;

    // Change image based on the current image number
    if (currentImage === 2) {
        img.src = "Pic/A02.jpg";
        img.alt = "A02.jpg";
    } else if (currentImage === 3) {
        img.src = "Pic/A03.gif";
        img.alt = "A03.gif";
    } else {
        // Reset to the first image if reached the end
        img.src = "Pic/A01.gif";
        img.alt = "A01.gif";
        currentImage = 1;
    }
}