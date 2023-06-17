function checkWindowSize() {
    if (window.innerWidth < 768) {
      document.getElementById("navbarNav").classList.add("collapse");
    } else {
      document.getElementById("navbarNav").classList.remove("collapse");
    }
}

// Call the function on page load and window resize
window.addEventListener("load", checkWindowSize);
window.addEventListener("resize", checkWindowSize);