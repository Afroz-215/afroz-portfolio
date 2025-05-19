// Initialize Typed.js
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Custom function to set specific value
function setSpecificValue(values) {
    typed.destroy(); // Stop the Typed.js animation
    document.querySelector(".text").innerHTML = values.join(" & "); // Combine your values
}

// Example: Set specific values after 3 seconds
setTimeout(() => {
    setSpecificValue(["Frontend Developer", "Web Developer"]);
}, 3000);
