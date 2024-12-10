// let currentVideoIndex = 0;
// const videos = document.querySelectorAll("video");

// function changeSlide(direction) {
//     // Pause the current video and remove the active class
//     videos[currentVideoIndex].classList.remove("active");
//     videos[currentVideoIndex].pause();

//     // Update the current video index
//     currentVideoIndex = (currentVideoIndex + direction + videos.length) % videos.length;

//     // Add the active class to the new video and play it
//     videos[currentVideoIndex].classList.add("active");
//     videos[currentVideoIndex].play();
// }

let currentVideoIndex = 0;
const videos = document.querySelectorAll("video");

function changeSlide(direction) {
    // Pause the current video and remove the active class
    videos[currentVideoIndex].classList.remove("active");
    videos[currentVideoIndex].pause();

    // Update the current video index
    currentVideoIndex = (currentVideoIndex + direction + videos.length) % videos.length;

    // Add the active class to the new video and play it
    videos[currentVideoIndex].classList.add("active");
    videos[currentVideoIndex].play();
}

// Event listeners for navigation buttons
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => changeSlide(-1));
nextButton.addEventListener("click", () => changeSlide(1));

// Automatically switch slides every 10 seconds (optional)
setInterval(() => changeSlide(1), 10000);
