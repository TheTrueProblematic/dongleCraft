/**
 * On page load, pick the appropriate random background image
 * based on the current viewport orientation (width vs height).
 */
document.addEventListener("DOMContentLoaded", function () {
    setRandomBackground();
});

/**
 * Chooses a random wallpaper from either ~/walls/H/ or ~/walls/V/
 * (images 1.png to 6.png) based on the orientation.
 */
function setRandomBackground() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let folder = "";

    if (width > height) {
        // Landscape orientation -> use "H"
        folder = "H";
    } else {
        // Portrait orientation -> use "V"
        folder = "V";
    }

    const randomIndex = Math.floor(Math.random() * 6) + 1; // 1 to 6
    const bgDiv = document.getElementById("bg");
    bgDiv.style.backgroundImage = `url('/walls/${folder}/${randomIndex}.webp')`;
}

/**
 * Redirect to donglecraft.com if the DongleCraft image is clicked.
 */
function redirectHome() {
    window.location.href = "https://donglecraft.com";
}

/**
 * Navigate to instructions.html from the index page.
 */
function goInstructions() {
    window.location.href = "instructions.html";
}
