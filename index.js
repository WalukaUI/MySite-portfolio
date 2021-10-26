function iframeRef(frameRef) {
  return frameRef.src ? frameRef.src : frameRef.src;
}

let inside = iframeRef(document.getElementById("one"));

function Listener() {
  let linksed = document.getElementById("urls");
  links = linksed.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (x) => {
      document.getElementById("openBrowser").href = "";
      document.getElementById("one").src = x.target.name;
      document.getElementById("openBrowser").href = x.target.name;
    });
  }
}
Listener();

const sliders = document.querySelectorAll(".slide-in");
const options = {
  threshold: 0,
  rootMargin: "-250px",
};
const apperOnScroll = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
    apperOnScroll.unobserve(entry.target);
  });
}, options);
sliders.forEach((fader) => {
  apperOnScroll.observe(fader);
});

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("scrollButton").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
};

//document.addEventListener("DOMContentLoaded", sc());
