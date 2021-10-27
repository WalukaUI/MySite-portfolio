
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
  document.getElementById("scrollButton").style.display = "none";
  
};

//Send email------------------------------


let emailForm=document.getElementById("emailData")

emailForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  let name=e.target.name.value
  let email=e.target.email.value
  let message=e.target.message.value

  emailjs.sendForm(
        "service_dchmott",
        "template_4tdthof",
        e.target,
        "user_lKVMUZPYGwUDtHBAdsLEn"
      )
     .then(
        (result) => {
          console.log(result.text);
          //setConfirmWindow(!confirmWindow)
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
})


//document.addEventListener("DOMContentLoaded", scrollers());
