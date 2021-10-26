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

const sliders=document.querySelectorAll('.slide-in')
const options={
    threshold:0,
    rootMargin:"-250px"
}
const apperOnScroll= new IntersectionObserver(function(entries){
entries.forEach(entry =>{
   

    if(!entry.isIntersecting){
        return;
    }
     console.log(entry.target);
    entry.target.classList.add('appear')
    apperOnScroll.unobserve(entry.target)
})
},options);
sliders.forEach(fader=>{
    apperOnScroll.observe(fader)
})


//document.addEventListener("DOMContentLoaded", Listener());
