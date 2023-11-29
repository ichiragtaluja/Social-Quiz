console.log("about");
// JavaScript code
document.querySelector("#quiz-me").addEventListener("click", function () {
  // Redirecting to the home page
  window.location.href = "index.html";
  // Scrolling to the levels section after a slight delay (adjust the delay as needed)
  setTimeout(function () {
    const levelsSection = document.querySelector("#level-section");
    if (levelsSection) {
      levelsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 100); // Delay in milliseconds
});
