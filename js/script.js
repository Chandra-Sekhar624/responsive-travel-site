
// navbar javascript
let lastScrollTop = 0;
const navbar = document.querySelector(".navabs");
const topHeader = document.querySelector(".header .navbar:first-child");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {

        topHeader.classList.remove("hide-top-header");
        navbar.classList.add("default-color");
        navbar.classList.remove("transparent");
    } else {
        topHeader.classList.add("hide-top-header");
        navbar.classList.remove("default-color");
        navbar.classList.add("transparent");
    }

    lastScrollTop = scrollTop;
});

// play videp

function showVideo(event) {
    event.preventDefault();
    document.getElementById("videoBox").classList.add("active");
}

function closeVideo() {
    let videoBox = document.getElementById("videoBox");
    videoBox.classList.remove("active");
    let iframe = document.getElementById("videoFrame");
    iframe.src = iframe.src;
}


// bots
function toggleIframe() {
    var iframeSection = document.getElementById("iframeSection");
    if (iframeSection.style.display === "none" || iframeSection.style.display === "") {
        iframeSection.style.display = "block";
    } else {
        iframeSection.style.display = "none";
    }
}

// about us page counting
document.addEventListener("DOMContentLoaded", () => {
   
  
    const counters = document.querySelectorAll(".counter");
  
    const startCounter = (counter) => {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let increment = target / 100;
  
      const updateCounter = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(updateCounter, 30);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    };
  
    counters.forEach((counter) => startCounter(counter));
  });
  
